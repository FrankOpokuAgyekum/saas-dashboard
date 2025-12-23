import { Card } from './ui/Card'
import { Skeleton } from './ui/Skeleton'

type Props = {
  label: string
  value?: string | number
  change?: number
  loading?: boolean
}

export function Kpi({ label, value, change, loading }: Props) {
  return (
    <Card>
      <div className="space-y-2">
        <p className="text-sm text-slate-500">{label}</p>

        {loading ? (
          <Skeleton className="w-24 h-8" />
        ) : (
          <p className="text-2xl font-semibold">{value}</p>
        )}

        {change !== undefined && !loading && (
          <p
            className={`text-sm ${
              change >= 0 ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {change >= 0 ? '+' : ''}
            {change}%
          </p>
        )}
      </div>
    </Card>
  )
}
