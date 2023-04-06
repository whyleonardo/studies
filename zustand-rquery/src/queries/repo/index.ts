import { Repo } from './types'

import { api } from '@/services/api'
import { QueryFunctionContext, useQuery } from '@tanstack/react-query'

export async function getRepos(ctx: QueryFunctionContext) {
	const [, userId] = ctx.queryKey

	if (userId == '' || userId == undefined || userId == null) {
		return null
	}
	const { data } = await api.get<Repo[]>(`/users/${userId}/repos`)
	return data
}

export function useFetchRepos(userId: string) {
	return useQuery(['repos', userId], getRepos, { enabled: false })
}
