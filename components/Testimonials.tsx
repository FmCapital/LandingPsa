import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react'

interface Props {
  children: React.ReactNode
}

const Testimonial = (props: Props) => {
  const { children } = props

  return <Box>{children}</Box>
}

const TestimonialContent = (props: Props) => {
  const { children } = props

  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  )
}

const TestimonialHeading = (props: Props) => {
  const { children } = props

  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  )
}

const TestimonialText = (props: Props) => {
  const { children } = props

  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  )
}

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string
  name: string
  title: string
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  )
}

export default function WithSpeechBubbles() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>Nuestros Clientes Hablan</Heading>
          <Text>Hemos estado trabajando con clientes de todo el mundo</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Colaboración Eficiente</TestimonialHeading>
              <TestimonialText>
                "Estoy muy satisfecho con el asesoramiento financiero personalizado. Ha sido
                crucial para mi éxito como inversionista. ¡Gracias por su eficiente
                colaboración!"
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                '/asadafs.jpg'
              }
              name={'Juan Pérez'}
              title={'Inversionista en ABC Corporation'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Diseño Intuitivo</TestimonialHeading>
              <TestimonialText>
                "La plataforma de inversiones tiene un diseño intuitivo que facilita la toma de
                decisiones. Estoy impresionado por su facilidad de uso y eficacia."
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
'/women.jpg'              }
              name={'Ana García'}
              title={'Directora Financiera en XYZ Inversiones'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Servicio Asombroso</TestimonialHeading>
              <TestimonialText>
                "El servicio que he recibido ha sido asombroso. Siempre están disponibles para
                responder preguntas y proporcionar orientación. ¡Lo recomiendo ampliamente!"
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'chicharron.jpg'
              }
              name={'Miguel Hernández'}
              title={'Inversionista Independiente'}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  )
}
