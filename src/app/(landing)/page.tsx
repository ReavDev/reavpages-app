'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Home() {
  const [text, setText] = useState('Hello World')

  useEffect(() => {
    const timer = setTimeout(() => {
      setText("I'm ReavDev")
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex h-screen items-center justify-center bg-white">
      <motion.h1
        id="reavdev"
        className="w-fit overflow-y-clip bg-gradient-to-r from-blue-800 via-pink-500 to-purple-600 bg-clip-text text-[12vw] font-bold text-transparent"
      >
        {text.split('').map((char, index) => (
          <motion.span
            key={char + '-' + index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: [0.6, -0.05, 0.01, 0.99],
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  )
}
