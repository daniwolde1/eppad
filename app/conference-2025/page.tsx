import Link from "next/link"
import { Calendar, MapPin, Clock, Tag, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SiteHeader } from "@/components/site-header"

export default function Conference2025Page() {
  return (
    <>
      <SiteHeader />
      <div className="min-h-screen bg-background">
        {/* Hero Image Section */}
        <div className="relative h-[400px] w-full overflow-hidden">
          <img
            src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1065946413%2F289364967451%2F1%2Foriginal.png?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C940%2C470&s=dcf8e9c5ae715ffbc75cc2199ca75372"
            alt="EPPAD Annual Conference 2025"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>

        {/* Main Content */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 -mt-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Event Details */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-lg border border-border p-8 shadow-xl">
                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge className="bg-accent text-accent-foreground">Just Added</Badge>
                  <Badge className="bg-gold text-white">Early Bird</Badge>
                </div>

                {/* Event Title */}
                <h1 className="font-display text-4xl font-bold text-foreground mb-4">EPPAD Annual Conference</h1>

                {/* Date */}
                <div className="flex items-center gap-2 text-lg text-muted-foreground mb-8">
                  <Calendar className="h-5 w-5" />
                  <time dateTime="2025-11-08">Saturday, November 8, 2025</time>
                </div>

                {/* Description */}
                <div className="prose prose-lg max-w-none mb-8">
                  <p className="text-foreground leading-relaxed">
                    Get ready for the EPPAD Annual Conference - a day filled with engaging presentations, networking
                    opportunities, and insightful discussions! Join Ethiopian pharmacists and pharmaceutical scientists
                    from across the diaspora for our 6th annual gathering.
                  </p>
                </div>

                {/* Event Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Date and Time</h3>
                      <p className="text-sm text-muted-foreground">Sat, Nov 8, 2025</p>
                      <p className="text-sm text-muted-foreground">9:00 AM - 3:00 PM EST</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Location</h3>
                      <p className="text-sm text-muted-foreground">Civic building</p>
                      <p className="text-sm text-muted-foreground">1 Veterans Pl</p>
                      <p className="text-sm text-muted-foreground">Silver Spring, MD 20903</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Tag className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Special Offer</h3>
                      <p className="text-sm text-muted-foreground">10% Early Bird Discount</p>
                      <p className="text-sm text-muted-foreground">Limited time only</p>
                    </div>
                  </div>
                </div>


export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-semibold mb-4">Download Our Booklet</h1>

      <a
        href="https://www.eppad.org/booklet3.pdf"
        download
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button className="px-6 py-3 text-lg">
          Download Booklet
        </Button>
      </a>
    </div>
  )
}

                
                {/* Lineup Section */}
                <div className="border-t border-border pt-8 mb-8">
                  <div className="flex items-center gap-2 mb-6">
                    <BookOpen className="h-6 w-6 text-primary" />
                    <h2 className="font-display text-2xl font-bold text-foreground">Book Signing Ceremony Lineup</h2>
                  </div>
                  <div className="space-y-6">
                    {/* Speaker 1 */}
                    <div className="flex gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className="flex-shrink-0">
                        <div className="h-20 w-20 rounded-lg bg-navy flex items-center justify-center text-white font-bold text-2xl">
                          TB
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-foreground mb-1">Dr. Tesfaye Biftu, PhD, MBA</h3>
                        <p className="text-sm text-primary font-medium mb-2">
                          "An Exemplar of Expertise in Drug Discovery"
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Raised in Agaro, a Coffee Growing Village in Ethiopia, to the most Influential Medicinal
                          Chemist in the USA. A pioneering researcher with 65+ patents and key contributions to
                          breakthrough medications.
                        </p>
                      </div>
                    </div>

                    {/* Speaker 2 */}
                    <div className="flex gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className="flex-shrink-0">
                        <div className="h-20 w-20 rounded-lg bg-gold flex items-center justify-center text-white font-bold text-2xl">
                          BH
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-foreground mb-1">
                          Professor Bisrat Hailemeskel, B.Pharm., MSc, Pharm.D, RPh, ABAAHP
                        </h3>
                        <p className="text-sm text-primary font-medium mb-2">
                          "The Juggling Act: Harmonizing Career, Faith, Family, and Entrepreneurship"
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Full Professor at Howard University, Fulbright Scholar, and accomplished researcher with over
                          50 publications. A guide to balancing professional excellence with personal fulfillment.
                        </p>
                      </div>
                    </div>

                    {/* Speaker 3 */}
                    <div className="flex gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className="flex-shrink-0">
                        <div className="h-20 w-20 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-2xl">
                          FF
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-foreground mb-1">Fekadu Fullas, RPh, PhD</h3>
                        <p className="text-sm text-primary font-medium mb-2">
                          "A Treatise on Ethiopian Traditional Medicinal Plants"
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          PhD in Natural Products Chemistry with 175+ publications and author of 8 books. A
                          comprehensive exploration of Ethiopia's rich heritage of traditional medicine and healing
                          plants.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* About the Organizer */}
                <div className="border-t border-border pt-8">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">About the Organizer</h2>
                  <div className="flex items-start gap-4">
                    <img
                      src="/images/eppad-logo.png"
                      alt="EPPAD Logo"
                      className="h-16 w-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        Ethiopian Pharmacists and Pharmaceutical Scientists Association in Diaspora
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        EPPAD is a non-profit organization dedicated to promoting public health through pharmacy care in
                        the United States and Ethiopia. We bring together Ethiopian pharmacists and pharmaceutical
                        scientists to advance the profession and serve our communities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Ticket Information */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-lg border border-border p-6 shadow-xl sticky top-24">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">Registration</h2>

                {/* Ticket Details */}
                <div className="space-y-4 mb-6">
                  <div className="pb-4 border-b border-border">
                    <h3 className="font-semibold text-foreground mb-4">Order summary</h3>
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <p className="text-sm text-foreground">1 x Early bird registration</p>
                      </div>
                      <p className="text-sm font-medium text-foreground">$40.00</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="text-foreground">$40.00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Fees</span>
                      <span className="text-foreground">$4.52</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg pt-3 border-t border-border">
                      <span className="text-foreground">Total</span>
                      <span className="text-foreground">$44.52</span>
                    </div>
                  </div>
                </div>

                {/* Sales Period */}
                <div className="bg-muted/50 rounded-lg p-4 mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <h4 className="font-semibold text-sm text-foreground">Sales Period</h4>
                  </div>
                  <p className="text-xs text-muted-foreground">Oct 15, 2025 9:03 AM - Nov 8, 2025 3:30 PM EST</p>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <Button asChild className="w-full bg-accent hover:bg-accent/90 text-white" size="lg">
                    <a
                      href="https://www.eventbrite.com/e/eppad-annual-conference-tickets-1461198647489"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Register Now
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full bg-transparent" size="lg">
                    <Link href="/contact">Contact Organizer</Link>
                  </Button>
                </div>

                {/* Additional Info */}
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-xs text-muted-foreground text-center">Maximum 1 ticket per order</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-12 mb-16">
            <div className="bg-card rounded-lg border border-border p-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">Location</h2>
              <div className="aspect-video w-full rounded-lg overflow-hidden bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3099.8974182!2d-77.02450809999999!3d38.9974182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c97b8f8f8f8f%3A0x8f8f8f8f8f8f8f8f!2s1%20Veterans%20Pl%2C%20Silver%20Spring%2C%20MD%2020903!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Conference Location Map"
                />
              </div>
              <div className="mt-4">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Civic building</strong>
                  <br />1 Veterans Pl, Silver Spring, MD 20903
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
