import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { DonationForm } from "@/components/donate/donation-form"
import { Heart, GraduationCap, Users, Stethoscope } from "lucide-react"

export default function DonatePage() {
  const impactAreas = [
    {
      name: "Scholarship Fund",
      description: "Support students pursuing pharmaceutical education and help build the next generation of leaders.",
      icon: GraduationCap,
      color: "primary",
    },
    {
      name: "Community Health Programs",
      description: "Fund health education initiatives, medication access programs, and community pharmacy development.",
      icon: Users,
      color: "accent",
    },
    {
      name: "Professional Development",
      description: "Enable continuing education, conference attendance, and training opportunities for members.",
      icon: Stethoscope,
      color: "secondary",
    },
    {
      name: "Research Initiatives",
      description: "Support collaborative research projects and pharmaceutical science advancement in Ethiopia.",
      icon: Heart,
      color: "gold",
    },
  ]

  const donationLevels = [
    {
      amount: "$50",
      impact: "Provides educational materials for one pharmacy student",
    },
    {
      amount: "$100",
      impact: "Supports one member's conference registration",
    },
    {
      amount: "$250",
      impact: "Funds a community health education workshop",
    },
    {
      amount: "$500",
      impact: "Contributes to a student scholarship",
    },
    {
      amount: "$1,000",
      impact: "Sponsors a research collaboration project",
    },
    {
      amount: "$2,500+",
      impact: "Becomes a founding donor with lasting legacy",
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
                Support Our Mission
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Your donation helps us empower Ethiopian pharmaceutical professionals and improve healthcare outcomes
                worldwide
              </p>
            </div>
          </div>
        </section>

        {/* Impact Areas */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Where Your Donation Goes
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Every contribution makes a meaningful difference in these key areas
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {impactAreas.map((area) => (
                <div
                  key={area.name}
                  className="rounded-lg border border-border bg-card p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                    <area.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{area.name}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Donation Levels */}
        <section className="bg-muted/30 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Your Impact
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                See how your contribution creates lasting change
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {donationLevels.map((level) => (
                <div key={level.amount} className="rounded-lg border border-border bg-card p-6">
                  <p className="font-display text-2xl font-bold text-accent mb-2">{level.amount}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{level.impact}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tax Information */}
        <section className="py-12 bg-primary/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm text-muted-foreground">
                EPPAD is a registered 501(c)(3) non-profit organization. Your donation is tax-deductible to the extent
                allowed by law. Tax ID: XX-XXXXXXX
              </p>
            </div>
          </div>
        </section>

        {/* Donation Form */}
        <section className="py-24">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Make a Donation
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Choose your donation amount and help us continue our important work
              </p>
            </div>
            <DonationForm />
          </div>
        </section>

        {/* Other Ways to Give */}
        <section className="bg-muted/30 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Other Ways to Give
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="rounded-lg border border-border bg-card p-8 text-center">
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">Corporate Matching</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Many employers match charitable donations. Check if your company participates to double your impact.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-8 text-center">
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">Planned Giving</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Include EPPAD in your estate planning to create a lasting legacy for pharmaceutical education.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-8 text-center">
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">In-Kind Donations</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Donate equipment, books, or professional services to support our programs and initiatives.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
