"use client"

import { useEffect, useRef } from "react"

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current

    if (!cursor || !follower) return

    let mouseX = 0
    let mouseY = 0
    let followerX = 0
    let followerY = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY

      if (cursor) {
        cursor.style.transform = `translate(${mouseX - 10}px, ${mouseY - 10}px)`
      }
    }

    const handleMouseEnter = () => {
      if (cursor) cursor.classList.add("hover")
    }

    const handleMouseLeave = () => {
      if (cursor) cursor.classList.remove("hover")
    }

    const animateFollower = () => {
      const dx = mouseX - followerX
      const dy = mouseY - followerY

      followerX += dx * 0.1
      followerY += dy * 0.1

      if (follower) {
        follower.style.transform = `translate(${followerX - 4}px, ${followerY - 4}px)`
      }

      requestAnimationFrame(animateFollower)
    }

    document.addEventListener("mousemove", handleMouseMove)

    const interactiveElements = document.querySelectorAll('a, button, [role="button"]')
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    animateFollower()

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className="custom-cursor hidden md:block" />
      <div ref={followerRef} className="custom-cursor-follower hidden md:block" />
    </>
  )
}
