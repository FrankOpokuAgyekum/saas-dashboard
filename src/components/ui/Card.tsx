import { ReactNode } from 'react'

export function Card({ children }: { children: ReactNode }) {
  return (
    <div className="p-4 bg-white border shadow-sm rounded-xl border-slate-200 dark:border-slate-800 dark:bg-slate-900">
      {children}
    </div>
  )
}
