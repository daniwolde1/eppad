import Link from "next/link"
import { ArrowRight, GraduationCap, Scale, Leaf, Heart, Newspaper, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const workingGroups = [
  {
    name: "Educational Working Group",
    description: "Advancing pharmaceutical education and professional development opportunities.",
    icon: GraduationCap,
    href: "/what-we-do/education-training",
  },
  {
    name: "Regulatory & Policy Working Group",
    description: "Navigating pharmaceutical regulations and policy development.",
    icon: Scale,
    href: "/what-we-do/industry-regulatory",
  },
  {
    name: "Traditional Medicine Working Group",
    description: "Researching and promoting Ethiopian traditional medicinal practices.",
    icon: Leaf,
    href: "/what-we-do/traditional-medicine",
  },
  {
    name: "Philanthropy Working Group",
    description: "Making a positive impact through healthcare initiatives and community programs.",
    icon: Heart,
    href: "/what-we-do/community-outreach",
  },
  {
    name: "Public Relations",
    description: "Sharing knowledge and research through publications and communications.",
    icon: Newspaper,
    href: "/publications",
  },
  {
    name: "Investment Working Group",
    description: "Exploring pharmaceutical investment opportunities and economic development.",
    icon: TrendingUp,
    href: "/what-we-do/investment",
  },
]

export function WorkingGroupsPreview() {
  return (
    <section className="py-24 sm:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="h-1 w-16 bg-gold mx-auto mb-6" />
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">What We Do!</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">Here are the basic areas we focus on...</p>
        </div>
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {workingGroups.map((group) => (
            <Link
              key={group.name}
              href={group.href}
              className="group relative rounded-lg border border-border bg-card p-6 hover:shadow-lg transition-all hover:border-primary/50"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-accent/10 group-hover:bg-accent/20 transition-all group-hover:scale-110">
                  <group.icon className="h-8 w-8 text-accent" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {group.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{group.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg" className="rounded-full bg-transparent">
            <Link href="/what-we-do">
              View All Working Groups
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
