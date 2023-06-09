import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
  useDisclosure
} from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'
import { FiMenu } from 'react-icons/fi'
import { PopoverIcon } from './PopoverIcon'
import { Logo } from '../Logo'
import { ResourcesSubmenu } from './ResourcesSubmenu'

export const Navbar = () => {
  const overflowLink = 'https://app.overflow.co/neonlawfoundation'
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  const { onToggle, isOpen } = useDisclosure({ defaultIsOpen: false })
  return (
    <Box as='section'>
      <Box as='nav' bg='bg-surface'>
        <Container py={{ base: '4', lg: '5' }}>
          <HStack spacing='10' justify='space-between'>
            <Logo />
            {isDesktop
              ? (
                <Flex justify='space-between' flex='1'>
                  <ButtonGroup variant='link' spacing='8'>
                    <Button as={Link} href='/trusts'>Trusts</Button>
                    <Button
                      variant='link'
                      rightIcon={<PopoverIcon isOpen={isOpen} />}
                      onClick={onToggle}
                    >
                      Resources
                    </Button>
                    <Button as={Link} href='https://www.neonlaw.org' target='_blank'>Our Foundation</Button>
                  </ButtonGroup>
                  <HStack spacing='3'>
                    <Button variant='primary' as={Link} href={overflowLink} target='_blank'>Sign Up</Button>
                  </HStack>
                </Flex>
                )
              : (
                <IconButton
                  variant='ghost'
                  icon={<FiMenu fontSize='1.25rem' />}
                  aria-label='Open Menu'
                />
                )}
          </HStack>
        </Container>
        <Divider />
      </Box>
      {isOpen && <ResourcesSubmenu isOpen={isDesktop && isOpen} />}
    </Box>
  )
}
