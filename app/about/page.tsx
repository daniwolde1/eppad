import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Target, Eye, Heart, Users, Award, Globe } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      name: "Excellence",
      description: "Committed to the highest standards in pharmaceutical practice, research, and education.",
      icon: Award,
    },
    {
      name: "Collaboration",
      description: "Building bridges between professionals, institutions, and communities worldwide.",
      icon: Users,
    },
    {
      name: "Impact",
      description: "Making meaningful contributions to healthcare in Ethiopia and the global community.",
      icon: Heart,
    },
    {
      name: "Innovation",
      description: "Embracing new ideas and technologies to advance pharmaceutical sciences.",
      icon: Globe,
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-display text-4xl font-bold tracking-tight text-balance text-foreground sm:text-5xl">
                About EPPAD
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Connecting Ethiopian pharmaceutical professionals worldwide to advance healthcare, education, and
                community impact
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div className="rounded-lg border border-border bg-card p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-foreground">Our Mission</h2>
                </div>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Our mission is to unite Ethiopian pharmacists and pharmaceutical scientists in diaspora, fostering
                  collaboration, innovation, and professional development that contribute to better health systems in
                  Ethiopia and US.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <Eye className="h-6 w-6 text-accent" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-foreground">Our Vision</h2>
                </div>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Our vision is to build a thriving professional community that leads in advancing pharmacy education,
                  research, and practice, while inspiring the next generation of pharmaceutical scientists across the
                  world.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="bg-muted/30 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-8">
                Who We Are
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                Founded by a dedicated group of professionals, the Ethiopian Pharmacists and Pharmaceutical Scientists
                Association in Diaspora (EPPAD) serves as a hub for knowledge exchange, mentorship, and advocacy. We
                bring together experts from academia, industry, regulatory bodies, and healthcare systems to collaborate
                on research, education, and initiatives that make a tangible impact on patients and communities.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Our Core Values
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div key={value.name} className="rounded-lg border border-border bg-card p-6 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">{value.name}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Progress to Date */}
        <section className="bg-muted/30 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-8">
                EPPAD's Progress to Date
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-6">
                In the last one and a half year of its formation, EPPAD:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 text-xl">•</span>
                  <span className="text-base text-muted-foreground">
                    Formed a committed team of the founding board and committee members (April 2018)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 text-xl">•</span>
                  <span className="text-base text-muted-foreground">
                    Registered EPPAD as a 503C non-profit organization in the USA (July 2018)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 text-xl">•</span>
                  <span className="text-base text-muted-foreground">
                    Launched the inaugural Symposium of EPPAD (February 2019)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 text-xl">•</span>
                  <span className="text-base text-muted-foreground">
                    Conducted professional development and guidance meeting to high school students, foreign pharmacy
                    graduates, new graduates, and carrier changing aspirants (June 2019)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 text-xl">•</span>
                  <span className="text-base text-muted-foreground">
                    Conducted a month-long consultation and philanthropy mission to Ethiopia (August 2019)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 text-xl">•</span>
                  <span className="text-base text-muted-foreground">
                    Conducted a pharmaceutical investment forum (September 2019)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section id="leadership" className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Our Leadership Team
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Dedicated professionals guiding EPPAD's mission and vision
              </p>
            </div>
            <div className="text-center">
              <p className="text-base text-muted-foreground mb-6">
                Our leadership team consists of distinguished professionals from various sectors of pharmaceutical
                sciences.
              </p>
              <a
                href="/#board-members"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
              >
                View Leadership Team
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
