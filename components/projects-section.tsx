"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Languages, Shield, Camera, Trash2 } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      icon: Brain,
      title: "BertEnsemble – Mental Health Sentiment Analysis",
      period: "Aug 2024 - Apr 2025",
      description:
        "Built a multi-class sentiment classifier combining BERT embeddings with TF-IDF features, achieving 93.21% accuracy using stacking ensemble methods.",
      tags: ["BERT", "Machine Learning", "Ensemble Learning", "NLP"],
      metrics: "93.21% Accuracy | 93.24% F1-Score",
      color: "bg-purple-500/10 text-purple-600",
    },
    {
      icon: Languages,
      title: "Hindi Multi-Class Emotion Detection",
      period: "Sep 2025 - Present",
      description:
        "Developed a Hindi emotion classifier using mBERT + BiLSTM achieving 90%+ accuracy on the BHAAV dataset with 20k+ sentences.",
      tags: ["Deep Learning", "mBERT", "BiLSTM", "Streamlit"],
      metrics: "90%+ Accuracy | 20k+ Sentences",
      color: "bg-blue-500/10 text-blue-600",
    },
    {
      icon: Languages,
      title: "Multilingual Sentiment Analysis",
      period: "Jul 2025 – Sep 2025",
      description:
        "Designed transformer-based pipeline for Hindi-English code-switched texts using IndicNLP embeddings and fine-tuned BERT models.",
      tags: ["Transformers", "BERT", "Multilingual NLP"],
      metrics: "87% Accuracy",
      color: "bg-pink-500/10 text-pink-600",
    },
    {
      icon: Camera,
      title: "Face Verification System",
      period: "Jan 2025 - Apr 2025",
      description:
        "Developed face verification using MTCNN for detection and FaceNet embeddings, achieving 81.25% accuracy and 100% precision.",
      tags: ["Computer Vision", "MTCNN", "FaceNet", "Deep Learning"],
      metrics: "81.25% Accuracy | 100% Precision",
      color: "bg-green-500/10 text-green-600",
    },
    {
      icon: Shield,
      title: "Women's Safety Handbag",
      period: "Aug 2024 - Dec 2024",
      description:
        "Engineered IoT smart handbag with motion sensors and emergency SMS alerts, achieving 90%+ accuracy in distress detection.",
      tags: ["IoT", "Embedded Systems", "GSM/GPS", "Social Innovation"],
      metrics: "90%+ Detection | 5s Response Time",
      color: "bg-orange-500/10 text-orange-600",
    },
    {
      icon: Trash2,
      title: "Smart Waste Management",
      period: "Oct 2023 - Dec 2023",
      description:
        "Created IoT garbage monitoring system using Raspberry Pi Pico with 95% accuracy in real-time waste level detection.",
      tags: ["IoT", "Raspberry Pi", "Python", "ESP8266"],
      metrics: "95% Accuracy | 3s Response Time",
      color: "bg-teal-500/10 text-teal-600",
    },
  ]

  return (
    <section id="projects" className="py-24 gradient-bg-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A collection of cutting-edge AI/ML projects spanning NLP, Computer Vision, and IoT
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => {
              const Icon = project.icon
              return (
                <Card
                  key={index}
                  className="group hover-lift transition-all duration-500 hover:shadow-2xl border-2 hover:border-purple-500/30"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-14 h-14 rounded-2xl ${project.color} flex items-center justify-center`}>
                        <Icon className="h-7 w-7" />
                      </div>
                      <span className="text-sm text-muted-foreground">{project.period}</span>
                    </div>
                    <CardTitle className="text-2xl mb-2 group-hover:gradient-text transition-all">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="text-sm font-semibold gradient-text">{project.metrics}</div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
