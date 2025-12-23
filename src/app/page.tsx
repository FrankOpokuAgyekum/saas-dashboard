import "./globals.css"

export default function Page() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="bg-white border rounded-lg h-28 dark:bg-slate-800 border-slate-200 dark:border-slate-700"
        />
      ))}
    </div>
  )
}

