import { document } from 'postcss'
import './globals.css'
import ThemeToggle from "@/components/ThemeToggle"

<script
  dangerouslySetInnerHTML={{
    __html: `
      (function () {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
        }
      })();
    `,
  }}
/>

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <aside className="flex-col hidden bg-white border-r md:flex md:w-64 border-slate-200 dark:border-slate-800 dark:bg-slate-950">
            <div className="flex items-center h-16 px-4 font-semibold">
              SaaS Dashboard
            </div>

            <nav className="flex-1 px-2 py-4 space-y-1">
              <a className="block px-3 py-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800">
                Overview
              </a>
              <a className="block px-3 py-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800">
                Analytics
              </a>
              <a className="block px-3 py-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800">
                Settings
              </a>
            </nav>
          </aside>

          {/* Main Content */}
          <div className="flex flex-col flex-1">
            {/* Header */}
            <header className="flex items-center justify-between h-16 px-4 border-b border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur">
              <h1 className="text-lg font-medium">Dashboard</h1>
              <ThemeToggle/>
            </header>

            {/* Page Content */}
            <main className="flex-1 p-6">{children}</main>
          </div>
        </div>
      </body>
    </html>
  )

}