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
  <div className="flex min-h-screen flex-col items-center justify-center p-4">
   <motion.h1
    id="reavdev"
    className="mb-4 w-fit bg-gradient-to-r from-blue-800 via-pink-500 to-purple-600 bg-clip-text text-[12vw] font-bold text-transparent"
   >
    {text.split('').map((char, index) => (
     <motion.span key={index}>{char}</motion.span>
    ))}
   </motion.h1>
  </div>
 )
}
