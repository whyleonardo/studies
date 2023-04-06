import { Suspense } from 'react'
import { User } from '@/components/User'

export default async function Home() {
	return (
		<div>
			<Suspense fallback={<p>Carregando</p>}>
				{/* @ts-expect-error Async Server Component */}
				<User />
			</Suspense>
		</div>
	)
}
