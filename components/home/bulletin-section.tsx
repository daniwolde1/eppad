import Link from "next/link"
import { FileText } from "lucide-react"
import Image from "next/image"

const bulletins = [
  {
    title: "EPPAD Bulletin Vol 5, No. 1",
    image: "/bulletin-covers/vol5-no1-march-2025.png",
    href: "/bulletin#vol-5-no-1",
  },
  {
    title: "EPPAD Bulletin Vol 4, No. 2",
    image: "/bulletin-covers/vol4-no2-september-2024.png",
    href: "/bulletin#vol-4-no-2",
  },
  {
    title: "EPPAD Bulletin Vol 4, No. 1",
    image: "/bulletin-covers/vol4-no1-march-2024.png",
    href: "/bulletin#vol-4-no-1",
  },
]

export function BulletinSection() {
  return (
    <section className="py-24 sm:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="h-1 w-16 bg-gold mx-auto mb-6" />
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">EPPAD BULLETIN</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">Check out our latest bulletins</p>
        </div>
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {bulletins.map((bulletin) => (
            <Link
              key={bulletin.title}
              href={bulletin.href}
              className="group relative overflow-hidden rounded-lg border border-border bg-card hover:shadow-xl transition-all"
            >
              <div className="relative h-64 overflow-hidden bg-muted/30">
                <Image
                  src={bulletin.image || "/placeholder.svg"}
                  alt={`Cover of ${bulletin.title}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {bulletin.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
