'use client'

import {
  Box,
  Container,
  Heading,
  Stack,
  Text
} from '@chakra-ui/react'
import { graphql } from 'relay-runtime'
import { useLazyLoadQuery } from 'react-relay'
import ReactMarkdown from 'react-markdown'
import { LongformQuery$data } from './__generated__/LongformQuery.graphql'

const LongformQuery = graphql`
  query LongformQuery($slug: String!) {
    longform(where: {slug: $slug}) {
      title
      body
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

export const Longform = ({ slug }) => {
  const data = useLazyLoadQuery(
    LongformQuery,
    { slug }
  ) as LongformQuery$data
  const longform = data?.longform

  if (longform == null) {
    return null
  }

  return (
    <>
      <Title title={longform.title} />
      <Body body={longform.body} />
    </>
  )
}
