"use client"

import { useState } from "react"
import { Calendar, MapPin, Clock, Ticket, FireExtinguisher, Flame, FlameIcon, SparkleIcon } from "lucide-react"
import { Button } from "./ui/button"
import { TicketSoldOutModal } from "./TicketSoldoutModal"

// Define the event type based on the provided data
interface Event {
  eventId: number
  name: string
  url: string
  dayOfWeek: string
  formattedDate: string
  formattedTime: string
  venueName: string
  formattedVenueLocation: string
  formattedMinPrice: string
  venueCapacityString?: string
  fastSellingEventMessage?: {
    message: string
    hasValue: boolean
  }
  highDemandEventMessage?: {
    message: string
    hasValue: boolean
  }
}

export function EventsList() {
  const [visibleEvents, setVisibleEvents] = useState(8)
  const [ticketModalOpen, setTicketModalOpen] = useState(false)
  const [selectedShowDate, setSelectedShowDate] = useState("")

  const handleTicketClick = (date: string) => {
    setSelectedShowDate(date)
    setTicketModalOpen(true)
  }

  const loadMore = () => {
    setVisibleEvents((prev) => prev + 8)
  }

  const isEventInFuture = (event: Event) => {
    // Parse the date from the event
    const currentYear = new Date().getFullYear()
    // Format is like "May 17" or "Jun 19 - Jun 22" for multi-day events
    let eventDateStr = event.formattedDate

    // Handle multi-day events by using the LAST date (not the first)
    if (eventDateStr.includes("-")) {
      // Extract the end date (after the hyphen)
      eventDateStr = eventDateStr.split("-")[1].trim()
    }

    // Add the year to the date string (all events are for the current year)
    const fullDateStr = `${eventDateStr}, ${currentYear}`
    const eventDate = new Date(fullDateStr)

    // Compare with current date
    return eventDate >= new Date()
  }

  // Combined events array from all the provided data
  const events: Event[] = [
    {
      eventId: 155153100,
      name: "Warren Zeiders",
      url: "https://www.viagogo.com/Concert-Tickets/Country-and-Folk-Music/Warren-Zeiders-Tickets/E-155153100",
      dayOfWeek: "Sat",
      formattedDate: "May 17",
      formattedTime: "8:00 PM",
      venueName: "The Outer Harbor Live At Terminal B",
      formattedVenueLocation: "Buffalo, NY, USA",
      formattedMinPrice: "$50",
      fastSellingEventMessage: {
        message: "Selling fast",
        hasValue: true,
      },
      highDemandEventMessage: {
        message: "13 people viewed this event",
        hasValue: true,
      },
    },
    {
        eventId: 155153100,
        name: "Warren Zeiders",
        url: "https://www.viagogo.com/Concert-Tickets/Country-and-Folk-Music/Warren-Zeiders-Tickets/E-155153100",
        dayOfWeek: "Sat",
        formattedDate: "Jun 11",
        formattedTime: "02:00 PM",
        venueName: "Country Fest",
        formattedVenueLocation: "North Lawrence, OH, US",
        formattedMinPrice: "$84.99",
        fastSellingEventMessage: {
          message: "Selling fast",
          hasValue: true,
        },
        highDemandEventMessage: {
          message: "13 people viewed this event",
          hasValue: true,
        },
      },
    {
      eventId: 155456316,
      name: "Barefoot Country Music Fest with Jason Aldean, Jelly Roll, Lainey Wilson and many more - 4 Day Pass",
      url: "https://www.viagogo.com/Concert-Tickets/Country-and-Folk-Music/Warren-Zeiders-Tickets/E-155456316",
      dayOfWeek: "Thu - Sun",
      formattedDate: "Jun 19 - Jun 22",
      formattedTime: "4 days",
      venueName: "Wildwood Beach",
      formattedVenueLocation: "Wildwood, NJ, USA",
      formattedMinPrice: "$499",
      venueCapacityString: "Venue capacity: 7,000",
      fastSellingEventMessage: {
        message: "Selling fast",
        hasValue: true,
      },
    },
    {
      eventId: 157718393,
      name: "Warren Zeiders",
      url: "https://www.viagogo.com/Concert-Tickets/Country-and-Folk-Music/Warren-Zeiders-Tickets/E-157718393",
      dayOfWeek: "Thu",
      formattedDate: "Jun 19",
      formattedTime: "7:00 PM",
      venueName: "Beak and Skiff Apple Orchards",
      formattedVenueLocation: "Lafayette, NY, USA",
      formattedMinPrice: "$71",
      venueCapacityString: "Venue capacity: 1,800",
      fastSellingEventMessage: {
        message: "Selling fast",
        hasValue: true,
      },
    },
    {
      eventId: 157331779,
      name: "Warren Zeiders",
      url: "https://www.viagogo.com/Concert-Tickets/Country-and-Folk-Music/Warren-Zeiders-Tickets/E-157331779",
      dayOfWeek: "Thu",
      formattedDate: "Jun 26",
      formattedTime: "7:00 PM",
      venueName: "Ozarks Amphitheater",
      formattedVenueLocation: "Camdenton, MO, USA",
      formattedMinPrice: "$50",
      venueCapacityString: "Venue capacity: 13,000",
      highDemandEventMessage: {
        message: "6 people viewed this event",
        hasValue: true,
      },
    },
    {
      eventId: 157332967,
      name: "Warren Zeiders",
      url: "https://www.viagogo.com/Concert-Tickets/Country-and-Folk-Music/Warren-Zeiders-Tickets/E-157332967",
      dayOfWeek: "Fri",
      formattedDate: "Jun 27",
      formattedTime: "8:00 PM",
      venueName: "Wave",
      formattedVenueLocation: "Wichita, KS, USA",
      formattedMinPrice: "$71",
      venueCapacityString: "Venue capacity: 3,300",
    },
    {
      eventId: 157344085,
      name: "Warren Zeiders",
      url: "https://www.viagogo.com/Concert-Tickets/Country-and-Folk-Music/Warren-Zeiders-Tickets/E-157344085",
      dayOfWeek: "Sat",
      formattedDate: "Jun 28",
      formattedTime: "8:00 PM",
      venueName: "Greeley Stampede",
      formattedVenueLocation: "Greeley, CO, USA",
      formattedMinPrice: "$56",
      venueCapacityString: "Venue capacity: 15,000",
    },
    {
      eventId: 156923360,
      name: "Warren Zeiders",
      url: "https://www.viagogo.com/Concert-Tickets/Country-and-Folk-Music/Warren-Zeiders-Tickets/E-156923360",
      dayOfWeek: "Thu",
      formattedDate: "Jul 10",
      formattedTime: "7:30 PM",
      venueName: "LaPorte County Fair",
      formattedVenueLocation: "La Porte, IN, USA",
      formattedMinPrice: "$46",
      venueCapacityString: "Venue capacity: 500",
    },
    {
      eventId: 156996854,
      name: "Warren Zeiders",
      url: "https://www.viagogo.com/Concert-Tickets/Country-and-Folk-Music/Warren-Zeiders-Tickets/E-156996854",
      dayOfWeek: "Sat",
      formattedDate: "Jul 12",
      formattedTime: "7:30 PM",
      venueName: "Morgan County Fair Grandstand",
      formattedVenueLocation: "Jacksonville, IL, USA",
      formattedMinPrice: "$42",
      venueCapacityString: "Venue capacity: 500",
    },
    {
      eventId: 157331903,
      name: "Warren Zeiders",
      url: "https://www.viagogo.com/Concert-Tickets/Country-and-Folk-Music/Warren-Zeiders-Tickets/E-157331903",
      dayOfWeek: "Thu",
      formattedDate: "Jul 17",
      formattedTime: "7:30 PM",
      venueName: "Vetter Stone Amphitheater",
      formattedVenueLocation: "Mankato, MN, USA",
      formattedMinPrice: "$67",
      venueCapacityString: "Venue capacity: 10,000",
      highDemandEventMessage: {
        message: "6 people viewed this event",
        hasValue: true,
      },
    },
    {
      eventId: 157331906,
      name: "Warren Zeiders",
      url: "https://www.viagogo.com/Concert-Tickets/Country-and-Folk-Music/Warren-Zeiders-Tickets/E-157331906",
      dayOfWeek: "Fri",
      formattedDate: "Jul 18",
      formattedTime: "7:30 PM",
      venueName: "Ledge Waite Park Amphitheater",
      formattedVenueLocation: "Waite Park, MN, USA",
      formattedMinPrice: "$64",
      venueCapacityString: "Venue capacity: 6,000",
      highDemandEventMessage: {
        message: "6 people viewed this event",
        hasValue: true,
      },
    },
    {
      eventId: 157299754,
      name: "Warren Zeiders",
      url: "https://www.viagogo.com/Concert-Tickets/Country-and-Folk-Music/Warren-Zeiders-Tickets/E-157299754",
      dayOfWeek: "Sat",
      formattedDate: "Jul 19",
      formattedTime: "8:30 PM",
      venueName: "Adams County Fairgrounds",
      formattedVenueLocation: "Hastings, NE, USA",
      formattedMinPrice: "$50",
      venueCapacityString: "Venue capacity: 10",
    },
    {
      eventId: 157386436,
      name: "Warren Zeiders",
      url: "https://www.viagogo.com/Concert-Tickets/Country-and-Folk-Music/Warren-Zeiders-Tickets/E-157386436",
      dayOfWeek: "Fri",
      formattedDate: "Jul 25",
      formattedTime: "7:30 PM",
      venueName: "Celeste Center at Ohio Expo Center and State Fairgrounds - Complex",
      formattedVenueLocation: "Columbus, OH, USA",
      formattedMinPrice: "$69",
      venueCapacityString: "Venue capacity: 10,200",
      fastSellingEventMessage: {
        message: "Selling fast",
        hasValue: true,
      },
    },
    {
      eventId: 157331961,
      name: "Warren Zeiders",
      url: "https://www.viagogo.com/Concert-Tickets/Country-and-Folk-Music/Warren-Zeiders-Tickets/E-157331961",
      dayOfWeek: "Sat",
      formattedDate: "Jul 26",
      formattedTime: "8:00 PM",
      venueName: "Q Casino",
      formattedVenueLocation: "Dubuque, IA, USA",
      formattedMinPrice: "$84",
      venueCapacityString: "Venue capacity: 3,500",
      highDemandEventMessage: {
        message: "6 people viewed this event",
        hasValue: true,
      },
    },
    {
      eventId: 157331977,
      name: "Warren Zeiders",
      url: "https://www.viagogo.com/Concert-Tickets/Country-and-Folk-Music/Warren-Zeiders-Tickets/E-157331977",
      dayOfWeek: "Thu",
      formattedDate: "Jul 31",
      formattedTime: "7:00 PM",
      venueName: "Essentia Health Plaza at The Lights - Complex",
      formattedVenueLocation: "West Fargo, ND, USA",
      formattedMinPrice: "$66",
      highDemandEventMessage: {
        message: "6 people viewed this event",
        hasValue: true,
      },
    },
    {
      eventId: 156884529,
      name: "Warren Zeiders",
      url: "https://www.viagogo.com/Concert-Tickets/Country-and-Folk-Music/Warren-Zeiders-Tickets/E-156884529",
      dayOfWeek: "Fri",
      formattedDate: "Aug 01",
      formattedTime: "7:30 PM",
      venueName: "Arnolds Park Amusement Park",
      formattedVenueLocation: "Arnolds Park, IA, USA",
      formattedMinPrice: "$68",
      venueCapacityString: "Venue capacity: 200",
    },
    {
      eventId: 157839313,
      name: "Tri State Rodeo - Warren Zeiders",
      url: "https://www.viagogo.com/Concert-Tickets/Country-and-Folk-Music/Warren-Zeiders-Tickets/E-157839313",
      dayOfWeek: "Sat",
      formattedDate: "Sep 06",
      formattedTime: "7:00 PM",
      venueName: "Tri-State Rodeo",
      formattedVenueLocation: "Fort Madison, IA, USA",
      formattedMinPrice: "$56",
      venueCapacityString: "Venue capacity: 10,000",
    },
    {
      eventId: 157582336,
      name: "Warren Zeiders",
      url: "https://www.viagogo.com/Concert-Tickets/Country-and-Folk-Music/Warren-Zeiders-Tickets/E-157582336",
      dayOfWeek: "Thu",
      formattedDate: "Sep 11",
      formattedTime: "7:30 PM",
      venueName: "Maverik Center",
      formattedVenueLocation: "West Valley City, UT, USA",
      formattedMinPrice: "$50",
      venueCapacityString: "Venue capacity: 12,600",
      highDemandEventMessage: {
        message: "6 people viewed this event",
        hasValue: true,
      },
    },
    {
      eventId: 157583366,
      name: "Warren Zeiders",
      url: "https://www.viagogo.com/Concert-Tickets/Country-and-Folk-Music/Warren-Zeiders-Tickets/E-157583366",
      dayOfWeek: "Fri",
      formattedDate: "Sep 12",
      formattedTime: "7:30 PM",
      venueName: "Amphitheater at Ford Idaho Center",
      formattedVenueLocation: "Nampa, ID, USA",
      formattedMinPrice: "$48",
      venueCapacityString: "Venue capacity: 10,500",
    },
    {
      eventId: 157585299,
      name: "Warren Zeiders",
      url: "https://www.viagogo.com/Concert-Tickets/Country-and-Folk-Music/Warren-Zeiders-Tickets/E-157585299",
      dayOfWeek: "Sat",
      formattedDate: "Sep 13",
      formattedTime: "7:30 PM",
      venueName: "BECU Live at Northern Quest Casino - Complex",
      formattedVenueLocation: "Airway Heights, WA, USA",
      formattedMinPrice: "$77",
      venueCapacityString: "Venue capacity: 5,000",
    },
    {
      eventId: 157582349,
      name: "Warren Zeiders with Chayce Beckham",
      url: "https://www.viagogo.com/Concert-Tickets/Country-and-Folk-Music/Warren-Zeiders-Tickets/E-157582349",
      dayOfWeek: "Thu",
      formattedDate: "Sep 18",
      formattedTime: "7:30 PM",
      venueName: "Hayden Homes Amphitheater",
      formattedVenueLocation: "Bend, OR, USA",
      formattedMinPrice: "$53",
      venueCapacityString: "Venue capacity: 5,000",
      highDemandEventMessage: {
        message: "6 people viewed this event",
        hasValue: true,
      },
    },
    {
      eventId: 157582347,
      name: "Warren Zeiders",
      url: "https://www.viagogo.com/Concert-Tickets/Country-and-Folk-Music/Warren-Zeiders-Tickets/E-157582347",
      dayOfWeek: "Fri",
      formattedDate: "Sep 19",
      formattedTime: "7:30 PM",
      venueName: "Angel of The Winds Arena",
      formattedVenueLocation: "Everett, WA, USA",
      formattedMinPrice: "$46",
      venueCapacityString: "Venue capacity: 10,000",
      highDemandEventMessage: {
        message: "6 people viewed this event",
        hasValue: true,
      },
    },
    {
      eventId: 157584052,
      name: "Warren Zeiders",
      url: "https://www.viagogo.com/Concert-Tickets/Country-and-Folk-Music/Warren-Zeiders-Tickets/E-157584052",
      dayOfWeek: "Sat",
      formattedDate: "Sep 20",
      formattedTime: "7:30 PM",
      venueName: "Abbotsford Entertainment and Sports Centre",
      formattedVenueLocation: "Abbotsford, Canada",
      formattedMinPrice: "$44",
      venueCapacityString: "Venue capacity: 7,046",
      highDemandEventMessage: {
        message: "6 people viewed this event",
        hasValue: true,
      },
    },
    {
      eventId: 157588239,
      name: "Warren Zeiders",
      url: "https://www.viagogo.com/Concert-Tickets/Country-and-Folk-Music/Warren-Zeiders-Tickets/E-157588239",
      dayOfWeek: "Mon",
      formattedDate: "Sep 22",
      formattedTime: "7:30 PM",
      venueName: "Prospera Place",
      formattedVenueLocation: "Kelowna, Canada",
      formattedMinPrice: "$81",
      venueCapacityString: "Venue capacity: 6,886",
    },
    {
      eventId: 157581579,
      name: "Warren Zeiders",
      url: "https://www.viagogo.com/Concert-Tickets/Country-and-Folk-Music/Warren-Zeiders-Tickets/E-157581579",
      dayOfWeek: "Wed",
      formattedDate: "Sep 24",
      formattedTime: "7:30 PM",
      venueName: "Scotiabank Saddledome",
      formattedVenueLocation: "Calgary, Canada",
      formattedMinPrice: "$38",
      venueCapacityString: "Venue capacity: 19,289",
      highDemandEventMessage: {
        message: "7 people viewed this event",
        hasValue: true,
      },
    },
    {
      eventId: 157581525,
      name: "Warren Zeiders",
      url: "https://www.viagogo.com/Concert-Tickets/Country-and-Folk-Music/Warren-Zeiders-Tickets/E-157581525",
      dayOfWeek: "Thu",
      formattedDate: "Sep 25",
      formattedTime: "7:30 PM",
      venueName: "Rogers Place",
      formattedVenueLocation: "Edmonton, Canada",
      formattedMinPrice: "$46",
      venueCapacityString: "Venue capacity: 18,641",
      highDemandEventMessage: {
        message: "7 people viewed this event",
        hasValue: true,
      },
    },
    {
      eventId: 153588870,
      name: "Tim McGraw",
      url: "https://www.viagogo.com/Concert-Tickets/Country-and-Folk-Music/Warren-Zeiders-Tickets/E-153588870",
      dayOfWeek: "Sat",
      formattedDate: "Sep 27",
      formattedTime: "7:00 PM",
      venueName: "Wean Park",
      formattedVenueLocation: "Youngstown, OH, USA",
      formattedMinPrice: "$68",
      venueCapacityString: "Venue capacity: 4,800",
      highDemandEventMessage: {
        message: "11 people viewed this event",
        hasValue: true,
      },
    },
    {
      eventId: 157584141,
      name: "Warren Zeiders",
      url: "https://www.viagogo.com/Concert-Tickets/Country-and-Folk-Music/Warren-Zeiders-Tickets/E-157584141",
      dayOfWeek: "Sat",
      formattedDate: "Sep 27",
      formattedTime: "7:30 PM",
      venueName: "SaskTel Centre",
      formattedVenueLocation: "Saskatoon, Canada",
      formattedMinPrice: "$57",
      venueCapacityString: "Venue capacity: 15,195",
      highDemandEventMessage: {
        message: "7 people viewed this event",
        hasValue: true,
      },
    },
    {
      eventId: 157581526,
      name: "Warren Zeiders",
      url: "https://www.viagogo.com/Concert-Tickets/Country-and-Folk-Music/Warren-Zeiders-Tickets/E-157581526",
      dayOfWeek: "Sun",
      formattedDate: "Sep 28",
      formattedTime: "7:30 PM",
      venueName: "Canada Life Centre (formerly Bell MTS Place)",
      formattedVenueLocation: "Winnipeg, Canada",
      formattedMinPrice: "$57",
      venueCapacityString: "Venue capacity: 15,004",
      highDemandEventMessage: {
        message: "6 people viewed this event",
        hasValue: true,
      },
    },
    {
      eventId: 157581523,
      name: "Warren Zeiders",
      url: "https://www.viagogo.com/Concert-Tickets/Country-and-Folk-Music/Warren-Zeiders-Tickets/E-157581523",
      dayOfWeek: "Wed",
      formattedDate: "Oct 01",
      formattedTime: "7:30 PM",
      venueName: "Canada Life Place (formally Budweiser Gardens) - Complex",
      formattedVenueLocation: "London, Canada",
      formattedMinPrice: "$57",
      venueCapacityString: "Venue capacity: 9,036",
      highDemandEventMessage: {
        message: "6 people viewed this event",
        hasValue: true,
      },
    },
    {
      eventId: 157584160,
      name: "Warren Zeiders",
      url: "https://www.viagogo.com/Concert-Tickets/Country-and-Folk-Music/Warren-Zeiders-Tickets/E-157584160",
      dayOfWeek: "Thu",
      formattedDate: "Oct 02",
      formattedTime: "7:30 PM",
      venueName: "Place Bell",
      formattedVenueLocation: "Laval, Canada",
      formattedMinPrice: "$40",
      venueCapacityString: "Venue capacity: 10,000",
      highDemandEventMessage: {
        message: "6 people viewed this event",
        hasValue: true,
      },
    },
    {
      eventId: 157584170,
      name: "Warren Zeiders",
      url: "https://www.viagogo.com/Concert-Tickets/Country-and-Folk-Music/Warren-Zeiders-Tickets/E-157584170",
      dayOfWeek: "Sat",
      formattedDate: "Oct 04",
      formattedTime: "7:30 PM",
      venueName: "Coca-Cola Coliseum",
      formattedVenueLocation: "Toronto, Canada",
      formattedMinPrice: "$55",
      venueCapacityString: "Venue capacity: 7,779",
      highDemandEventMessage: {
        message: "6 people viewed this event",
        hasValue: true,
      },
    },
    {
      eventId: 157581524,
      name: "Warren Zeiders",
      url: "https://www.viagogo.com/Concert-Tickets/Country-and-Folk-Music/Warren-Zeiders-Tickets/E-157581524",
      dayOfWeek: "Sun",
      formattedDate: "Oct 05",
      formattedTime: "7:30 PM",
      venueName: "Canadian Tire Centre",
      formattedVenueLocation: "Ottawa, Canada",
      formattedMinPrice: "$60",
      venueCapacityString: "Venue capacity: 19,153",
    },
    {
      eventId: 157584200,
      name: "Warren Zeiders",
      url: "https://www.viagogo.com/Concert-Tickets/Country-and-Folk-Music/Warren-Zeiders-Tickets/E-157584200",
      dayOfWeek: "Tue",
      formattedDate: "Oct 07",
      formattedTime: "7:30 PM",
      venueName: "Avenir Centre",
      formattedVenueLocation: "Moncton, Canada",
      formattedMinPrice: "$63",
      venueCapacityString: "Venue capacity: 8,800",
      highDemandEventMessage: {
        message: "6 people viewed this event",
        hasValue: true,
      },
    },
    {
      eventId: 157581520,
      name: "Warren Zeiders",
      url: "https://www.viagogo.com/Concert-Tickets/Country-and-Folk-Music/Warren-Zeiders-Tickets/E-157581520",
      dayOfWeek: "Wed",
      formattedDate: "Oct 08",
      formattedTime: "7:30 PM",
      venueName: "Scotiabank Centre",
      formattedVenueLocation: "Halifax, Canada",
      formattedMinPrice: "$49",
      venueCapacityString: "Venue capacity: 13,000",
      highDemandEventMessage: {
        message: "6 people viewed this event",
        hasValue: true,
      },
    },
    {
      eventId: 157582410,
      name: "Warren Zeiders",
      url: "https://www.viagogo.com/Concert-Tickets/Country-and-Folk-Music/Warren-Zeiders-Tickets/E-157582410",
      dayOfWeek: "Thu",
      formattedDate: "Oct 23",
      formattedTime: "7:30 PM",
      venueName: "Mainstage at The Astro - Complex",
      formattedVenueLocation: "La Vista, NE, USA",
      formattedMinPrice: "$67",
      venueCapacityString: "Venue capacity: 2,500",
      highDemandEventMessage: {
        message: "7 people viewed this event",
        hasValue: true,
      },
    },
    {
      eventId: 157582475,
      name: "Warren Zeiders",
      url: "https://www.viagogo.com/Concert-Tickets/Country-and-Folk-Music/Warren-Zeiders-Tickets/E-157582475",
      dayOfWeek: "Fri",
      formattedDate: "Oct 24",
      formattedTime: "7:30 PM",
      venueName: "Cable Dahmer Arena",
      formattedVenueLocation: "Independence, MO, USA",
      formattedMinPrice: "$51",
      venueCapacityString: "Venue capacity: 5,800",
      fastSellingEventMessage: {
        message: "Selling fast",
        hasValue: true,
      },
    },
  ]

  const futureEvents = events.filter(isEventInFuture)


  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold mb-6 border-b-2 border-amber-700 pb-2 inline-block">Recent & Upcoming Shows</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {futureEvents.slice(0, visibleEvents).map((event) => (
          <div
            key={event.eventId}
            className="bg-white p-6 rounded-lg  hover:shadow-lg transition-shadow border border-stone-200 flex flex-col"
          >
            <div className="flex-1">
              <div className="flex items-start gap-4">
                <Calendar className="h-6 w-6 text-amber-700 flex-shrink-0 mt-1" />
                <div className="">
                  <div className="flex justify-between relative  gap-2">
                    <h3 className="font-bold text-left text-xl">
                      {event.dayOfWeek}, {event.formattedDate}
                    </h3>
                    {event.fastSellingEventMessage?.hasValue && (
                      <span className="bg-red-100 absolute -top-5 -right-5 text-red-800 text-xs px-2 py-1 rounded-full"><Flame/></span>
                    )}
                  </div>
                  <div className="flex  items-center gap-1 text-stone-600 mb-1">
                    <Clock className="h-4 w-4" />
                    <span>{event.formattedTime}</span>
                  </div>
                  <p className="text-lg text-left  font-medium mb-1">{event.venueName}</p>
                  <div className="flex  items-center gap-1 text-stone-600 mb-4">
                    <MapPin className="h-4 w-4" />
                    <span>{event.formattedVenueLocation}</span>
                  </div>
                  {event.venueCapacityString && (
                    <p className="text-xs text-left  text-stone-500 mb-2">{event.venueCapacityString}</p>
                  )}
                  {event.highDemandEventMessage?.hasValue && (
                    <p className="text-xs text-left text-amber-700 mb-2">{event.highDemandEventMessage.message}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div className="text-lg font-bold text-amber-700">{event.formattedMinPrice}</div>
              <Button
                variant="outline"
                className="border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white"
                onClick={() => handleTicketClick(event.formattedDate)}
              >
                <Ticket className="h-4 w-4 mr-2" />
                Get Tickets
              </Button>
            </div>
          </div>
        ))}
      </div>

      {visibleEvents < events.length && (
        <div className="mt-8 text-center">
          <Button onClick={loadMore} className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-6" size="lg">
            Load More Shows ({events.length - visibleEvents} remaining)
          </Button>
        </div>
      )}

      <TicketSoldOutModal
        isOpen={ticketModalOpen}
        onClose={() => setTicketModalOpen(false)}
        showNumber={selectedShowDate}
      />
    </div>
  )
}
