import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { MembershipForm } from "@/components/membership/membership-form"
import { Check, GraduationCap, Users, BookOpen, Heart, Globe, Lightbulb } from "lucide-react"

export default function MembershipPage() {
  const benefits = [
    "Access to exclusive networking events and conferences",
    "Continuing education opportunities and professional development",
    "Mentorship programs connecting experienced professionals with students",
    "Collaboration on research projects and publications",
    "Leadership opportunities in working groups",
    "Discounted registration for EPPAD events",
    "Access to job postings and career resources",
    "Connection with Ethiopian pharmaceutical professionals worldwide",
    "Opportunities to contribute to healthcare initiatives in Ethiopia",
    "Regular newsletters with industry updates and member highlights",
  ]

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

  const membershipTiers = [
    {
      name: "Student Member",
      price: "$10/year",
      description: "For pharmacy students and residents",
      features: [
        "Full access to educational events",
        "Mentorship program participation",
        "Student networking opportunities",
        "Discounted conference registration",
      ],
    },
    {
      name: "Professional Member",
      price: "$60/year",
      description: "For practicing pharmacists and pharmaceutical scientists",
      features: [
        "All student member benefits",
        "Working group participation",
        "Leadership opportunities",
        "Professional networking events",
        "Research collaboration opportunities",
      ],
    },
    {
      name: "Lifetime Member",
      price: "$500 one-time",
      description: "Permanent membership with all benefits",
      features: [
        "All professional member benefits",
        "Lifetime access to all events",
        "Priority registration for conferences",
        "Recognition at annual events",
        "Legacy member designation",
      ],
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
                Join EPPAD Today
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Become part of a thriving community of Ethiopian pharmaceutical professionals making a global impact
              </p>
            </div>
          </div>
        </section>

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

        {/* Benefits Section */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Membership Benefits
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Join hundreds of professionals advancing pharmaceutical sciences together
              </p>
            </div>
            <div className="mx-auto max-w-3xl">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 mt-0.5">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Membership Tiers */}
        <section className="bg-muted/30 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Membership Options
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Choose the membership level that fits your career stage
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {membershipTiers.map((tier) => (
                <div
                  key={tier.name}
                  className="rounded-lg border border-border bg-card p-8 hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-display text-2xl font-bold text-foreground">{tier.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{tier.description}</p>
                  <p className="mt-4 font-display text-3xl font-bold text-primary">{tier.price}</p>
                  <ul className="mt-6 space-y-3">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Membership Form */}
        <section className="py-24">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Membership Application
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Complete the form below to begin your EPPAD membership
              </p>
            </div>
            <MembershipForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
