import { Github, Linkedin, Mail, Heart } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-12 bg-muted/30 border-t">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left side */}
            <div className="text-center md:text-left">
              <p className="text-2xl font-bold gradient-text mb-2">Sai Shivananda</p>
              <p className="text-sm text-muted-foreground">Building intelligent systems that matter</p>
            </div>

            {/* Center - Social Links */}
            <div className="flex gap-4">
              <Link
                href="https://github.com/Gundananda"
                target="_blank"
                className="p-3 rounded-full bg-background hover:bg-muted transition-all hover-lift border"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/gundananda/"
                target="_blank"
                className="p-3 rounded-full bg-background hover:bg-muted transition-all hover-lift border"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:gunda.nanda2@gmail.com"
                className="p-3 rounded-full bg-background hover:bg-muted transition-all hover-lift border"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>

            {/* Right side */}
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> using Next.js
              </p>
              <p className="text-xs text-muted-foreground mt-1">2025 Gunda Sai Shivananda</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
