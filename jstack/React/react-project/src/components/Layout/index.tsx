import { ReactNode } from 'react'

import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'

import { Grid, GridItem } from '@chakra-ui/react'

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Grid
      templateAreas={`
			"header header"
			"sidebar main"`}
      gridTemplateRows="auto 1fr"
      gridTemplateColumns="1fr 20fr"
      h="100vh"
    >
      <GridItem area="header">
        <Header />
      </GridItem>

      <GridItem area="sidebar">
        <Sidebar />
      </GridItem>

      <GridItem p="2" area="main">
        {children}
      </GridItem>
    </Grid>
  )
}
