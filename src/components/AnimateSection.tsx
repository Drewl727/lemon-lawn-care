'use client'

import { motion } from 'framer-motion'

interface AnimateSectionProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export default function AnimateSection({ children, delay = 0, className }: AnimateSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
