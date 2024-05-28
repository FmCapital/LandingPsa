'use client'
import { ReactNode } from 'react'
import {
    Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'
import { useColorMode } from "@chakra-ui/react";




export default function SplitScreen() {
    const { colorMode } = useColorMode();
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
const bgColor = colorMode === "dark" ? "gray.800" : "gray.100";
  return (
    <>
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}>
              FmFund
            </Text>
            <br />{' '}
            <Text color={'blue.400'} as={'span'}>
              Crea bonos sinteticos con acciones de bolsa
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
          ¿Quieres comenzar tu propio fondo de inversiones? ¡Claro que puedes! Empieza decidiendo en qué quieres invertir y encuentra a personas con experiencia que te ayuden. Reúne el dinero que necesitas, incluso pidiendo ayuda a amigos y familiares. Asegúrate de seguir todas las reglas y regulaciones. ¡Sigue leyendo para aprender cómo hacer realidad tu sueño de inversión          </Text>
         
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            '/fund.jpg'
          }
        />
      </Flex>
    </Stack>
    <Box bg={useColorModeValue('gray.100', 'gray.900')} position={'relative'}>
  <Container maxW={'7xl'} zIndex={10} position={'relative'}>
    <Stack direction={{ base: 'column', lg: 'row' }}>
      <Flex flex={1} />

      <Stack
        flex={1}
        color={useColorModeValue('gray.100', 'gray.900')}
        justify={{ lg: 'center' }}
        py={{ base: 4, md: 20, xl: 60 }}>
        <Box mb={{ base: 8, md: 20 }}>
          <Text
            fontFamily={'heading'}
            fontWeight={700}
            textTransform={'uppercase'}
            mb={3}
            fontSize={'xl'}
            color={'gray.500'}>
            Tecnología
          </Text>
          <Heading color={useColorModeValue('gray.900', 'gray.100')} mb={5} fontSize={{ base: '3xl', md: '5xl' }}>
            Invierte de manera moderna
          </Heading>
          <Text fontSize={'xl'} color={useColorModeValue('gray.900', 'gray.100')}>
          FMFund permite que empieces a usar aplicaciones de inversión que te permiten comenzar a invertir desde tu teléfono en minutos.  ¡Invierte de forma moderna y conveniente hoy!"
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {stats.map((stat) => (
            <Box key={stat.title}>
              <Text fontFamily={'heading'} fontSize={'3xl'} color={useColorModeValue('gray.900', 'gray.100')} mb={3}>
                {stat.title}
              </Text>
              <Text fontSize={'xl'} color={useColorModeValue('gray.900', 'gray.100')}>
                {stat.content}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Stack>
    </Stack>
  </Container>

  <Flex
    flex={1}
    zIndex={0}
    display={{ base: 'none', lg: 'flex' }}
    backgroundImage="url('/stay.jpg')"
    backgroundSize={'cover'}
    backgroundPosition="center"
    backgroundRepeat="no-repeat"
    position={'absolute'}
    width={'45%'}
    insetY={0}
    left={0}>
    <Flex
      bgGradient={'linear(to-r, gray.800 10%, transparent)'}
      w={'full'}
      h={'full'}
    />
  </Flex>
</Box>
<Box p={4} mt={5} mb={5}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
            Plataformas en uso
          </Heading>
          <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
            Actualmente tenemos contratos con diferentes plataformas en las que nuestros clientes tienen trato exclusivo
          </Text>
        </Stack>
  
        <Container maxW={'5xl'} mt={12}>
          <Flex flexWrap="wrap" gridGap={6} justify="center">
            <Sponsor
              name={'Binance'}
              description={
                'Binance Holdings Ltd., conocida como Binance, es una empresa global que opera el mayor intercambio de criptomonedas en términos de volumen diario de operaciones.'
              }
              logoSrc={'/binance.png'}  // Replace with the actual path to the TopFX logo
              href={'#'}  // Replace with the actual link for TopFX
            />
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
             <Sponsor
              name={'FMCoin'}
              description={
'FMCoin es nuestra moneda digital en la cual puedes invertir y crear rendimientos en automático, además de que en un futuro podrás comprar terrenos digitales que se respaldan con tierra real que podrá ser adquirida con fmcoin '              }
              logoSrc={'/fmcoin.png'}  // Replace with the actual path to the Tradiac logo
              href={'#'}  // Replace with the actual link for Tradiac
            />
            
          </Flex>
        </Container>
      </Box>

    </>
  )
  
}


const StatsText = ({ children }: { children: ReactNode }) => (
    <Text as={'span'} fontWeight={700} color={'red'}>
      {children}
    </Text>
  )
  
  const stats = [
    {
      title: '10+',
      content: (
        <>
          <StatsText>Aplicaciones </StatsText> para invertir en tiempo real con los mercados de 
          valores internacionales.
        </>
      ),
    },
    {
      title: '24/7',
      content: (
        <>
          <StatsText>Analytics</StatsText>  de tus inversiones y futuras inversiones.
        </>
      ),
    },
    {
      title: '20+',
      content: (
        <>
          <StatsText>Cursos</StatsText> para estar al día de nuevas maneras e instrumentos de inversiones.
        </>
      ),
    },
    {
      title: '5+',
      content: (
        <>
          <StatsText>Estrategias</StatsText> exclusivas del mercado.
        </>
      ),
    },
  ]