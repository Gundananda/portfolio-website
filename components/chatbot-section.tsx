"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, Bot, User, Sparkles } from "lucide-react"

interface Message {
  role: "user" | "assistant"
  content: string
}

export function ChatbotSection() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = input.trim()
    setInput("")
    setMessages((prev) => [...prev, { role: "user", content: userMessage }])
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      })

      const data = await response.json()
      setMessages((prev) => [...prev, { role: "assistant", content: data.response }])
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, I encountered an error. Please try again." },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const suggestedQuestions = [
    "Tell me about Sai's background",
    "What are Sai's key projects?",
    "What skills does Sai have?",
    "Tell me about Sai's research work",
  ]

  return (
    <section id="chatbot" className="py-24 gradient-bg-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 mb-6">
              <Sparkles className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-semibold text-purple-600">My AI Twin</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Ask Me <span className="gradient-text">Anything</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              This AI knows everything about me. Ask about my projects, skills, experience, or anything else.
            </p>
          </div>

          {/* Chat Card */}
          <Card className="border-2 shadow-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bot className="h-6 w-6 text-purple-600" />
                Chat with AI
              </CardTitle>
              <CardDescription>Get instant answers about Sai Shivananda</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Messages Area */}
              <div className="h-96 overflow-y-auto mb-4 space-y-4 p-4 rounded-lg bg-muted/30">
                {messages.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                      <Bot className="h-10 w-10 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold mb-2">Start a conversation</p>
                      <p className="text-sm text-muted-foreground">Try asking one of these questions:</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-md">
                      {suggestedQuestions.map((question, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          className="text-xs h-auto py-3 px-4 text-left whitespace-normal hover:bg-purple-500/10 hover:border-purple-500/30 bg-transparent"
                          onClick={() => setInput(question)}
                        >
                          {question}
                        </Button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <>
                    {messages.map((message, index) => (
                      <div
                        key={index}
                        className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                      >
                        {message.role === "assistant" && (
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shrink-0">
                            <Bot className="h-5 w-5 text-white" />
                          </div>
                        )}
                        <div
                          className={`max-w-[80%] p-4 rounded-2xl ${
                            message.role === "user"
                              ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                              : "bg-background border-2"
                          }`}
                        >
                          <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                        </div>
                        {message.role === "user" && (
                          <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0">
                            <User className="h-5 w-5" />
                          </div>
                        )}
                      </div>
                    ))}
                    {isLoading && (
                      <div className="flex gap-3 justify-start">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                          <Bot className="h-5 w-5 text-white" />
                        </div>
                        <div className="bg-background border-2 p-4 rounded-2xl">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" />
                            <div
                              className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"
                              style={{ animationDelay: "0.2s" }}
                            />
                            <div
                              className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"
                              style={{ animationDelay: "0.4s" }}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </>
                )}
              </div>

              {/* Input Form */}
              <form onSubmit={handleSubmit} className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything about Sai..."
                  className="flex-1 h-12 border-2"
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  disabled={isLoading || !input.trim()}
                >
                  <Send className="h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
