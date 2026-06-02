import { AnnouncementBanner } from "@/components/home/announcement-banner";
import { Hero } from "@/components/home/hero";
import { FeaturedItems } from "@/components/home/featured-items";
import { AboutPreview } from "@/components/home/about-preview";
import { Testimonials } from "@/components/home/testimonials";
import { CTASection } from "@/components/home/cta-section";

export default function Home() {
  return (
    <>
      <AnnouncementBanner />
      <Hero />
      <FeaturedItems />
      <AboutPreview />
      <Testimonials />
      <CTASection />
    </>
  );
}
