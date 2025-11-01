import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Download, FileText } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const bulletins = [
  {
    id: 1,
    title: "EPPAD Bulletin Vol. 5, No. 1",
    date: "March 2025",
    volume: "Vol. 5, No. 1",
    pdfUrl: "http://eppad1.eppad.org/wp-content/uploads/2025/08/march2025.pdf",
    coverImage: "/bulletin-covers/vol5-no1-march-2025.png",
  },
  {
    id: 2,
    title: "EPPAD Bulletin Vol. 4, No. 2",
    date: "September 2024",
    volume: "Vol. 4, No. 2",
    pdfUrl: "http://eppad1.eppad.org/wp-content/uploads/2025/08/september2024.pdf",
    coverImage: "/bulletin-covers/vol4-no2-september-2024.png",
  },
  {
    id: 3,
    title: "EPPAD Bulletin Vol. 4, No. 1",
    date: "March 2024",
    volume: "Vol. 4, No. 1",
    pdfUrl: "http://eppad1.eppad.org/wp-content/uploads/2025/08/march2024.pdf",
    coverImage: "/bulletin-covers/vol4-no1-march-2024.png",
  },
  {
    id: 4,
    title: "EPPAD Bulletin Vol. 3, No. 2",
    date: "September 2023",
    volume: "Vol. 3, No. 2",
    pdfUrl: "http://eppad1.eppad.org/wp-content/uploads/2025/08/September2023.pdf",
    coverImage: "/bulletin-covers/vol3-no2-september-2023.png",
  },
  {
    id: 5,
    title: "EPPAD Bulletin Vol. 3, No. 1",
    date: "March 2023",
    volume: "Vol. 3, No. 1",
    pdfUrl: "http://eppad1.eppad.org/wp-content/uploads/2025/08/march2023.pdf",
    coverImage: "/bulletin-covers/vol3-no1-march-2023.png",
  },
  {
    id: 6,
    title: "EPPAD Bulletin Vol. 2, No. 2",
    date: "September 2022",
    volume: "Vol. 2, No. 2",
    pdfUrl: "http://eppad1.eppad.org/wp-content/uploads/2025/08/september2022.pdf",
    coverImage: "/bulletin-covers/vol2-no2-september-2022.png",
  },
  {
    id: 7,
    title: "EPPAD Bulletin Vol. 2, No. 1",
    date: "March 2022",
    volume: "Vol. 2, No. 1",
    pdfUrl: "http://eppad1.eppad.org/wp-content/uploads/2025/08/march2022.pdf",
    coverImage: "/bulletin-covers/vol2-no1-march-2022.png",
  },
  {
    id: 8,
    title: "EPPAD 1st Bulletin",
    date: "September 2021",
    volume: "Vol. 1",
    pdfUrl: "http://eppad1.eppad.org/wp-content/uploads/2025/08/september2021.pdf",
    coverImage: "/bulletin-covers/vol1-no1-september-2021.png",
  },
]

export default function BulletinPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-display text-4xl font-bold tracking-tight text-balance text-foreground sm:text-5xl">
                EPPAD Bulletin
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Stay informed with our quarterly newsletters featuring member updates, research highlights, and
                community news
              </p>
            </div>
          </div>
        </section>

        {/* Bulletins List */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12">
              {bulletins.map((bulletin) => (
                <Card
                  key={bulletin.id}
                  id={`vol-${bulletin.volume
                    .toLowerCase()
                    .replace(/[^0-9]/g, "-")
                    .replace(/--+/g, "-")
                    .replace(/-$/, "")}`}
                  className="hover:shadow-lg transition-shadow overflow-hidden scroll-mt-24"
                >
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div className="bg-muted/30 p-4 lg:p-6">
                      <div className="aspect-[8.5/11] w-full rounded-lg overflow-hidden border border-border shadow-sm bg-white">
                        <img
                          src={bulletin.coverImage || "/placeholder.svg"}
                          alt={`${bulletin.title} cover page`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="p-6 lg:p-8 flex flex-col justify-center">
                      <CardHeader className="p-0">
                        <div className="flex items-center gap-2 mb-2">
                          <FileText className="h-5 w-5 text-primary" />
                          <span className="text-sm text-muted-foreground">{bulletin.date}</span>
                        </div>
                        <CardTitle className="font-display text-2xl">{bulletin.title}</CardTitle>
                        <CardDescription className="mt-2 text-base">{bulletin.volume}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-0 mt-6">
                        <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90">
                          <a href={bulletin.pdfUrl} target="_blank" rel="noopener noreferrer">
                            <Download className="mr-2 h-4 w-4" />
                            Download PDF
                          </a>
                        </Button>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-primary/5 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Subscribe to Our Newsletter
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Receive the latest EPPAD bulletins and updates directly in your inbox
              </p>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                  <a href="/membership">Join EPPAD</a>
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
