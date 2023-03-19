'use client'

import {
  Box,
  Container,
  Heading,
  Stack
} from '@chakra-ui/react'
import { graphql } from 'relay-runtime'
import { useLazyLoadQuery } from 'react-relay'
import ReactMarkdown from 'react-markdown'
import { BlogPostQuery$data } from './__generated__/BlogPostQuery.graphql'

const BlogPostQuery = graphql`
  query BlogPostQuery($slug: String!) {
    blogPost(where: {slug: $slug}) {
      title
      coverImage {
        fileName
      }
      content
    }
  }
`

const Title = ({ title }) => (
  <Box as='section' bg='bg-accent' color='on-accent' py={{ base: '16', md: '24' }}>
    <Container>
      <Stack spacing='1' align='center'>
        <Heading size={{ base: 'md', md: 'lg' }} fontWeight='semibold'>
          {title}
        </Heading>
      </Stack>
    </Container>
  </Box>
)

const Body = ({ body }) => (
  <Box as='section' py={{ base: '4', md: '8' }}>
    <Container maxW='3xl'>
      <Box bg='bg-surface' boxShadow='sm' borderRadius='lg' p={{ base: '4', md: '6' }}>
        <ReactMarkdown children={body} />
      </Box>
    </Container>
  </Box>
)

export const BlogPost = ({ slug }) => {
  const data = useLazyLoadQuery(
    BlogPostQuery,
    { slug }
  ) as BlogPostQuery$data
  const blogPost = data?.blogPost

  if (blogPost == null) {
    return null
  }

  return (
    <>
      <Title title={blogPost.title} />
      <Body body={blogPost.content} />
    </>
  )
}
