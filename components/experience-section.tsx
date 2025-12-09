"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, FileText, Award, Users } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      type: "work",
      icon: Briefcase,
      title: "AI/ML Research Intern",
      company: "NirveonX",
      period: "Jun 2025 – Sep 2025",
      description: [
        "Designed hybrid ResNet–DenseNet model with attention mechanisms achieving 84% accuracy on 20,000+ skin disease images",
        "Developed Ayurveda RAG model enhancing retrieval accuracy by 40% with <2.5s latency",
        "Engineered real-time inference pipelines with OpenCV, reducing processing time by 55%",
      ],
      tags: ["ResNet", "DenseNet", "Attention Mechanisms", "OpenCV", "RAG", "TensorFlow"],
      color: "bg-purple-500/10 text-purple-600",
    },
  ]

  const publications = [
    {
      title: "A BERT-based Novel Ensemble Model for Multi-class Sentiment Analysis in Mental Health",
      status: "Under Review, 2025",
      description:
        "Novel NLP architecture combining BERT + hybrid embeddings for multi-class clinical text classification",
    },
    {
      title: "From Text to Therapy: A Study on Sentiment Analysis in Mental Health",
      status: "International Research Journal of Modernization in Engineering, Technology and Science, 2025",
      description: "Comprehensive study on sentiment analysis techniques for mental health applications",
    },
    {
      title: "A Tour of Visualization Techniques in Sentiment-Oriented Text Data",
      status: "International Research Journal of Modernization in Engineering, Technology and Science, 2025",
      description: "Survey of visualization methods for sentiment analysis data",
    },
  ]

  const leadership = [
    {
      icon: Users,
      title: "Event Lead – Photon Club, VITAP",
      period: "Nov 2023 - Nov 2024",
      description: "Co-led technical fest with 500+ participants, increasing engagement",
    },
    {
      icon: Award,
      title: "Crowdfunding Intern – Muskurahat Foundation",
      period: "Apr 2024 - May 2024",
      description: "Secured funds from 10+ contributors for 4,600+ underprivileged children",
    },
    {
      icon: Award,
      title: "School Captain – Sri Chaitanya High School",
      period: "Jun 2019 – May 2020",
      description: "Led 400+ students with academic and cultural programs",
    },
  ]

  const certifications = [
    "Certified Data Science Professional – Oracle Cloud Infrastructure (2025)",
    "CS50x: Introduction to Computer Science – Harvard University (2024)",
    "AWS Academy Graduate – Cloud Foundations (2024)",
    "PCAP: Programming Essentials in Python – Cisco Networking Academy",
    "JSE: JavaScript Essentials – Cisco Networking Academy",
  ]

  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Work Experience */}
          <div>
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Experience & <span className="gradient-text">Impact</span>
              </h2>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => {
                const Icon = exp.icon
                return (
                  <Card
                    key={index}
                    className="hover-lift transition-all duration-500 hover:shadow-2xl border-2 hover:border-purple-500/30"
                  >
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className={`w-14 h-14 rounded-2xl ${exp.color} flex items-center justify-center shrink-0`}>
                          <Icon className="h-7 w-7" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                            <CardTitle className="text-2xl">{exp.title}</CardTitle>
                            <span className="text-sm text-muted-foreground">{exp.period}</span>
                          </div>
                          <CardDescription className="text-lg font-semibold">{exp.company}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
                            <span className="text-purple-500 shrink-0">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Research Publications */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold mb-4">
                Research & <span className="gradient-text">Publications</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {publications.map((pub, index) => (
                <Card key={index} className="hover-lift transition-all duration-300 hover:shadow-xl border-2">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-pink-500/10 text-pink-600 flex items-center justify-center shrink-0">
                        <FileText className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-2">{pub.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{pub.status}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{pub.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Leadership & Volunteering */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold mb-4">
                Leadership & <span className="gradient-text">Volunteering</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {leadership.map((item, index) => {
                const Icon = item.icon
                return (
                  <Card key={index} className="hover-lift transition-all duration-300 hover:shadow-xl border-2">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-green-500/10 text-green-600 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{item.period}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Certifications */}
          <div className="glass p-10 rounded-3xl">
            <h3 className="text-3xl font-bold mb-8 text-center">
              Certifications & <span className="gradient-text">Credentials</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex gap-3 p-4 rounded-xl bg-gradient-to-r from-purple-500/5 to-pink-500/5 border border-purple-500/10 hover-lift transition-all"
                >
                  <Award className="h-5 w-5 text-purple-500 shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
