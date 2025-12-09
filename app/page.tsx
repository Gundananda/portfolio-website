import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { ChatbotSection } from "@/components/chatbot-section"
import { CustomCursor } from "@/components/custom-cursor"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navigation />
      <main className="overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <ChatbotSection />
      </main>
      <Footer />
    </>
  )
}
