'use client'

import { Kpi } from '@/components/Kpi'
import { useAnalytics } from '@/services/useAnalytics'

export default function DashboardPage() {
  const { data, isLoading, isError } = useAnalytics()

  if (isError) {
    return <p className="text-red-600">Failed to load analytics</p>
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <Kpi
        label="Active Users"
        value={data?.kpis.activeUsers.value}
        change={data?.kpis.activeUsers.change}
        loading={isLoading}
      />
      <Kpi
        label="Revenue"
        value={`$${data?.kpis.revenue.value}`}
        change={data?.kpis.revenue.change}
        loading={isLoading}
      />
      <Kpi
        label="New Signups"
        value={data?.kpis.newSignups.value}
        change={data?.kpis.newSignups.change}
        loading={isLoading}
      />
      <Kpi
        label="Churn Rate"
        value={`${data?.kpis.churnRate.value}%`}
        change={data?.kpis.churnRate.change}
        loading={isLoading}
      />
    </div>
  )
}
