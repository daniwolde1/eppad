import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Leaf, Users, BookOpen, Lightbulb } from "lucide-react"

export default function ResearchDevelopmentPage() {
  const initiatives = [
    {
      name: "Ethiopian Herbal Pharmacopoeia",
      description:
        "Building a comprehensive database of traditional Ethiopian medicinal plants with scientific validation and standardization.",
      icon: BookOpen,
    },
    {
      name: "Cross-Functional Team",
      description:
        "Collaborating with Ethiopian universities, AHRI, eFDA, and the Ministry of Health to advance traditional medicine research.",
      icon: Users,
    },
    {
      name: "Research & Documentation",
      description:
        "Conducting pharmacognosy and natural products research to document and validate traditional medicinal practices.",
      icon: Lightbulb,
    },
    {
      name: "Integration with Modern Medicine",
      description:
        "Bridging traditional Ethiopian healing practices with contemporary pharmaceutical sciences and clinical applications.",
      icon: Leaf,
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <h1 className="font-display text-4xl font-bold tracking-tight text-balance text-foreground sm:text-5xl">
                Traditional Medicine Working Group
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Exploring and integrating traditional Ethiopian medicine with modern scientific practices
              </p>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl mb-16">
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">Our Focus</h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-4">
                The Traditional Medicine Working Group is dedicated to exploring and integrating traditional Ethiopian
                medicine with modern scientific practices through the Ethiopian Herbal Pharmacopoeia project. We're
                building a cross-functional team from Ethiopian universities, AHRI, and eFDA, working closely with the
                Ministry of Health.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground mb-6">
                Our mission is to document, validate, and standardize traditional Ethiopian medicinal practices,
                ensuring they meet modern pharmaceutical standards while preserving their cultural significance and
                therapeutic value.
              </p>
              <div className="bg-accent/5 border-l-4 border-accent p-6 rounded-r-lg">
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">How You Can Help</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Contribute research expertise in pharmacognosy or natural products</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Provide guidance and mentorship to research teams</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Support project coordination and funding initiatives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Collaborate with Ethiopian institutions on research projects</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {initiatives.map((initiative) => (
                <div key={initiative.name} className="rounded-lg border border-border bg-card p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <initiative.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground">{initiative.name}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{initiative.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
