'use client'

import { useForm } from 'react-hook-form'
import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  Heading,
  Input,
  Stack,
  Text
} from '@chakra-ui/react'
import { ReactElement } from 'react'
import { graphql } from 'relay-runtime'
import { useLazyLoadQuery } from 'react-relay'
import { NewsletterSignupQuery$data } from './__generated__/NewsletterSignupQuery.graphql'

const NewsletterSignupQuery = graphql`
  query NewsletterSignupQuery {
    copy(where: {component: "NewsletterSignup"}) {
      component
      values
    }
  }
`

export const NewsletterSignup = (): ReactElement => {
  const data = useLazyLoadQuery(
    NewsletterSignupQuery,
    {}
  ) as NewsletterSignupQuery$data
  const copy = data?.copy?.values || {}

  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const onSubmit = data => {
    const buttonDownLink = 'https://buttondown.email/api/emails/embed-subscribe/neon-law'
    const formData = new FormData()
    formData.append('email', data.email)
    const response = fetch(buttonDownLink, { method: 'POST', body: formData })
    console.log(response)
  }

  return (
    <Container py={{ base: '16', md: '24' }}>
      <Stack spacing={{ base: '8', md: '10' }} align='center' maxW='3xl' mx='auto'>
        <Stack spacing={{ base: '4', md: '5' }} textAlign='center'>
          <Heading size={{ base: 'sm', md: 'md' }}>{copy.cta}</Heading>
          <Text fontSize={{ base: 'lg', md: 'xl' }} color='muted'>
            {copy.updateReason}
          </Text>
        </Stack>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack direction={{ base: 'column', md: 'row' }} width='full' maxW={{ md: 'lg' }} spacing='4'>
            <FormControl flex='1'>
              <Input {...register('email', { required: true })} size='lg' type='email' placeholder={copy.placeholder} />
              <FormHelperText color='subtle'>{copy.cadence}</FormHelperText>
            </FormControl>
            <Button variant='primary' size='lg' type='submit'>
              {copy.subscribe}
            </Button>
          </Stack>
        </form>
      </Stack>
    </Container>
  )
}

export default function Home (): ReactElement {
  return (
    <main>
      <NewsletterSignup />
    </main>
  )
}
