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
import { EventQuery$data } from './__generated__/EventQuery.graphql'

const EventQuery = graphql`
  query EventQuery($slug: String!) {
    event(where: {slug: $slug}) {
      title
      beginsAt
      endsAt
      image {
        fileName
      }
      description
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

export const Event = ({ slug }) => {
  const data = useLazyLoadQuery(
    EventQuery,
    { slug }
  ) as EventQuery$data
  const event = data?.event

  if (event == null) {
    return null
  }

  return (
    <>
      <Title title={event.title} />
    </>
  )
}
