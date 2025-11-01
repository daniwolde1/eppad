import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Heart, GraduationCap, HandHeart, Building2, FileText } from "lucide-react"

export default function PhilanthropyPage() {
  const initiatives = [
    {
      name: "Student Scholarships",
      description:
        "Scholarship fund for needy pharmacy students to support their education and professional development.",
      icon: GraduationCap,
    },
    {
      name: "Student Support Programs",
      description:
        "Providing sanitary pads for needy pharmacy female students who miss days every month due to inability to buy sanitary pads.",
      icon: HandHeart,
    },
    {
      name: "Community Health Support",
      description:
        "Providing medicines to welfare groups like Macedonia Senior Citizens Home for treating common diseases.",
      icon: Heart,
    },
    {
      name: "EPA Partnership",
      description:
        "Supporting Ethiopian Pharmaceutical Association events and activities, including BP/Blood Sugar monitors for public screening of non-communicable diseases and journal publications.",
      icon: Building2,
    },
    {
      name: "Service Improvement",
      description: "Quick fix supports to improve dispensing and similar pharmacy services in Ethiopian communities.",
      icon: FileText,
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative bg-gradient-to-br from-gold/10 via-background to-accent/5 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
                <Heart className="h-8 w-8 text-gold" />
              </div>
              <h1 className="font-display text-4xl font-bold tracking-tight text-balance text-foreground sm:text-5xl">
                Philanthropy Working Group
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Contributing to a pharmacy fund that directly supports critical needs in the pharmaceutical sector
              </p>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl mb-16">
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-4">
                The pharmacy philanthropy participant group is intended to contribute to a "pharmacy fund" that will go
                to directly support critical need areas in the pharmaceutical sector to realize immediate practical
                responses.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Our initiatives range from supporting needy pharmacy students to partnering with the Ethiopian
                Pharmaceutical Association, always with the goal of strengthening the pharmaceutical sector and
                improving healthcare access in Ethiopian communities.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {initiatives.map((initiative) => (
                <div key={initiative.name} className="rounded-lg border border-border bg-card p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/10">
                      <initiative.icon className="h-6 w-6 text-gold" />
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
