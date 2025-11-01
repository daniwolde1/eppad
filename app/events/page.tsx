"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { useState } from "react"
import { Calendar, MapPin, Clock, Search } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const events = [
  {
    id: 1,
    title: "EPPAD Annual Conference 2025",
    date: "November 8, 2025",
    time: "9:00 AM - 3:00 PM EST",
    location: "Civic Center, Silver Spring, MD",
    type: "Conference",
    description:
      "Join us for our 6th Annual EPPAD Conference featuring keynote speakers Dr. Tesfaye Biftu, Prof. Bisrat Hailemeskel, and Dr. Fekadu Fullas. Book signing ceremony, networking opportunities, and professional development sessions.",
    status: "upcoming",
  },
  {
    id: 2,
    title: "5th EPPAD Annual Conference",
    date: "2024",
    time: "Full Day Event",
    location: "Virginia",
    type: "Conference",
    description:
      "Successfully conducted the 5th Annual Conference, continuing our tradition of bringing together professionals to address critical pharmaceutical and healthcare topics.",
    status: "past",
  },
  {
    id: 3,
    title: "4th EPPAD Annual Conference",
    date: "November 2023",
    time: "Full Day Event",
    location: "Virginia",
    type: "Conference",
    description:
      "Successfully convened professionals around the critical theme 'Mental Health and Chronic Disease,' addressing urgent public health priorities.",
    status: "past",
  },
  {
    id: 4,
    title: "Pharmaceutical Investment Forum",
    date: "September 2019",
    time: "Full Day Event",
    location: "Silver Spring, MD",
    type: "Forum",
    description:
      "Organized a pharmaceutical investment forum in Silver Spring, MD, exploring opportunities for diaspora investment in Ethiopian pharmaceutical sector.",
    status: "past",
  },
  {
    id: 5,
    title: "Professional Development Session",
    date: "June 2019",
    time: "Half Day Event",
    location: "Silver Spring, MD",
    type: "Workshop",
    description:
      "Conducted the first professional development and career guidance session, supporting members' growth and advancement.",
    status: "past",
  },
  {
    id: 6,
    title: "Inaugural Symposium",
    date: "February 2019",
    time: "Full Day Event",
    location: "Ethiopian Embassy, Washington DC",
    type: "Symposium",
    description:
      "Hosted our first major event at the Ethiopian Embassy in Washington DC, bringing together diaspora professionals and dignitaries.",
    status: "past",
  },
]

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedType, setSelectedType] = useState<string>("all")

  const eventTypes = ["all", "Conference", "Forum", "Workshop", "Symposium"]

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = selectedType === "all" || event.type === selectedType
    return matchesSearch && matchesType
  })

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-display text-4xl font-bold tracking-tight text-balance text-foreground sm:text-5xl">
                Events & Programs
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Connect, learn, and grow through our conferences, webinars, and community events
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-12 border-b border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search events..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {eventTypes.map((type) => (
                  <Button
                    key={type}
                    variant={selectedType === type ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedType(type)}
                    className={selectedType === type ? "bg-primary" : ""}
                  >
                    {type === "all" ? "All Events" : type}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Events List */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {filteredEvents.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">No events found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {filteredEvents.map((event) => (
                  <Card key={event.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                          {event.type}
                        </div>
                        <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                          {event.status}
                        </div>
                      </div>
                      <CardTitle className="font-display text-xl">{event.title}</CardTitle>
                      <CardDescription className="flex flex-col gap-2 mt-3">
                        <span className="flex items-center gap-2 text-sm">
                          <Calendar className="h-4 w-4" />
                          {event.date}
                        </span>
                        <span className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4" />
                          {event.time}
                        </span>
                        <span className="flex items-center gap-2 text-sm">
                          <MapPin className="h-4 w-4" />
                          {event.location}
                        </span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm leading-relaxed text-muted-foreground mb-4">{event.description}</p>
                      <Button className="w-full bg-accent hover:bg-accent/90">Register Now</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary/5 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Stay Updated
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Join EPPAD to receive notifications about upcoming events and exclusive member opportunities
              </p>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                  <a href="/membership">Become a Member</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
