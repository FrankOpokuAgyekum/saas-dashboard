import { useQuery } from '@tanstack/react-query'
import { fetcher } from '@/lib/api'

type AnalyticsResponse = {
  chartData: any
  kpis: {
    activeUsers: { value: number; change: number }
    revenue: { value: number; change: number }
    newSignups: { value: number; change: number }
    churnRate: { value: number; change: number }
  }
}

export function useAnalytics() {
  return useQuery({
    queryKey: ['analytics'],
    queryFn: () => fetcher<AnalyticsResponse>('/api/analytics'),
  })
}
