"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Moon, Sun } from "lucide-react"

export function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const theme = localStorage.getItem("theme") || "dark"
    setIsDark(theme === "dark")
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark"
    setIsDark(!isDark)
    localStorage.setItem("theme", newTheme)
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="from-primary to-accent shadow-primary/50 fixed right-8 bottom-8 z-[9997] flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r shadow-lg"
      whileHover={{ scale: 1.1, rotate: 180 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 360 }}
        transition={{ duration: 0.6 }}
      >
        {isDark ? <Moon className="h-6 w-6" /> : <Sun className="h-6 w-6" />}
      </motion.div>
    </motion.button>
  )
}
