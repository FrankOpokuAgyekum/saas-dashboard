// 'use client'

// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import clsx from 'clsx'

// const links = [
//   { href: '/dashboard', label: 'Overview' },
//   { href: '/dashboard/analytics', label: 'Analytics' },
//   { href: '/dashboard/settings', label: 'Settings' },
// ]

// export function Sidebar() {
//   const pathname = usePathname()

//   return (
//     <aside className="flex-col hidden bg-white border-r md:flex md:w-64 border-slate-200 dark:border-slate-800 dark:bg-slate-950">
//       <div className="flex items-center h-16 px-4 font-semibold">
//         SaaS Dashboard
//       </div>

//       <nav className="flex-1 px-2 py-4 space-y-1">
//         {links.map((link) => (
//           <Link
//             key={link.href}
//             href={link.href}
//             className={clsx(
//               'block rounded px-3 py-2 text-sm transition',
//               pathname === link.href
//                 ? 'bg-slate-200 dark:bg-slate-800 font-medium'
//                 : 'hover:bg-slate-100 dark:hover:bg-slate-800'
//             )}
//           >
//             {link.label}
//           </Link>
//         ))}
//       </nav>
//     </aside>
//   )
// }


'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import ThemeToggle from './ThemeToggle'

export function Sidebar() {
  const pathname = usePathname()

  const links = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Analytics', href: '/analytics' },
    { label: 'Settings', href: '/settings' },
  ]

  return (
    <aside className="flex flex-col w-64 min-h-screen p-4 border-r bg-gray-50 dark:bg-gray-900">
      <h2 className="mb-6 text-xl font-bold">Frantronics Development: SaaS</h2>

      <nav className="flex flex-col flex-1 space-y-2">
        {links.map((link) => {
          const isActive = pathname === link.href
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 ${
                isActive ? 'bg-gray-300 dark:bg-gray-700 font-semibold' : ''
              }`}
            >
              {link.label}
            </Link>
          )
        })}
      </nav>

      {/* Optional: Theme toggle inside sidebar */}
      <div className="mt-6">
       {/* <ThemeToggle />  */}
       By: Frank Agyekum
      </div>
    </aside>
  )
}

