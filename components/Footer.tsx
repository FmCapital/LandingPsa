'use client'

import { ReactNode } from 'react'

import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  Image
} from '@chakra-ui/react'

const Logo = (props: any) => {
  return (
    <Image src="/icon.png" alt="Firm Logo" boxSize="100px" />
  )
}

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}

export default function LargeWithLogoLeft() {
  return (
    <Box
      bg={useColorModeValue('gray.700', 'gray.900')}  
      color={useColorModeValue('white', 'gray.200')}  // Cambia este color al que desees para el texto
    >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue('gray.700', 'white')} />
            </Box>
            <Text fontSize={'sm'}>© 2023 FM Capital. All rights reserved</Text>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Productos</ListHeader>
            <Box as="a" href={'/trade'}>
              Trading
            </Box>
            <Box as="a" href={'/investing'}>
              Inversiones
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Nosotros</ListHeader>
            <Box as="a" href={'/about'}>
             Acerca
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Soporte</ListHeader>
          
            <Box as="a" href={'/terms'}>
              Terminos y Condiciones
            </Box>
            <Box as="a" href={'#'}>
              Contacto
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Follow Us</ListHeader>
            <Box as="a" href={'#'}>
              Facebook
            </Box>
            <Box as="a" href={'#'}>
              Instagram
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}