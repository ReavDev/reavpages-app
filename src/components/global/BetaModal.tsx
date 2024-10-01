'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useThemeState } from '@/hooks/theme'

export default function BetaModal() {
 const [showModal, setShowModal] = useState(false)
 const { isDark } = useThemeState()

 useEffect(() => {
  const betaAccepted = localStorage.getItem('betaAccepted')
  if (!betaAccepted) {
   setShowModal(true)
  }
 }, [])

 const handleAcceptBeta = () => {
  localStorage.setItem('betaAccepted', 'true')
  setShowModal(false)
 }

 return (
  <div
   className={` ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
  >
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
       className={`w-full max-w-md rounded-lg bg-white p-6 shadow-xl dark:bg-gray-800 ${
        isDark ? 'text-white' : 'text-gray-900'
       }`}
      >
       <h2 className="mb-4 text-2xl font-bold">Welcome to Beta Mode</h2>
       <p className="mb-6">
        You are about to enter beta mode. This version may contain experimental
        features. Do you wish to proceed?
       </p>
       <div className="flex justify-end space-x-4">
        <button
         onClick={() => setShowModal(false)}
         className="rounded bg-gray-200 px-4 py-2 transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
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

export const UsingBetaMode = () => {
 const [isBetaAccepted, setIsBetaAccepted] = useState(false)
 useEffect(() => {
  const betaAccepted = localStorage.getItem('betaAccepted')
  if (betaAccepted) {
   setIsBetaAccepted(true)
  }
 }, [])
 return (
  <div className="">
   {isBetaAccepted && (
    <div className="bg-green-100 p-4 dark:bg-green-800">
     <p className="text-green-800 dark:text-green-100">
      Beta mode is active. Enjoy the new features!
     </p>
    </div>
   )}

   {/* : (
    <div className="rounded bg-yellow-100 p-4 dark:bg-yellow-800">
     <p className="text-yellow-800 dark:text-yellow-100">
      Beta mode is not active. Accept the beta to see new features.
     </p>
    </div>
   )} */}
  </div>
 )
}
