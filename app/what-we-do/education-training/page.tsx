import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { GraduationCap, BookOpen, Users, Award } from "lucide-react"

export default function EducationTrainingPage() {
  const programs = [
    {
      name: "Continuing Education",
      description:
        "Regular webinars, workshops, and seminars covering the latest advances in pharmaceutical sciences and clinical practice.",
      icon: BookOpen,
    },
    {
      name: "Professional Development",
      description:
        "Career advancement workshops, leadership training, and skills development programs for pharmaceutical professionals.",
      icon: Award,
    },
    {
      name: "Mentorship Programs",
      description:
        "Structured mentorship connecting experienced professionals with students and early-career pharmacists.",
      icon: Users,
    },
    {
      name: "Academic Partnerships",
      description:
        "Collaborations with pharmacy schools in Ethiopia to support curriculum development and faculty training.",
      icon: GraduationCap,
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative bg-gradient-to-br from-accent/10 via-background to-primary/5 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                <GraduationCap className="h-8 w-8 text-accent" />
              </div>
              <h1 className="font-display text-4xl font-bold tracking-tight text-balance text-foreground sm:text-5xl">
                Educational Working Group
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Empowering pharmaceutical professionals through continuous learning and development
              </p>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl mb-16">
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-4">
                The Education & Training working group is dedicated to providing high-quality continuing education and
                professional development opportunities for EPPAD members. We organize educational events, facilitate
                knowledge sharing, and support the advancement of pharmaceutical education in Ethiopia.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Through our programs, we help members stay current with advances in pharmaceutical sciences, develop new
                skills, and advance their careers while contributing to the education of the next generation.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {programs.map((program) => (
                <div key={program.name} className="rounded-lg border border-border bg-card p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                      <program.icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground">{program.name}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{program.description}</p>
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
