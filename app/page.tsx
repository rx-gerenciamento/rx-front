"use client"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { CollectionStrip } from "@/components/collection-strip"
import { WhyUsSection } from "@/components/why-us-section"
import { Footer } from "@/components/footer"
import { Projects } from "@/components/projects"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <CollectionStrip />
      <WhyUsSection />
      <Projects />
      <Footer />
    </main>
  )
}
