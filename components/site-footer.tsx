import Link from "next/link"
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin, Youtube, Instagram } from "lucide-react"
import Image from "next/image"

export function SiteFooter() {
  const footerLinks = {
    about: [
      { name: "Our Mission", href: "/about#mission" },
      { name: "Leadership", href: "/about#leadership" },
      { name: "History", href: "/about#history" },
    ],
    programs: [
      { name: "Working Groups", href: "/what-we-do" },
      { name: "Events", href: "/events" },
      { name: "Publications", href: "/publications" },
      { name: "Scholarship", href: "/scholarship" },
      { name: "Bulletin", href: "/bulletin" },
      { name: "Gallery", href: "/gallery" },
    ],
    getInvolved: [
      { name: "Membership", href: "/membership" },
      { name: "Donate", href: "/donate" },
      { name: "Volunteer", href: "/contact" },
      { name: "Contact Us", href: "/contact" },
    ],
  }

  return (
    <footer className="border-t border-border" style={{ backgroundColor: "#142C14" }}>
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/images/eppad-logo.png" alt="EPPAD Logo" width={60} height={60} className="h-15 w-15" />
              <span className="font-display text-2xl font-bold text-white">EPPAD</span>
            </Link>
            <p className="mt-4 text-sm text-white/80 leading-relaxed">
              Ethiopian Pharmacists and Pharmaceutical Scientists Association in Diaspora
            </p>
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-sm text-white/80">
                <Phone className="h-4 w-4" />
                <a href="tel:3016753384" className="hover:text-white transition-colors">
                 ----
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/80">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@eppad.org" className="hover:text-white transition-colors">
                  info@eppad.org
                </a>
              </div>
              <div className="flex items-start gap-2 text-sm text-white/80">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>8530 Gwynedd Way, Springfield, VA, 22153</span>
              </div>
            </div>
            <div className="mt-6 flex gap-4">
              <a
                href="https://www.facebook.com/EPPAD2018/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/eppad1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/eppad-2a1532166"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <span className="sr-only">YouTube</span>
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/eppad_2018"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-display text-sm font-semibold text-white">About</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-white/80 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-white">Programs</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-white/80 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-white">Get Involved</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.getInvolved.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-white/80 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-8">
          <p className="text-center text-sm text-white/80">
            &copy; {new Date().getFullYear()} EPPAD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
