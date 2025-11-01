import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { GraduationCap, Calendar, CheckCircle, Mail, Award } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function ScholarshipPage() {
  const eligibilityCriteria = [
    "Ethiopian descent pharmacy or pharmaceutical science students attending school of pharmacy in the US at the time of application submission",
    "Students in good academic standing (Cumulative grade point average of at least 2.5 on 4.0 scale)",
    "Completion of at least one academic year cycle is required",
    "While being an EPPAD member is advantageous, it is not mandatory",
    "Applicants should demonstrate a willingness to support EPPAD activities",
  ]

  const applicationRequirements = [
    "An academic transcript (an unofficial transcript is acceptable)",
    "Letters of recommendations (two) - one must be from faculty members",
    "Updated resume",
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h1 className="font-display text-4xl font-bold tracking-tight text-balance text-foreground sm:text-5xl">
                Dr. Tesfaye Biftu Scholarship
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Honoring excellence in pharmaceutical research and supporting the next generation of pharmaceutical
                professionals
              </p>
            </div>
          </div>
        </section>

        {/* About the Scholarship */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">About the Scholarship</h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-4">
                The Ethiopian Pharmacists and Pharmaceutical Scientists Association in Diaspora (EPPAD) proudly presents
                the Dr. Tesfaye Biftu Scholarship, established to honor Dr. Tesfaye Biftu's exceptional contributions to
                pharmaceutical research and development. EPPAD, a registered 501(c) non-profit professional association
                based in the State of Virginia, USA, is dedicated to uniting pharmaceutical and allied professionals
                worldwide to advance pharmacy education, practice, service, and scholarship.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground mb-4">
                Our mission extends to fostering collaboration between pharmacy professionals abroad and those in
                Ethiopia, promoting knowledge exchange, resource mobilization, advocacy for policy reforms, and the
                advancement of quality and safe medicines.
              </p>
            </div>
          </div>
        </section>

        {/* About Dr. Biftu */}
        <section className="bg-muted/30 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h2 className="font-display text-3xl font-bold text-foreground">About Dr. Tesfaye Biftu</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-1">
                  <div className="relative aspect-[3/4] w-full max-w-xs mx-auto rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="https://eppad.org/images/Tesfaye.jpg"
                      alt="Dr. Tesfaye Biftu"
                      fill
                      className="object-cover object-[center_20%]"
                      priority
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <p className="text-base leading-relaxed text-muted-foreground mb-4">
                    Dr. Tesfaye Biftu, a distinguished recipient of the 2021 EPPAD Research and Development Excellence
                    Award and esteemed member of the EPPAD advisory board, serves as the inspiration behind this
                    scholarship program. With a background encompassing a PhD in Chemistry from Brandeis University and
                    an MBA in Management from Rutgers University, Dr. Biftu's illustrious career spans pivotal roles at
                    esteemed institutions such as Merck and Co. and CytoMed Inc.
                  </p>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    His contributions to drug discovery in human and animal health, with over 80 publications and more
                    than 95 US and international patents to his name, have significantly impacted areas including
                    inflammation, cardiovascular diseases, anti-cancer agents, and infectious diseases.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scholarship Award */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">Scholarship Award</h2>
              <div className="rounded-lg border border-border bg-card p-8">
                <p className="text-base leading-relaxed text-muted-foreground mb-6">
                  The Dr. Tesfaye Biftu Scholarship embodies EPPAD's commitment to nurturing the future of the
                  pharmaceutical profession by fostering excellence in pharmacy practice and providing assistance to
                  aspiring student pharmaceutical professionals to enhance their leadership skills.
                </p>
                <div className="inline-flex items-center justify-center rounded-lg bg-primary/10 px-8 py-4">
                  <p className="font-display text-3xl font-bold text-primary">$1,000</p>
                  <span className="ml-3 text-lg text-muted-foreground">per student</span>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  This scholarship program will provide financial support to two deserving student
                  pharmacists/pharmaceutical science students
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility and Requirements */}
        <section className="bg-muted/30 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              {/* Eligibility */}
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">Eligibility Criteria</h2>
                <div className="space-y-4">
                  {eligibilityCriteria.map((criterion, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                      <p className="text-sm leading-relaxed text-muted-foreground">{criterion}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">Application Requirements</h2>
                <div className="space-y-4">
                  {applicationRequirements.map((requirement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                      <p className="text-sm leading-relaxed text-muted-foreground">{requirement}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">Application Deadline</h2>
              <div className="rounded-lg border border-border bg-card p-8 text-center mb-12">
                <Calendar className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-display text-2xl font-semibold text-foreground mb-2">May 1, 2024</h3>
                <p className="text-base text-muted-foreground">11:59 PM EST</p>
              </div>

              <div className="rounded-lg border border-primary/20 bg-primary/5 p-8">
                <div className="flex items-start gap-4 mb-6">
                  <Mail className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">How to Apply</h3>
                    <p className="text-base leading-relaxed text-muted-foreground mb-4">
                      Please submit your complete application package including all required documents to:
                    </p>
                    <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                      <Link href="mailto:info@eppad.org">
                        <Mail className="mr-2 h-4 w-4" />
                        info@eppad.org
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="text-lg font-medium text-foreground mb-4">
                  Join us in supporting the next generation of pharmaceutical professionals.
                </p>
                <p className="text-base text-muted-foreground">Apply now for the Dr. Tesfaye Biftu Scholarship.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
