'use client'

import { useAnalytics } from '@/services/useAnalytics'
import { Kpi } from '@/components/Kpi'
import { DailyUsersChart } from '@/components/charts/DailyUsersChart'
import { RevenueByPlanChart } from '@/components/charts/RevenueByPlanChart'
import { UsersTable } from '@/components/table/UsersTable'
import { Skeleton } from '@/components/ui/Skeleton'

export default function DashboardPage() {
  const { data, isLoading, isError } = useAnalytics()

  if (isError) {
    return <p className="text-red-600">Failed to load dashboard data</p>
  }

  if (isLoading || !data) {
    return <Skeleton className="h-96" />
  }

  return (
    <div className="space-y-8">
      {/* KPI GRID */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <Kpi
          label="Active Users"
          value={data.kpis.activeUsers.value}
          change={data.kpis.activeUsers.change}
        />
        <Kpi
          label="Revenue"
          value={`$${data.kpis.revenue.value}`}
          change={data.kpis.revenue.change}
        />
        <Kpi
          label="New Signups"
          value={data.kpis.newSignups.value}
          change={data.kpis.newSignups.change}
        />
        <Kpi
          label="Churn Rate"
          value={`${data.kpis.churnRate.value}%`}
          change={data.kpis.churnRate.change}
        />
      </div>

      {/* CHARTS */}
      <div className="grid gap-6 lg:grid-cols-2">
        <DailyUsersChart data={data.chartData.dailyUsers} />
        <RevenueByPlanChart data={data.chartData.revenueByPlan} />
      </div>

      {/* USERS TABLE */}
      <UsersTable />
    </div>
  )
}
