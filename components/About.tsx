import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
  } from '@chakra-ui/react'
  import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp } from 'react-icons/io5'
  import { ReactElement } from 'react'
  
  interface FeatureProps {
    text: string
    iconBg: string
    icon?: ReactElement
  }
  
  const Feature = ({ text, icon, iconBg }: FeatureProps) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    )
  }
  
  export default function About() {
    return (
      <Container maxW={'5xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform={'uppercase'}
              color={'blue.400'}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('blue.50', 'blue.900')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}>
              Nuestra Historia
            </Text>
            <Heading color={'red'}>FM Capital</Heading>
            <Text color={useColorModeValue('gray.900', 'gray.100')} fontSize={'lg'}>
  Somos una comunidad de traders comprometidos con la desmitificación de las técnicas de inversión. Con más de 5 años de experiencia en el mundo del trading e inversión, hemos perfeccionado estrategias que han demostrado ser efectivas en diversos mercados financieros. Nuestro compromiso va más allá de simplemente compartir conocimientos; durante más de un año, hemos enseñado a nuestra comunidad cómo realizar inversiones pasivas y activas, brindando las herramientas y el conocimiento necesario para que nuestros miembros puedan tomar decisiones informadas y alcanzar sus objetivos financieros.
</Text>

            <Stack
              spacing={4}
              divider={
                <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
              }>
              <Feature
                icon={<Icon as={IoAnalyticsSharp} color={'yellow.500'} w={5} h={5} />}
                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                text={'Análisis de Negocios'}
              />
              <Feature
                icon={<Icon as={IoLogoBitcoin} color={'green.500'} w={5} h={5} />}
                iconBg={useColorModeValue('green.100', 'green.900')}
                text={'Planificación Financiera'}
              />
              <Feature
                icon={<Icon as={IoSearchSharp} color={'purple.500'} w={5} h={5} />}
                iconBg={useColorModeValue('purple.100', 'purple.900')}
                text={'Análisis de Mercado'}
              />
            </Stack>
          </Stack>
          <Flex>
            <Image
              rounded={'md'}
              alt={'Imagen representativa'}
              src={
'/com.jpg'
            }
              objectFit={'cover'}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    )
  }
  