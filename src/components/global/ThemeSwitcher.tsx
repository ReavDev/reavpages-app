"use client"

import useGlobal from "@/hooks/global"
import { useTheme } from "@/hooks/theme"
import { cn, inDevEnvironment } from "@/utils"
import { motion } from "framer-motion"
import { Monitor, Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import { toast } from "sonner"

export default function ThemeSwitcher() {
 const [isBetaMode, setIsBetaMode] = useState(false)
 const { setShowBetaModal } = useGlobal()

 const { updateTheme, theme } = useTheme()

 useEffect(() => {
  const betaAccepted = localStorage.getItem("betaAccepted") === "true"
  setIsBetaMode(betaAccepted)
 }, [])

 if (!isBetaMode && !inDevEnvironment) {
  return null
 }

 const availableThemes = [
  { id: "dark", icon: Moon },
  { id: "system", icon: Monitor },
  { id: "light", icon: Sun },
 ] as const

 const handleThemeChange = (newTheme: "dark" | "system" | "light") => {
  if (isBetaMode || inDevEnvironment) {
   updateTheme(newTheme)
  } else {
   toast.warning("Please accept beta mode to change the theme.")
   setShowBetaModal(true)
  }
 }

 return (
  <motion.div
   className="fixed bottom-4 right-4 z-50"
   initial={{ opacity: 0, y: 50 }}
   animate={{ opacity: 1, y: 0 }}
   transition={{ duration: 0.5 }}
  >
   <div className="flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 shadow-lg">
    {availableThemes.map((availableTheme) => (
     <button
      key={availableTheme.id}
      onClick={() => handleThemeChange(availableTheme.id)}
      className={cn(
       "relative rounded-full p-2 transition-all duration-300",
       theme === availableTheme.id
        ? "bg-white text-gray-900"
        : "text-white hover:bg-white/10"
      )}
     >
      <availableTheme.icon className="h-5 w-5" />
      <span className="sr-only">{availableTheme.id}</span>
      {theme === availableTheme.id && (
       <motion.div
        className="absolute inset-0 z-10 rounded-full bg-white"
        layoutId="activeTeam"
        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
       />
      )}
     </button>
    ))}
   </div>
  </motion.div>
 )
}
