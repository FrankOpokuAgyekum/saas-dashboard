"use client"

import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  function toggleTheme() {
    setIsDark((prev) => !prev)
  }

  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-1 rounded bg-slate-200 dark:bg-slate-700"
    >
      Toggle Theme
    </button>
  )
}
