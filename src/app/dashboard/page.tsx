import { Kpi } from '@/components/Kpi'

export default function DashboardPage() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <Kpi label="Active Users" value="1,240" change={12} />
      <Kpi label="Revenue" value="$18,500" change={-3} />
      <Kpi label="New Signups" loading />
      <Kpi label="Churn Rate" value="2.4%" />
    </div>
  )
}
