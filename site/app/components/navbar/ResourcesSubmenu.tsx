import {
  AspectRatio,
  Box,
  Button,
  Container,
  Icon,
  Image,
  Link,
  SimpleGrid,
  SlideFade,
  Stack,
  Text,
  UseDisclosureProps
} from '@chakra-ui/react'
import { useLazyLoadQuery } from 'react-relay'
import { FiPlayCircle } from 'react-icons/fi'
import { graphql } from 'relay-runtime'
import { ResourcesSubmenuQuery$data } from './__generated__/ResourcesSubmenuQuery.graphql'

const ResourcesSubmenuQuery = graphql`
  query ResourcesSubmenuQuery {
    copy(where: {component: "ResourcesSubmenu"}) {
      values
    }
  }
`

export const ResourcesSubmenu = (props: UseDisclosureProps) => {
  const data = useLazyLoadQuery(
    ResourcesSubmenuQuery,
    {}
  ) as ResourcesSubmenuQuery$data
  const copy = data?.copy?.values
  const articles = []
  const guides = []
  const videos = []

  const { isOpen } = props
  return (
    <SlideFade in={isOpen}>
      <Box bg='bg-surface' boxShadow='md' pt={{ base: '4', md: '8' }} pb='8'>
        <Container>
          <Stack direction={{ base: 'column', lg: 'row' }} spacing={{ base: '14', lg: '16' }}>
            <SimpleGrid columns={{ base: 1, md: 2 }} maxW={{ lg: '2xl' }} gap={6}>
              <Stack spacing='3'>
                <Text fontSize='sm' fontWeight='medium' color='accent'>
                  Articles
                </Text>
                <Stack>
                  {/* {articles.map((link, id) => (
                    <Link variant='menu' href={link.href} key={id}>
                      <Stack spacing='4' direction='row' p='3'>
                        <Icon as={link.icon} boxSize='6' color='accent' />
                        <Stack spacing='1'>
                          <Text fontWeight='medium'>{link.title}</Text>
                          <Text fontSize='sm' color='muted'>
                            {link.description}
                          </Text>
                        </Stack>
                      </Stack>
                    </Link>
                  ))} */}
                </Stack>
              </Stack>
              <Stack spacing='3'>
                <Text fontSize='sm' fontWeight='medium' color='accent'>
                  Guides
                </Text>
                <Stack>
                  {/* {articles.map((link, id) => (
                    <Link variant='menu' href={link.href} key={id}>
                      <Stack spacing='4' direction='row' p='3'>
                        <Icon as={link.icon} boxSize='6' color='accent' />
                        <Stack spacing='1'>
                          <Text fontWeight='medium'>{link.title}</Text>
                          <Text fontSize='sm' color='muted'>
                            {link.description}
                          </Text>
                        </Stack>
                      </Stack>
                    </Link>
                  ))} */}
                </Stack>
              </Stack>
            </SimpleGrid>
            <Stack spacing='6'>
              <Text fontSize='sm' fontWeight='medium' color='accent'>
                Videos
              </Text>
              <Stack spacing='8' direction={{ base: 'column', md: 'row', lg: 'column' }}>
                {/* {videos.map((link, id) => (
                  <Stack direction={{ base: 'column', lg: 'row' }} spacing='6' key={id}>
                    <Box>
                      <AspectRatio ratio={3 / 2} width={{ base: '60', lg: '40' }}>
                        <Image
                          borderRadius='md'
                          objectFit='cover'
                          src={link.previewImage}
                          alt={link.title}
                        />
                      </AspectRatio>
                    </Box>

                    <Stack spacing='3' shouldWrapChildren>
                      <Stack spacing='1'>
                        <Text fontWeight='medium'>{link.title}</Text>
                        <Text fontSize='sm' color='muted'>
                          {link.description}
                        </Text>
                      </Stack>
                      <Button
                        variant='link'
                        colorScheme='blue'
                        leftIcon={<FiPlayCircle fontSize='1.25rem' />}
                      >
                        Watch video
                      </Button>
                    </Stack>
                  </Stack>
                ))} */}
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </SlideFade>
  )
}
