import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Building2, FileCheck, Scale, TrendingUp } from "lucide-react"

export default function IndustryRegulatoryPage() {
  const focus = [
    {
      name: "Regulatory Affairs",
      description:
        "Guidance on navigating FDA, EMA, and other regulatory requirements for pharmaceutical products and clinical trials.",
      icon: FileCheck,
    },
    {
      name: "Quality Assurance",
      description: "Best practices in pharmaceutical quality control, GMP compliance, and quality management systems.",
      icon: Scale,
    },
    {
      name: "Industry Trends",
      description:
        "Insights into pharmaceutical industry developments, market trends, and career opportunities in industrial pharmacy.",
      icon: TrendingUp,
    },
    {
      name: "Manufacturing Excellence",
      description: "Supporting pharmaceutical manufacturing initiatives and technology transfer projects in Ethiopia.",
      icon: Building2,
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative bg-gradient-to-br from-secondary/10 via-background to-primary/5 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                <Building2 className="h-8 w-8 text-secondary" />
              </div>
              <h1 className="font-display text-4xl font-bold tracking-tight text-balance text-foreground sm:text-5xl">
                Regulatory & Policy Working Group
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Navigating the pharmaceutical industry landscape with expertise and excellence
              </p>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl mb-16">
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">Our Expertise</h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-4">
                The Industry & Regulatory Affairs working group serves members working in pharmaceutical manufacturing,
                quality assurance, regulatory affairs, and related industrial pharmacy fields. We provide guidance on
                regulatory compliance, industry best practices, and career development in the pharmaceutical industry.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Our members bring extensive experience from leading pharmaceutical companies and regulatory agencies,
                offering valuable insights and mentorship to those pursuing industrial pharmacy careers.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {focus.map((item) => (
                <div key={item.name} className="rounded-lg border border-border bg-card p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                      <item.icon className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground">{item.name}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
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
