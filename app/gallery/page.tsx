import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Calendar } from "lucide-react"

const galleryItems = [
  {
    id: 1,
    title: "EPPAD Annual Conference 2024",
    date: "November 2024",
    images: [
      { url: "/conference-keynote-speaker.jpg", alt: "Keynote speaker" },
      { url: "/ep2.jpg", alt: "Networking session" },
      { url: "/ep3.jpg", alt: "Panel discussion" },
      { url: "/ep6.jpg", alt: "Conference attendees" },
    ],
  },
  {
    id: 2,
    title: "Community Health Fair",
    date: "September 2024",
    images: [
      { url: "/health-fair-screening.jpg", alt: "Health screening" },
      { url: "/health-fair-volunteers.jpg", alt: "Volunteers" },
      { url: "/health-fair-community.jpg", alt: "Community members" },
      { url: "/health-fair-education.jpg", alt: "Health education" },
    ],
  },
  {
    id: 3,
    title: "Mentorship Program Launch",
    date: "June 2024",
    images: [
      { url: "/mentorship-meeting.png", alt: "Mentorship meeting" },
      { url: "/mentors-and-mentees.jpg", alt: "Mentors and mentees" },
      { url: "/professional-development.jpg", alt: "Professional development" },
      { url: "/net2.jpg", alt: "Networking event" },
    ],
  },
  {
    id: 4,
    title: "Inaugural Symposium 2019",
    date: "February 2019",
    images: [
      {
        url: "/2019.jpg",
        alt: "Symposium at Ethiopian Embassy",
      },
      { url: "/inaguration.JPEG", alt: "Distinguished speakers" },
      { url: "/enag3.JPEG", alt: "110 participants" },
      { url: "/celebrate.jpg", alt: "Working group formation" },
    ],
  },
]

export default function GalleryPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-display text-4xl font-bold tracking-tight text-balance text-foreground sm:text-5xl">
                EPPAD Gallery
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Moments from our conferences, community events, and professional gatherings
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Sections */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="space-y-24">
              {galleryItems.map((item) => (
                <div key={item.id}>
                  <div className="mb-8">
                    <h2 className="font-display text-2xl font-bold text-foreground">{item.title}</h2>
                    <div className="flex items-center gap-2 mt-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{item.date}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {item.images.map((image, index) => (
                      <div
                        key={index}
                        className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-muted"
                      >
                        <img
                          src={image.url || "/placeholder.svg"}
                          alt={image.alt}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <p className="text-sm font-medium text-white">{image.alt}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary/5 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Join Our Next Event
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Be part of the EPPAD community and create memories at our upcoming conferences and events
              </p>
              <div className="mt-8 flex gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                  <a href="/events">View Events</a>
                </Button>
                <Button asChild size="lg" variant="outline">
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
