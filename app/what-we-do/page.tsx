import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import { ArrowRight, Microscope, GraduationCap, Building2, Heart, Newspaper, TrendingUp } from "lucide-react"

const workingGroups = [
  {
    name: "Traditional Medicine Working Group",
    description:
      "Exploring and integrating traditional Ethiopian medicine with modern scientific practices through the Ethiopian Herbal Pharmacopoeia project.",
    icon: Microscope,
    href: "/what-we-do/traditional-medicine",
    color: "primary",
  },
  {
    name: "Educational Working Group",
    description:
      "Providing continuing education, professional development workshops, and training programs to enhance pharmaceutical knowledge and skills across the diaspora.",
    icon: GraduationCap,
    href: "/what-we-do/education-training",
    color: "accent",
  },
  {
    name: "Regulatory & Policy Working Group",
    description:
      "Navigating pharmaceutical industry trends, regulatory compliance, quality assurance, and supporting members in industrial pharmacy careers.",
    icon: Building2,
    href: "/what-we-do/industry-regulatory",
    color: "secondary",
  },
  {
    name: "Philanthropy Working Group",
    description:
      "Contributing to a pharmacy fund that directly supports critical needs in the pharmaceutical sector, including scholarships, student support, and community health initiatives.",
    icon: Heart,
    href: "/what-we-do/community-outreach",
    color: "gold",
  },
  {
    name: "Public Relations",
    description:
      "Sharing knowledge and research through publications, communications, and outreach to advance pharmaceutical sciences and public awareness.",
    icon: Newspaper,
    href: "/publications",
    color: "primary",
  },
  {
    name: "Investment Working Group",
    description:
      "Exploring pharmaceutical investment opportunities, economic development, and fostering diaspora investment in Ethiopian pharmaceutical sector.",
    icon: TrendingUp,
    href: "/what-we-do/investment",
    color: "accent",
  },
]

export default function WhatWeDoPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-display text-4xl font-bold tracking-tight text-balance text-foreground sm:text-5xl">
                What We Do
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Our working groups drive innovation and excellence across all areas of pharmaceutical sciences
              </p>
            </div>
          </div>
        </section>

        {/* Working Groups */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="space-y-12">
              {workingGroups.map((group, index) => (
                <Link
                  key={group.name}
                  href={group.href}
                  className="group block rounded-lg border border-border bg-card p-8 hover:shadow-xl transition-all hover:border-primary/50"
                >
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <group.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h2 className="font-display text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {group.name}
                      </h2>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">{group.description}</p>
                      <div className="mt-4 flex items-center text-sm font-medium text-accent group-hover:text-accent/80">
                        Learn more about this working group
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary/5 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Get Involved
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Join a working group and contribute your expertise to advancing pharmaceutical sciences
              </p>
              <div className="mt-8">
                <Link
                  href="/membership"
                  className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-base font-medium text-accent-foreground hover:bg-accent/90 transition-colors"
                >
                  Become a Member
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
