'use client'

import { Link } from '@chakra-ui/next-js'
import {
  Badge,
  Box,
  Button,
  Heading,
  HStack,
  Img,
  Stack,
  Text,
  useColorModeValue as mode
} from '@chakra-ui/react'
import { HiArrowRight } from 'react-icons/hi'

const Page = () => {
  return (
    <Box
      as='section'
      bg={mode('gray.50', 'gray.800')}
      pb='24'
      pos='relative'
      px={{ base: '6', lg: '12' }}
    >
      <Box maxW='7xl' mx='auto'>
        <Box
          maxW={{ lg: 'md', xl: 'xl' }}
          pt={{ base: '20', lg: '40' }}
          pb={{ base: '16', lg: '24' }}
        >
          <HStack
            className='group'
            px='2'
            py='1'
            bg={mode('gray.200', 'gray.700')}
            rounded='full'
            fontSize='sm'
            mb='8'
            display='inline-flex'
            minW='18rem'
            as={Link}
            href='/events/privacy-practicum'
          >
            <Badge
              px='2'
              variant='solid'
              colorScheme='green'
              rounded='full'
              textTransform='capitalize'
            >
              New
            </Badge>
            <Box fontWeight='medium'>Introducing the Privacy Practicum</Box>
            <Box
              aria-hidden
              transition='0.2s all'
              _groupHover={{ transform: 'translateX(2px)' }}
              as={HiArrowRight}
              display='inline-block'
            />
          </HStack>
          <Heading as='h1' size='3xl' lineHeight='1' fontWeight='extrabold' letterSpacing='tight'>
            We fight for{' '}
            <Box as='mark' color={mode('blue.500', 'blue.300')} bg='transparent'>
              your privacy rights.
            </Box>
          </Heading>
          <Text mt={4} fontSize='xl' fontWeight='medium' color={mode('gray.600', 'gray.400')}>
            Our non-profit provides free legal resources for people like you who want to protect their secrets.
          </Text>
          <Stack direction={{ base: 'column', sm: 'row' }} spacing='4' mt='8'>
            <Button size='lg' colorScheme='blue' height='14' px='8' fontSize='md' as={Link} href='/subscribe'>
              Subscribe to our Newsletter
            </Button>
            <Button
              size='lg'
              bg='white'
              color='gray.800'
              _hover={{ bg: 'gray.50' }}
              height='14'
              px='8'
              shadow='base'
              fontSize='md'
              as='a'
              href='https://app.overflow.co/neonlawfoundation'
            >
              Donate
            </Button>
          </Stack>
        </Box>
      </Box>
      <Box
        pos={{ lg: 'absolute' }}
        insetY={{ lg: '0' }}
        insetEnd={{ lg: '0' }}
        bg='gray.50'
        w={{ base: 'full', lg: '50%' }}
        height={{ base: '96', lg: 'full' }}
        sx={{
          clipPath: { lg: 'polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)' }
        }}
      >
        <Img
          height='100%'
          width='100%'
          objectFit='cover'
          src='https://images.unsplash.com/photo-1557597774-9d273605dfa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1463&q=80'
          alt='Privacy'
        />
      </Box>
    </Box>
  )
}

export default Page
