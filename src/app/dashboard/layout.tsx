'use client'

import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Sidebar } from '@/components/Sidebar'
import ThemeToggle from '@/components/ThemeToggle'

//const { logout } = useAuth()

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login')
    }
  }, [user, loading, router])

  if (loading || !user) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    )
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <header className="flex items-center justify-between h-16 px-4 border-b border-slate-200 dark:border-slate-800">
          <h1 className="font-medium">Dashboard</h1>
          <ThemeToggle />
          
        </header>

        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}
