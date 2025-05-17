"use client"

import type React from "react"

import { useState } from "react"
import { CheckCircle2 } from "lucide-react"

import { Button } from "./button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./dialog"
import { Input } from "./input"
import { Label } from "./label"
import { Textarea } from "./textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select"

export function FanRegistrationModal() {
  const [open, setOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally handle the form submission to a backend
    setSubmitted(true)

    // Reset form after 3 seconds and close modal
    setTimeout(() => {
      setSubmitted(false)
      setOpen(false)
    }, 3000)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-6 text-lg">
          Join the Fan Club
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-[#fff]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Join Warren Zeiders Fan Club</DialogTitle>
          <DialogDescription>
            Fill out the form below to join Warren's official fan club and get exclusive updates.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-8 flex flex-col items-center justify-center text-center">
            <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Thank You!</h3>
            <p>Your registration has been submitted successfully. Welcome to the fan club!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <div className="grid grid-cols-2 gap-4">
                <Input id="city" placeholder="City" required />
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="State/Province" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="AL">Alabama</SelectItem>
                    <SelectItem value="AK">Alaska</SelectItem>
                    <SelectItem value="AZ">Arizona</SelectItem>
                    <SelectItem value="CA">California</SelectItem>
                    <SelectItem value="CO">Colorado</SelectItem>
                    <SelectItem value="FL">Florida</SelectItem>
                    <SelectItem value="GA">Georgia</SelectItem>
                    <SelectItem value="TN">Tennessee</SelectItem>
                    <SelectItem value="TX">Texas</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="favoriteSong">Favorite Warren Zeiders Song</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a song" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ride-the-lightning">Ride the Lightning</SelectItem>
                  <SelectItem value="pretty-little-poison">Pretty Little Poison</SelectItem>
                  <SelectItem value="wild-horse">Wild Horse</SelectItem>
                  <SelectItem value="outlaw">Outlaw</SelectItem>
                  <SelectItem value="dark-night">Dark Night</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Why do you want to join the fan club?</Label>
              <Textarea id="message" placeholder="Tell us a bit about yourself and why you're a fan..." />
            </div>

            <div className="pt-4 flex justify-end gap-2">
              <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" className="bg-amber-700 hover:bg-amber-800">
                Submit Registration
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
