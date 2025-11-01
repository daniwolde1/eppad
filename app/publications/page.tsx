"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { useState } from "react"
import { BookOpen, Calendar, User, Search, ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const publications = [
  {
    id: 1,
    title: "Dr. Tesfaye Biftu: An Exemplar of Expertise in Drug Discovery",
    author: "Dr. Tesfaye Biftu",
    date: "2024",
    type: "Book",
    description:
      "A comprehensive account of a distinguished career in pharmaceutical research, from growing up in a coffee-growing village in Ethiopia to becoming one of the most influential medicinal chemists in the USA. This book chronicles groundbreaking contributions to drug discovery and development.",
    category: "Biography",
    link: "#",
  },
  {
    id: 2,
    title: "The Juggling Act: Harmonizing Career, Faith, Family, and Entrepreneurship",
    author: "Prof. Bisrat Hailemeskel",
    date: "2024",
    type: "Book",
    description:
      "An inspiring guide on balancing multiple aspects of life as a pharmaceutical professional. Prof. Hailemeskel shares insights on managing career advancement, maintaining faith, nurturing family relationships, and pursuing entrepreneurial ventures.",
    category: "Professional Development",
    link: "#",
  },
  {
    id: 3,
    title: "A Treatise on Ethiopian Traditional Medicinal Plants",
    author: "Dr. Fekadu Fullas",
    date: "2024",
    type: "Book",
    description:
      "A comprehensive scientific exploration of Ethiopian traditional medicinal plants, their pharmacological properties, and potential pharmaceutical applications. This work bridges traditional knowledge with modern pharmaceutical science.",
    category: "Research",
    link: "#",
  },
  {
    id: 4,
    title: "Advances in Pharmaceutical Sciences: EPPAD Research Compendium",
    author: "EPPAD Research Committee",
    date: "2024",
    type: "Journal",
    description:
      "A collection of peer-reviewed research articles by EPPAD members covering drug discovery, clinical pharmacy, pharmaceutical education, and public health initiatives.",
    category: "Research",
    link: "#",
  },
  {
    id: 5,
    title: "Best Practices in Clinical Pharmacy: A Guide for Ethiopian Practitioners",
    author: "EPPAD Clinical Practice Working Group",
    date: "2023",
    type: "Guide",
    description:
      "Evidence-based clinical practice guidelines tailored for pharmaceutical care in Ethiopian healthcare settings, covering medication therapy management, patient counseling, and interdisciplinary collaboration.",
    category: "Clinical Practice",
    link: "#",
  },
  {
    id: 6,
    title: "Pharmaceutical Education in Ethiopia: Current State and Future Directions",
    author: "EPPAD Education Committee",
    date: "2023",
    type: "Report",
    description:
      "A comprehensive analysis of pharmaceutical education in Ethiopia, identifying challenges, opportunities, and recommendations for strengthening pharmacy curricula and training programs.",
    category: "Education",
    link: "#",
  },
]

export default function PublicationsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const categories = ["all", "Biography", "Professional Development", "Research", "Clinical Practice", "Education"]

  const filteredPublications = publications.filter((pub) => {
    const matchesSearch =
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || pub.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-display text-4xl font-bold tracking-tight text-balance text-foreground sm:text-5xl">
                Publications & Resources
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Explore books, research articles, and educational resources by EPPAD members
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-12 border-b border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search publications..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "bg-primary" : ""}
                  >
                    {category === "all" ? "All Categories" : category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Publications List */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {filteredPublications.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">No publications found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-8">
                {filteredPublications.map((pub) => (
                  <Card key={pub.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                          {pub.type}
                        </div>
                        <div className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                          {pub.category}
                        </div>
                      </div>
                      <CardTitle className="font-display text-2xl">{pub.title}</CardTitle>
                      <CardDescription className="flex flex-col gap-2 mt-3">
                        <span className="flex items-center gap-2 text-sm">
                          <User className="h-4 w-4" />
                          {pub.author}
                        </span>
                        <span className="flex items-center gap-2 text-sm">
                          <Calendar className="h-4 w-4" />
                          {pub.date}
                        </span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm leading-relaxed text-muted-foreground mb-4">{pub.description}</p>
                      <Button variant="outline" className="gap-2 bg-transparent">
                        <BookOpen className="h-4 w-4" />
                        View Publication
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Submit Publication CTA */}
        <section className="bg-primary/5 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Share Your Work
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                EPPAD members are encouraged to submit their publications for inclusion in our resource library
              </p>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                  <a href="/contact">Submit a Publication</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
