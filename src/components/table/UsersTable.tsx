'use client'

import { useState } from 'react'
import { useUsers } from '@/services/useUsers'
import { Pagination } from './Pagination'

export function UsersTable() {
  const [page, setPage] = useState(1)
  const { data, isLoading, isError } = useUsers(page)

  if (isLoading) return <p>Loading users...</p>
  if (isError || !data) return <p>Error loading users</p>

  const { data: users, pagination } = data

  return (
    <div className="p-4 border rounded-lg">
      <h3 className="mb-4 font-medium">Users</h3>

      {/* TABLE */}
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b">
            <th className="py-2 text-left">Name</th>
            <th className="py-2 text-left">Email</th>
            <th className="py-2 text-left">Plan</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user: any) => (
            <tr key={user.id} className="border-b last:border-0">
              <td className="py-2">{user.name}</td>
              <td className="py-2">{user.email}</td>
              <td className="py-2">{user.plan}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* PAGINATION — HERE */}
      <Pagination
        page={page}
        totalPages={pagination.totalPages}
        onChange={setPage}
      />
    </div>
  )
}
