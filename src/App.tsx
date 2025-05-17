// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Suspense, lazy, useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import MainLayout from "@/layouts/MainLayout";
// import Loader from "./components/Loader";

// const Home = lazy(() => import("@/pages/Home"));
// const HotelId = lazy(() => import("@/pages/HotelId"));
// const Hotel = lazy(() => import("@/pages/Hotel"));
// const HotelList = lazy(() => import("@/pages/HotelList"));
// const Contact = lazy(() => import("@/pages/Contact"));
// const TransportationBooking = lazy(() => import("@/pages/Rides"));
// const CarHire = lazy(() => import("@/pages/CarHire"));

// export default function App() {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000, // animation duration in ms
//       // once: true,     // whether animation should happen only once
//     });
//   }, []);
//   return (
//     <BrowserRouter>
//       <MainLayout>
//         <Suspense fallback={<Loader />}>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/hotels" element={<Hotel />} />
//             <Route path="/hotels_list" element={<HotelList />} />

//             {/* <HotelSearch /> */}
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/airport-rides" element={<TransportationBooking />} />
//             <Route path="/car-hire" element={<CarHire />} />
//             <Route path="/hotel/:id" element={<HotelId />} />

//           </Routes>
//         </Suspense>
//       </MainLayout>
//     </BrowserRouter>
//   );
// }

import {
  Calendar,
  ExternalLink,
  Instagram,
  Music,
  Twitter,
  Youtube,
} from "lucide-react";

// import { Button } from "./component/ui/button";
// import { FanRegistrationModal } from "./components/FanRegistrationModal";
import "./App.css";
import { Button } from "./components/ui/button";
import { FanRegistrationModal } from "./components/ui/FanRegistrationModal";
import HomeBanner from "./assets/IMG_1406.jpg";
import Tonight from "./assets/IMG_1408.jpg";
import Mama from "./assets/IMG_1407.jpg";
import Clothes from "./assets/IMG_1409.jpg";
import Cap from "./assets/IMG_1410.jpg";
import Star from "./assets/IMG_1411.jpg";
import Chain from "./assets/IMG_1414.jpg";
import Gym from "./assets/IMG_1413.jpg";
import TicTok from "./assets/tiktok.svg";
import { TicketSoldOutModal } from "./components/TicketSoldoutModal";
import { useState } from "react";
import { EventsList } from "./components/EventList";

function App() {
  const Gallery = [Mama, Clothes, Cap, Star, Chain, Gym];

  const [ticketModalOpen, setTicketModalOpen] = useState(false);
  const [selectedShowDate, setSelectedShowDate] = useState("");

  const handleTicketClick = (date: string) => {
    setSelectedShowDate(date);
    setTicketModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <header className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src={HomeBanner}
          alt="Warren Zeiders performing"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-4xl md:text-6xl font-bold text-[#dcbc05] mb-4">
            Warren Zeiders
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-2xl">
            Country music's rising star
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Biography Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b-2 border-amber-700 pb-2 inline-block">
            Biography
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-4">
                Warren Zeiders is a rising country music artist known for his
                distinctive raspy vocals and authentic songwriting. Born and
                raised in Pennsylvania, Warren initially pursued sports before
                finding his true calling in music.
              </p>
              <p className="text-lg mb-4">
                His breakthrough came through social media, where his covers and
                original songs quickly gained millions of views. Warren's music
                blends traditional country with modern elements, creating a
                sound that resonates with fans across generations.
              </p>
              <p className="text-lg">
                With hit songs like "Ride the Lightning," "Pretty Little
                Poison," and "Wild Horse," Warren has established himself as one
                of country music's most promising new talents. His authentic
                approach and outlaw country style have earned him a dedicated
                fanbase and critical acclaim.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden ">
              <img
                src={Tonight}
                alt="Warren Zeiders portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b-2 border-amber-700 pb-2 inline-block">
            Photo Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Gallery.map((data, i) => (
              <div
                key={i}
                className="relative h-60 rounded-lg overflow-hidden  hover: transition-shadow"
              >
                <img
                  src={data}
                  alt={`Warren Zeiders photo ${i}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Recent Shows */}
        {/* <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b-2 border-amber-700 pb-2 inline-block">
            Recent & Upcoming Shows
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { date: "May 20, 2025", venue: "The Fillmore", location: "Philadelphia, PA" },
              { date: "May 25, 2025", venue: "Ryman Auditorium", location: "Nashville, TN" },
              { date: "June 2, 2025", venue: "Red Rocks Amphitheatre", location: "Morrison, CO" },
              { date: "June 10, 2025", venue: "Grand Ole Opry", location: "Nashville, TN" },
              { date: "June 18, 2025", venue: "Ascend Amphitheater", location: "Nashville, TN" },
              { date: "June 24, 2025", venue: "The Anthem", location: "Washington, DC" },
            ].map((show, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-stone-200"
              >
                <div className="flex items-start gap-4">
                  <Calendar className="h-6 w-6 text-amber-700 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-1">{show.date}</h3>
                    <p className="text-lg">{show.venue}</p>
                    <p className="text-stone-600 mb-4">{show.location}</p>
                    <Button
                      variant="outline"
                      className="border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white"
                      onClick={() => handleTicketClick(show.date)}
                    >
                      Get Tickets
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section> */}

        <section className="mb-16">
          <EventsList />
        </section>

        {/* Social Media */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b-2 border-amber-700 pb-2 inline-block">
            Connect With Warren
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                name: "Instagram",
                icon: <Instagram className="h-8 w-8" />,
                url: "https://www.instagram.com/warrenzeiders/",
              },
              {
                name: "Twitter",
                icon: <Twitter className="h-8 w-8" />,
                url: "https://x.com/warrenzeiders?s=21&t=j37EvmmCF6F5dSybMTGFMQ",
              },
              {
                name: "YouTube",
                icon: <Youtube className="h-8 w-8" />,
                url: "https://youtube.com/warrenzeiders",
              },
              {
                name: "TikTok",
                icon: <img src={TicTok} />,
                url: "http://www.tiktok.com/@warrenzeidersfanclub3",
              },
            ].map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-6 bg-white rounded-lg  hover:shadow-lg transition-shadow border border-stone-200"
              >
                <div className="text-amber-700 mb-2">{social.icon}</div>
                <span className="font-medium">{social.name}</span>
                <div className="flex items-center text-sm text-stone-500 mt-1">
                  <span>Follow</span>
                  <ExternalLink className="h-3 w-3 ml-1" />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-16 bg-amber-50 rounded-xl shadow-inner mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Warren's Official Fan Club
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Get exclusive updates, early access to tickets, merchandise
            discounts, and more by joining Warren's official fan club.
          </p>
          <FanRegistrationModal />
        </section>
      </main>

      <footer className="bg-stone-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">
            © {new Date().getFullYear()} Warren Zeiders Fan Page
          </p>
        </div>
      </footer>
      <TicketSoldOutModal
        isOpen={ticketModalOpen}
        onClose={() => setTicketModalOpen(false)}
        showNumber={selectedShowDate}
      />
    </div>
  );
}

export default App;
