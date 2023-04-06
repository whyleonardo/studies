import { Suspense, useCallback } from 'react'
import React from 'react'
import { Helmet } from 'react-helmet'

import { Loading } from '@/components/Loading'
import { Search } from '@/components/Search'

import { Stack } from '@chakra-ui/react'

const Repo = React.lazy(() => import('../src/components/Repo'))

export const App = () => {
	return (
		<>
			<Helmet title="Zustand + React Query" />

			<Stack alignItems="center">
				<Search />
				<Suspense fallback={<Loading />}>
					<Repo />
				</Suspense>
			</Stack>
		</>
	)
}
