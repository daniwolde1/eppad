import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HeroSection } from "@/components/home/hero-section"
import { FeaturedCards } from "@/components/home/featured-cards"
import { VideoSection } from "@/components/home/video-section"
import { WorkingGroupsPreview } from "@/components/home/working-groups-preview"
import { SponsorsSection } from "@/components/home/sponsors-section"
import { BulletinSection } from "@/components/home/bulletin-section"
import { BoardMembersSection } from "@/components/home/board-members-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <FeaturedCards />
        <VideoSection />
        <WorkingGroupsPreview />
        <SponsorsSection />
        <BulletinSection />
        <BoardMembersSection />
        <CTASection />
      </main>
      <SiteFooter />
    </div>
  )
}
