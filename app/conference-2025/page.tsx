"use client"

import Link from "next/link"
import { Calendar, MapPin, Clock, Tag, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SiteHeader } from "@/components/site-header"

export default function Conference2025Page() {
  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = "https://www.eppad.org/booklet3.pdf"
    link.download = "EPPAD-Booklet.pdf"
    link.click()
  }

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
                <h1 className="font-display text-4xl font-bold text-foreground mb-4">
                  EPPAD Annual Conference
                </h1>

                {/* Date */}
                <div className="flex items-center gap-2 text-lg text-muted-foreground mb-8">
                  <Calendar className="h-5 w-5" />
                  <time dateTime="2025-11-08">Saturday, November 8, 2025</time>
                </div>

                {/* Description */}
                <div className="prose prose-lg max-w-none mb-8">
                  <p className="text-foreground leading-relaxed">
                    Get ready for the EPPAD Annual Conference — a day filled with engaging presentations,
                    networking opportunities, and insightful discussions! Join Ethiopian pharmacists and
                    pharmaceutical scientists from across the diaspora for our 6th annual gathering.
                  </p>
                </div>

                {/* ✅ Download Button */}
                <div className="mb-10 text-center">
                  <Button onClick={handleDownload} className="px-6 py-3 text-lg bg-primary text-white hover:bg-primary/90">
                    Download Booklet
                  </Button>
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

                {/* Lineup Section */}
                {/* ... (keep the rest of your original code unchanged) ... */}
              </div>
            </div>

            {/* Right Column - Ticket Info */}
            {/* ... keep your existing ticket info code here ... */}
          </div>
        </div>
      </div>
    </>
  )
}
