'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const links = [
  { href: '/dashboard', label: 'Overview' },
  { href: '/dashboard/analytics', label: 'Analytics' },
  { href: '/dashboard/settings', label: 'Settings' },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="flex-col hidden bg-white border-r md:flex md:w-64 border-slate-200 dark:border-slate-800 dark:bg-slate-950">
      <div className="flex items-center h-16 px-4 font-semibold">
        SaaS Dashboard
      </div>

      <nav className="flex-1 px-2 py-4 space-y-1">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={clsx(
              'block rounded px-3 py-2 text-sm transition',
              pathname === link.href
                ? 'bg-slate-200 dark:bg-slate-800 font-medium'
                : 'hover:bg-slate-100 dark:hover:bg-slate-800'
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
