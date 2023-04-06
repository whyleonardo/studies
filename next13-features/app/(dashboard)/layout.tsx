import { ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<h1>Dashboard</h1>
			{children}
		</>
	)
}

export default Layout
