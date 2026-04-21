'use client'

import React, { RefObject } from "react"
import { motion, useInView, Variants } from "framer-motion"

type ValidTag = "div" | "p" | "span" | "section" | "article" | "ul" | "li" | "h1" | "h2" | "h3"

interface TimelineContentProps {
  as?: ValidTag
  animationNum?: number
  timelineRef?: RefObject<HTMLElement | null>
  customVariants?: Variants | ((i: number) => Variants)
  className?: string
  children: React.ReactNode
  [key: string]: unknown
}

export function TimelineContent({
  as: Tag = "div",
  animationNum = 0,
  timelineRef,
  customVariants,
  className,
  children,
  ...props
}: TimelineContentProps) {
  const ref = React.useRef<HTMLElement>(null)
  const isInView = useInView(timelineRef ?? ref, { once: true, margin: "0px 0px -50px 0px" })

  const defaultVariants: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { delay: i * 0.15, duration: 0.5 },
    }),
  }

  const variants = typeof customVariants === "function"
    ? customVariants(animationNum)
    : customVariants ?? defaultVariants

  const MotionDiv = motion.div

  return (
    <MotionDiv
      ref={ref as React.RefObject<HTMLDivElement>}
      className={className}
      custom={animationNum}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      {...props}
    >
      {children}
    </MotionDiv>
  )
}
