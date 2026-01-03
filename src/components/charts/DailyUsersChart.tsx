'use client'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

export function DailyUsersChart({ data }: { data: any[] }) {
  return (
    <div className="p-4 border rounded-lg">
      <h3 className="mb-4 font-medium">Daily Active Users</h3>

      <div className="h-64 bg-red-500">

      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line dataKey="value" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
    </div>
  )
}
