import { fetcher } from '@/lib/api'
import { useQuery } from '@tanstack/react-query'

export function useUsers(page: number) {
  return useQuery({
    queryKey: ['users', page],
    queryFn: () => fetcher(`/api/users?page=${page}`),
    placeholderData: (prev: any) => prev,   // <-- keeps previous page data
    staleTime: 1000 * 60               // optional but recommended
  })
}
