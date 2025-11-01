import { GraduationCap, Users, BookOpen, Heart, Globe, Lightbulb } from "lucide-react"

const features = [
  {
    name: "Professional Development",
    description:
      "Access continuing education, mentorship programs, and career advancement opportunities tailored for pharmaceutical professionals.",
    icon: GraduationCap,
  },
  {
    name: "Global Network",
    description:
      "Connect with Ethiopian pharmaceutical professionals across North America, Europe, and beyond through our vibrant community.",
    icon: Globe,
  },
  {
    name: "Knowledge Sharing",
    description:
      "Contribute to and access cutting-edge research, publications, and best practices in pharmaceutical sciences.",
    icon: BookOpen,
  },
  {
    name: "Community Impact",
    description:
      "Make a difference through healthcare initiatives, scholarship programs, and support for pharmaceutical education in Ethiopia.",
    icon: Heart,
  },
  {
    name: "Collaborative Research",
    description:
      "Participate in multi-institutional research projects and contribute to advancing pharmaceutical sciences globally.",
    icon: Lightbulb,
  },
  {
    name: "Mentorship Programs",
    description:
      "Guide the next generation of Ethiopian pharmaceutical professionals through structured mentorship and career guidance.",
    icon: Users,
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 sm:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Join EPPAD?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Discover the benefits of being part of a thriving community of pharmaceutical professionals
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="group relative rounded-xl border border-border bg-card p-8 hover:border-primary/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-7 w-7 text-primary" aria-hidden="true" />
                  </div>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{feature.name}</h3>
                <p className="text-base leading-relaxed text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
