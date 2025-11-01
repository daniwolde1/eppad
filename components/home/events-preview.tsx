import Link from "next/link"
import { Calendar, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const upcomingEvents = [
  {
    id: 1,
    title: "EPPAD Annual Conference 2025",
    date: "November 8, 2025",
    location: "Silver Spring, MD",
    description:
      "Join us for our flagship annual conference featuring keynote speakers, networking, and book signings.",
    type: "Conference",
  },
  {
    id: 2,
    title: "Pharmaceutical Research Webinar",
    date: "December 15, 2025",
    location: "Virtual",
    description: "Latest advances in drug discovery and development presented by leading researchers.",
    type: "Webinar",
  },
  {
    id: 3,
    title: "Mentorship Program Kickoff",
    date: "January 20, 2026",
    location: "Virtual",
    description: "Connect with mentors and mentees in our structured professional development program.",
    type: "Workshop",
  },
]

export function EventsPreview() {
  return (
    <section className="bg-muted/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Upcoming Events
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Stay connected through conferences, webinars, and networking opportunities
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-3">
          {upcomingEvents.map((event) => (
            <Card key={event.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-2 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                  {event.type}
                </div>
                <CardTitle className="font-display text-xl">{event.title}</CardTitle>
                <CardDescription className="flex flex-col gap-2 mt-2">
                  <span className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4" />
                    {event.date}
                  </span>
                  <span className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4" />
                    {event.location}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">{event.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/events">
              View All Events
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
