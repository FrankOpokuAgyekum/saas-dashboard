import { NextResponse } from 'next/server'

export async function GET() {
  await new Promise((res) => setTimeout(res, 800))

  return NextResponse.json({
    kpis: {
      activeUsers: { value: 1240, change: 12 },
      revenue: { value: 18500, change: -3 },
      newSignups: { value: 320, change: 8 },
      churnRate: { value: 2.4, change: -0.5 },
    },
    chartData: {
      dailyUsers: Array.from({ length: 30 }).map((_, i) => ({
        date: `Day ${i + 1}`,
        value: Math.floor(Math.random() * 500 + 800),
      })),
      revenueByPlan: [
        { plan: 'Basic', revenue: 5200 },
        { plan: 'Pro', revenue: 9800 },
        { plan: 'Enterprise', revenue: 3500 },
      ],
    },
  })
}
