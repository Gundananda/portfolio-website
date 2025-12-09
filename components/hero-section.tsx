"use client"

import { Github, Linkedin, Mail, ChevronDown, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="min-h-screen gradient-bg flex items-center justify-center relative overflow-hidden">
      {/* Floating shapes background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-10 w-64 h-64 bg-purple-300/30 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-pink-300/30 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/3 w-72 h-72 bg-blue-300/30 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center stagger-children">
          {/* Avatar */}
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-4xl font-bold text-muted-foreground shadow-xl border-4 border-white">
              SS
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-balance">
            Hey, I'm <span className="gradient-text">Sai</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance leading-relaxed">
            AI/ML Engineer building intelligent systems that solve real-world problems
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
              asChild
            >
              <Link href="#chatbot">
                <Sparkles className="mr-2 h-5 w-5" />
                Talk to My AI Twin
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg rounded-full border-2 hover:bg-white/80 transition-all bg-transparent"
              asChild
            >
              <Link href="#projects">View My Work</Link>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center mb-16">
            <Link
              href="https://github.com/Gundananda"
              target="_blank"
              className="p-3 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all hover-lift"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/gundananda/"
              target="_blank"
              className="p-3 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all hover-lift"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link
              href="mailto:gunda.nanda2@gmail.com"
              className="p-3 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all hover-lift"
            >
              <Mail className="h-6 w-6" />
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <ChevronDown className="h-8 w-8 mx-auto text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  )
}
