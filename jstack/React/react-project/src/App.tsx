import { Helmet } from 'react-helmet'

import { Layout } from '@/components/Layout'
import { Post } from '@/components/Post'

import { posts } from '@/data/posts'
import { scrollbar } from '@/styles/chakra-ui/theme/custom/scrollbar'
import { Stack, Heading, Container } from '@chakra-ui/react'

export const App = () => {
  return (
    <>
      <Helmet title="React + Vite + Chakra UI" />
      <Layout>
        <Stack width="full" overflowY="scroll" sx={{ ...scrollbar }}>
          <Heading as="h1" size="3xl">
            whyLeo&lsquo;s Blog
          </Heading>
          <Heading as="h2">Posts da Semana</Heading>

          <br />
          <hr />
          <br />

          <Stack gap="2.5">
            {posts &&
              posts.map(({ id, subtitle, title }) => (
                <Post key={id} title={title} subtitle={subtitle} />
              ))}
          </Stack>
        </Stack>
      </Layout>
    </>
  )
}
