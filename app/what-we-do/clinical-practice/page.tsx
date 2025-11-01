import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Stethoscope, Pill, ClipboardCheck, Users } from "lucide-react"

export default function ClinicalPracticePage() {
  const services = [
    {
      name: "Medication Therapy Management",
      description: "Advancing comprehensive medication reviews, therapy optimization, and patient counseling services.",
      icon: Pill,
    },
    {
      name: "Clinical Guidelines",
      description: "Developing and disseminating evidence-based clinical practice guidelines for pharmaceutical care.",
      icon: ClipboardCheck,
    },
    {
      name: "Interdisciplinary Care",
      description: "Promoting pharmacist integration in healthcare teams and collaborative practice models.",
      icon: Users,
    },
    {
      name: "Patient Safety",
      description:
        "Implementing medication safety initiatives, error prevention strategies, and quality improvement programs.",
      icon: Stethoscope,
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
                <Stethoscope className="h-8 w-8 text-primary" />
              </div>
              <h1 className="font-display text-4xl font-bold tracking-tight text-balance text-foreground sm:text-5xl">
                Investment Working Group
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Enhancing patient outcomes through evidence-based pharmaceutical care
              </p>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl mb-16">
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">Our Practice</h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-4">
                The Clinical Practice & Patient Care working group brings together pharmacists practicing in hospitals,
                clinics, ambulatory care, and other patient care settings. We focus on advancing clinical pharmacy
                practice, improving medication use, and enhancing patient outcomes through evidence-based care.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Our members are committed to expanding the role of pharmacists in direct patient care, promoting
                medication safety, and contributing to improved health outcomes for the patients and communities we
                serve.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {services.map((service) => (
                <div key={service.name} className="rounded-lg border border-border bg-card p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground">{service.name}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
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
