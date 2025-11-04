"use client"

import Link from "next/link"

const sponsors = [
  {
    name: "EPPAD Pharma",
    logo: "/eppadpharma.png",
    url: "https://eppadpharma.com/",
  },
  {
    name: "GSK",
    logo: "/gsk.jpg",
    url: "https://www.gsk.com/en-gb/",
  },
  {
    name: "CVS Health",
    logo: "/cvs.png",
    url: "https://www.cvshealth.com/",
  },
  {
    name: "Lion Healthcare",
    logo: "/lion.png",
    url: "https://lionhealthcare.ca/",
  },
  {
    name: "Howard University College of Pharmacy",
    logo: "/haword.png",
    url: "https://pharmacy.howard.edu/",
  },
  {
    name: "PerformRx",
    logo: "/PERFORMX.png",
    url: "https://www.performrx.com/",
  },
  {
    name: "RxParadigm",
    logo: "/rx.png",
    url: "http://www.rxparadigm.com/",
  },
]

export function SponsorsSection() {
  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            In Partnership With
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
            We proudly partner with organizations dedicated to advancing pharmacy education, research, and innovation.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll hover:[animation-play-state:paused]">
            {/* First set of logos */}
            {sponsors.map((sponsor, index) => (
              <Link
                key={`${sponsor.name}-1-${index}`}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center p-8 min-w-[200px] transition-transform hover:scale-110"
              >
                <img
                  src={sponsor.logo || "/placeholder.svg"}
                  alt={sponsor.name}
                  className="h-20 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </Link>
            ))}
            {/* Duplicate set for seamless loop */}
            {sponsors.map((sponsor, index) => (
              <Link
                key={`${sponsor.name}-2-${index}`}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center p-8 min-w-[200px] transition-transform hover:scale-110"
              >
                <img
                  src={sponsor.logo || "/placeholder.svg"}
                  alt={sponsor.name}
                  className="h-20 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </Link>
            ))}
            {/* Third set for extra smooth scrolling */}
            {sponsors.map((sponsor, index) => (
              <Link
                key={`${sponsor.name}-3-${index}`}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center p-8 min-w-[200px] transition-transform hover:scale-110"
              >
                <img
                  src={sponsor.logo || "/placeholder.svg"}
                  alt={sponsor.name}
                  className="h-20 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  )
}
