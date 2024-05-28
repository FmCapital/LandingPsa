import {
    Box,
    Container,
    Flex,
    Heading,
    Image,  // Import Image from Chakra UI
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  interface SponsorProps {
    name: string;
    description: string;
    logoSrc: string;
    href: string;
  }
  
  const Sponsor = ({ name, description, logoSrc, href }: SponsorProps) => {
    return (
      <Box
        maxW={{ base: 'full', md: '275px' }}
        w={'full'}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={5}
      >
        <Flex justify={'center'}>
          <Image src={logoSrc} alt={name} boxSize="80px" />
        </Flex>
        <Stack align={'start'} spacing={2} mt={4}>
          <Heading size="md">{name}</Heading>
          <Text mt={1} fontSize={'sm'}>
            {description}
          </Text>
        </Stack>
        <Flex justify={'center'} mt={4}>
          <a href={href} target="_blank" rel="noopener noreferrer">
            <Text fontSize={'sm'} color={'blue.500'}>
              Más información
            </Text>
          </a>
        </Flex>
      </Box>
    );
  };
  
  export default function ListaDePatrocinadores() {
    return (
      <Box p={4} mt={5} mb={5}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
            Nuestros Patrocinadores
          </Heading>
          <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
            Estamos orgullosos de contar con el respaldo de líderes de la industria que contribuyen a nuestro éxito.
          </Text>
        </Stack>
  
        <Container maxW={'5xl'} mt={12}>
          <Flex flexWrap="wrap" gridGap={6} justify="center">
            <Sponsor
              name={'TopFX'}
              description={
                'Opera con más de 600 activos con TopFX, un Prime Broker con más de 10 años de presencia en la industria de FX y CFD. Ofrecemos condiciones de trading excepcionales y los mejores precios.'
              }
              logoSrc={'/topfx.png'}  // Replace with the actual path to the TopFX logo
              href={'#'}  // Replace with the actual link for TopFX
            />
            <Sponsor
              name={'Tradiac'}
              description={
                'Tradiac es una firma de trading remota única, operando  programas para traders financiados de mayor crecimiento en el mundo.'
              }
              logoSrc={'/tradiac.png'}  // Replace with the actual path to the Tradiac logo
              href={'#'}  // Replace with the actual link for Tradiac
            />
          </Flex>
        </Container>
      </Box>
    );
  }
  