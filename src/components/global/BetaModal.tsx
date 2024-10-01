'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '@/hooks/theme'

export default function BetaModal() {
 const [showModal, setShowModal] = useState(false)
 const { updateTheme } = useTheme()

 useEffect(() => {
  const betaAccepted = localStorage.getItem('betaAccepted')
  if (!betaAccepted) {
   setShowModal(true)
   updateTheme('light')
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [])

 const handleAcceptBeta = () => {
  localStorage.setItem('betaAccepted', 'true')
  setShowModal(false)
  updateTheme('system')
 }

 const handleCancel = () => {
  localStorage.setItem('betaAccepted', 'false')
  setShowModal(false)

  updateTheme('light')
 }

 return (
  <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
   <AnimatePresence>
    {showModal && (
     <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4"
     >
      <motion.div
       initial={{ scale: 0.9, y: 50 }}
       animate={{ scale: 1, y: 0 }}
       exit={{ scale: 0.9, y: 50 }}
       className="w-full max-w-md rounded-lg bg-white p-6 text-gray-900 shadow-xl"
      >
       <h2 className="mb-4 text-2xl font-bold">Welcome to Beta Mode</h2>
       <p className="mb-6">
        You are about to enter beta mode. This version may contain experimental
        features, including dark mode. Do you wish to proceed?
       </p>
       <div className="flex justify-end space-x-4">
        <button
         onClick={handleCancel}
         className="rounded bg-gray-200 px-4 py-2 transition-colors hover:bg-gray-300"
        >
         Cancel
        </button>
        <button
         onClick={handleAcceptBeta}
         className="rounded bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
        >
         Accept
        </button>
       </div>
      </motion.div>
     </motion.div>
    )}
   </AnimatePresence>
  </div>
 )
}

export function UsingBetaMode() {
 const [isBetaAccepted, setIsBetaAccepted] = useState(false)
 const { theme } = useTheme()

 useEffect(() => {
  const betaAccepted = localStorage.getItem('betaAccepted') === 'true'
  setIsBetaAccepted(betaAccepted)
 }, [])

 const isDark = theme === 'dark' && isBetaAccepted

 return (
  <div className="fixed top-0 w-full">
   {isBetaAccepted && (
    <div className={isDark ? 'bg-green-800' : 'bg-yellow-100'}>
     <p className={`p-4 ${isDark ? 'text-green-100' : 'text-green-800'}`}>
      Beta mode is active. Dark mode is now available!
     </p>
    </div>
   )}
  </div>
 )
}

export function ThemeSwitcher() {
 const { theme, updateTheme } = useTheme()
 const isBetaAccepted = localStorage.getItem('betaAccepted') === 'true'

 const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
  if (isBetaAccepted) {
   updateTheme(newTheme)
  } else {
   alert('Please accept beta mode to use dark theme.')
  }
 }

 return (
  <div className="flex items-center space-x-4">
   <button
    onClick={() => handleThemeChange('light')}
    className={`rounded px-4 py-2 ${theme === 'light' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
   >
    Light
   </button>
   <button
    onClick={() => handleThemeChange('dark')}
    className={`rounded px-4 py-2 ${theme === 'dark' && isBetaAccepted ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
    disabled={!isBetaAccepted}
   >
    Dark
   </button>
   <button
    onClick={() => handleThemeChange('system')}
    className={`rounded px-4 py-2 ${theme === 'system' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
   >
    System
   </button>
  </div>
 )
}
