"use client"

import { GraduationCap, Award, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "B.Tech in Computer Science at VIT-AP with a stellar 9.27/10 GPA. State Rank 4 in Class XII.",
      color: "bg-blue-500/10 text-blue-600",
    },
    {
      icon: Award,
      title: "Achievements",
      description: "Published researcher, certified data scientist, and technical fest leader with 500+ participants.",
      color: "bg-pink-500/10 text-pink-600",
    },
    {
      icon: TrendingUp,
      title: "Impact",
      description:
        "Built AI systems with 93%+ accuracy and helped provide education for 4,600+ underprivileged children.",
      color: "bg-green-500/10 text-green-600",
    },
  ]

  const skills = {
    "Programming Languages": ["Python", "Java", "R", "SQL", "JavaScript", "HTML", "CSS"],
    Frameworks: ["TensorFlow", "Scikit-learn", "NLTK", "OpenCV", "NumPy", "Pandas"],
    "Specialized Areas": [
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "Computer Vision",
      "Ensemble Learning",
    ],
  }

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Computer Science student at VIT-AP with expertise in Machine Learning, Deep Learning, and Natural Language
              Processing. Passionate about building intelligent systems that solve real-world problems.
            </p>
          </div>

          {/* Highlight Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {highlights.map((item, index) => {
              const Icon = item.icon
              return (
                <Card
                  key={index}
                  className="group hover-lift transition-all duration-300 hover:shadow-xl border-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center mb-6`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Skills Section */}
          <div className="glass p-10 rounded-3xl">
            <h3 className="text-3xl font-bold mb-8 text-center">Technical Expertise</h3>
            <div className="space-y-8">
              {Object.entries(skills).map(([category, items], index) => (
                <div key={index} className="space-y-4">
                  <h4 className="text-lg font-semibold text-muted-foreground">{category}</h4>
                  <div className="flex flex-wrap gap-3">
                    {items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full text-sm font-medium hover-lift transition-all hover:border-purple-500/40"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
