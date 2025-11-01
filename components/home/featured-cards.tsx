import Link from "next/link"
import { Calendar, Users, BookOpen } from "lucide-react"

const featuredItems = [
  {
    title: "EPPAD Annual Conference 2025",
    description: "Join us for the 6th Annual EPPAD Conference",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FwPhbqP9AtCGpUiI6KOVXgxbluDd27.png",
    icon: Calendar,
    href: "/conference-2025",
  },
  {
    title: "Become our Member",
    description: "Join our inspirational team, help your society…",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Oct%2031%2C%202025%2C%2008_43_11%20PM-tniaUFQX3xOpxDr5iC6IqKyWDyE1IU.png",
    icon: Users,
    href: "/membership",
  },
  {
    title: "Events & Programs",
    description: "Connect, learn, and grow through our conferences and community events",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-31%20at%2020.56.04-kgti4SHBvqullAAfVFjkinVvtcnc0h.jpeg",
    icon: BookOpen,
    href: "/events",
  },
]

export function FeaturedCards() {
  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group relative overflow-hidden rounded-lg border border-border bg-card hover:shadow-xl transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                <div className="mt-4">
                  <span className="text-sm font-medium text-accent group-hover:underline">Read More →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
