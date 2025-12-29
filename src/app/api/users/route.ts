import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const page = Number(searchParams.get('page') || 1)
  const pageSize = 8

  const allUsers = Array.from({ length: 42 }).map((_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    plan: ['Basic', 'Pro', 'Enterprise'][i % 3],
  }))

  const start = (page - 1) * pageSize
  const data = allUsers.slice(start, start + pageSize)

  return NextResponse.json({
    data,
    pagination: {
      page,
      pageSize,
      total: allUsers.length,
    },
  })
}