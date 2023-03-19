import { Box, ButtonGroup, Container, IconButton, Stack, Text } from '@chakra-ui/react'
import { ReactElement } from 'react'
import { FaGithub, FaRegEnvelope } from 'react-icons/fa'
import { Logo } from './Logo'

export const Footer = (): ReactElement => {
  const mailtoLink = "mailto:support@neonlaw.org?subject=Hello&body=I'd%20like%20to%20learn%20more"
  return (
    <Box bg='#1A365D' color='on-accent'>
      <Container as='footer' role='contentinfo' py={{ base: '12', md: '16' }}>
        <Stack spacing={{ base: '4', md: '5' }}>
          <Stack justify='space-between' direction='row' align='center'>
            <Logo />
            <ButtonGroup variant='ghost-on-accent'>
              <IconButton
                as='a'
                href={mailtoLink}
                aria-label='Email'
                icon={<FaRegEnvelope fontSize='1.25rem' />}
              />
              <IconButton
                as='a'
                href='https://github.com/neon-law/foundation'
                aria-label='GitHub'
                target='_blank'
                icon={<FaGithub fontSize='1.25rem' />}
              />
            </ButtonGroup>
          </Stack>
          <Text fontSize='sm' color='on-accent-subtle'>
            &copy; {new Date().getFullYear()} Neon Law. All Rights Reserved.
          </Text>
        </Stack>
      </Container>
    </Box>
  )
}
