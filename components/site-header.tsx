"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Image from "next/image"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const aboutLinks = [
    { name: "About Us", href: "/about", description: "Learn about EPPAD's mission and history" },
    { name: "Leadership", href: "/about#leadership", description: "Meet our leadership team" },
  ]

  const whatWeDoLinks = [
    {
      name: "Traditional Medicine Working Group",
      href: "/what-we-do/traditional-medicine",
      description: "Ethiopian herbal pharmacopoeia project",
    },
    {
      name: "Education & Training Working Group",
      href: "/what-we-do/education-training",
      description: "Professional development programs",
    },
    {
      name: "Industry & Regulatory Working Group",
      href: "/what-we-do/industry-regulatory",
      description: "Industry standards and compliance",
    },
    {
      name: "Philanthropy Working Group",
      href: "/what-we-do/community-outreach",
      description: "Supporting critical pharmaceutical sector needs",
    },
    {
      name: "Public Relations",
      href: "/what-we-do/public-relations",
      description: "Publications and communications",
    },
    {
      name: "Investment Working Group",
      href: "/what-we-do/investment",
      description: "Pharmaceutical investment opportunities",
    },
  ]

  const getInvolvedLinks = [
    { name: "Membership", href: "/membership", description: "Join our community" },
    { name: "Donate", href: "/donate", description: "Support our mission" },
  ]

  const resourcesLinks = [
    { name: "Publications", href: "/publications", description: "Books and research" },
    { name: "Scholarship", href: "/scholarship", description: "Educational funding opportunities" },
    { name: "Bulletin", href: "/bulletin", description: "News and updates" },
  ]

  const eventsLinks = [
    { name: "Events Calendar", href: "/events", description: "Upcoming conferences and webinars" },
    { name: "Gallery", href: "/gallery", description: "Photos from past events" },
  ]

  const moreLinks = [{ name: "Contact Us", href: "/contact" }]

  return (
    <header className="sticky top-0 z-50 w-full border-b shadow-sm" style={{ backgroundColor: "#142C14" }}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3">
            <Image src="/images/eppad-logo.png" alt="EPPAD Logo" width={50} height={50} className="h-12 w-12" />
            <span className="font-display text-xl font-bold text-white">EPPAD</span>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="gap-6">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/"
                  className="group inline-flex h-10 w-max items-center justify-center px-2 text-base font-medium text-white/90 transition-colors hover:text-white hover:underline hover:underline-offset-4 focus:text-white focus:outline-none"
                >
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="h-10 bg-transparent px-2 text-base font-medium text-white/90 transition-colors hover:bg-transparent hover:text-white hover:underline hover:underline-offset-4 data-[state=open]:bg-transparent data-[state=open]:text-white">
                About
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4">
                  {aboutLinks.map((link) => (
                    <li key={link.name}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={link.href}
                          className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-amber-50 hover:text-amber-700 focus:bg-amber-50 focus:text-amber-700"
                        >
                          <div className="text-sm font-medium leading-none">{link.name}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{link.description}</p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="h-10 bg-transparent px-2 text-base font-medium text-white/90 transition-colors hover:bg-transparent hover:text-white hover:underline hover:underline-offset-4 data-[state=open]:bg-transparent data-[state=open]:text-white">
                What We Do
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[500px] gap-3 p-4 md:grid-cols-2">
                  {whatWeDoLinks.map((link) => (
                    <li key={link.name}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={link.href}
                          className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-amber-50 hover:text-amber-700 focus:bg-amber-50 focus:text-amber-700"
                        >
                          <div className="text-sm font-medium leading-none">{link.name}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{link.description}</p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="h-10 bg-transparent px-2 text-base font-medium text-white/90 transition-colors hover:bg-transparent hover:text-white hover:underline hover:underline-offset-4 data-[state=open]:bg-transparent data-[state=open]:text-white">
                Get Involved
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4">
                  {getInvolvedLinks.map((link) => (
                    <li key={link.name}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={link.href}
                          className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-amber-50 hover:text-amber-700 focus:bg-amber-50 focus:text-amber-700"
                        >
                          <div className="text-sm font-medium leading-none">{link.name}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{link.description}</p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="h-10 bg-transparent px-2 text-base font-medium text-white/90 transition-colors hover:bg-transparent hover:text-white hover:underline hover:underline-offset-4 data-[state=open]:bg-transparent data-[state=open]:text-white">
                Resources
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4">
                  {resourcesLinks.map((link) => (
                    <li key={link.name}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={link.href}
                          className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-amber-50 hover:text-amber-700 focus:bg-amber-50 focus:text-amber-700"
                        >
                          <div className="text-sm font-medium leading-none">{link.name}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{link.description}</p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="h-10 bg-transparent px-2 text-base font-medium text-white/90 transition-colors hover:bg-transparent hover:text-white hover:underline hover:underline-offset-4 data-[state=open]:bg-transparent data-[state=open]:text-white">
                Events
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4">
                  {eventsLinks.map((link) => (
                    <li key={link.name}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={link.href}
                          className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-amber-50 hover:text-amber-700 focus:bg-amber-50 focus:text-amber-700"
                        >
                          <div className="text-sm font-medium leading-none">{link.name}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{link.description}</p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="h-10 bg-transparent px-2 text-base font-medium text-white/90 transition-colors hover:bg-transparent hover:text-white hover:underline hover:underline-offset-4 data-[state=open]:bg-transparent data-[state=open]:text-white">
                More
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-3 p-4">
                  {moreLinks.map((link) => (
                    <li key={link.name}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={link.href}
                          className="block select-none rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-amber-50 hover:text-amber-700 focus:bg-amber-50 focus:text-amber-700"
                        >
                          <div className="text-sm font-medium leading-none">{link.name}</div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-3">
          <Button
            asChild
            variant="default"
            className="bg-white hover:bg-white/90 text-[#142C14] rounded-full font-semibold"
          >
            <Link href="/membership">Join EPPAD</Link>
          </Button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50 bg-black/20" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
                <Image src="/images/eppad-logo.png" alt="EPPAD Logo" width={40} height={40} className="h-10 w-10" />
                <span className="font-display text-xl font-bold text-primary">EPPAD</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-200">
                <div className="space-y-2 py-6">
                  <Link
                    href="/"
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <div className="space-y-1">
                    <p className="text-xs font-semibold text-muted-foreground px-3">About</p>
                    {aboutLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="block rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                  <div className="space-y-1 pt-4">
                    <p className="text-xs font-semibold text-muted-foreground px-3">What We Do</p>
                    {whatWeDoLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="block rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                  <div className="space-y-1 pt-4">
                    <p className="text-xs font-semibold text-muted-foreground px-3">Get Involved</p>
                    {getInvolvedLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="block rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                  <div className="space-y-1 pt-4">
                    <p className="text-xs font-semibold text-muted-foreground px-3">Resources</p>
                    {resourcesLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="block rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                  <div className="space-y-1 pt-4">
                    <p className="text-xs font-semibold text-muted-foreground px-3">Events</p>
                    {eventsLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="block rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                  <div className="space-y-1 pt-4">
                    <p className="text-xs font-semibold text-muted-foreground px-3">More</p>
                    {moreLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="block rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="py-6">
                  <Button
                    asChild
                    className="w-full bg-white hover:bg-white/90 text-[#142C14] rounded-full font-semibold"
                  >
                    <Link href="/membership" onClick={() => setMobileMenuOpen(false)}>
                      Join EPPAD
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
