"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

const carouselImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/conf1-WLQ9bQF7c0lF63AiiIkrqV3NjjHd3Q.jpeg",
    alt: "EPPAD Annual Conference - Large group photo with sponsors",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/conf-Bo4A2biMlt5KHXaYPK7G3SYCEWTVs3.jpeg",
    alt: "EPPAD Conference attendees and board members",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/conf2-O4ZjQ9JEXr7Aj4nqhVTRqG0i4jVGao.jpeg",
    alt: "EPPAD leadership team at annual conference",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="text-center mb-12">
          <div className="h-1 w-16 bg-gold mb-6 mx-auto" />
          <h1 className="font-display text-2xl font-bold tracking-tight text-balance text-foreground sm:text-2xl lg:text-3xl max-w-4xl mx-auto leading-tight">
            Ethiopian Pharmacists and Pharmaceutical Professionals in the Diaspora (EPPAD)
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty max-w-3xl mx-auto">
            Connecting Ethiopian pharmacists and pharmaceutical scientists across the diaspora, fostering collaboration,
            advancing healthcare education, and making a lasting impact in Ethiopia and beyond.
          </p>
        </div>

        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img src={image.src || "/placeholder.svg"} alt={image.alt} className="h-full w-full object-contain" />
            </div>
          ))}

          {/* Carousel indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide ? "w-8 bg-primary" : "w-2 bg-primary/50 hover:bg-primary/75"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA buttons */}
        <div className="mt-12 flex items-center justify-center gap-4 flex-wrap">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full">
            <Link href="/membership">
              Become a Member
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full bg-transparent">
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
