import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'

// Características de la plataforma (ejemplos)
const features = [
  {
    id: 1,
    title: 'Aprende y Gana',
    text: 'Accede a cursos de trading e inversión para adquirir habilidades y conocimientos.',
  },
  {
    id: 2,
    title: 'Desafíos de Trading',
    text: 'Participa en desafíos de trading y demuestra tus habilidades para ganar recompensas.',
  },
  {
    id: 3,
    title: 'Certificación de Trader',
    text: 'Obtén certificaciones reconocidas al completar desafíos y alcanzar metas específicas.',
  },
  {
    id: 4,
    title: 'Inversiones Pasivas',
    text: 'Descubre herramientas y estrategias para generar ingresos pasivos a través de inversiones.',
  },
  {
    id: 5,
    title: 'Oportunidades de Inversión',
    text: 'Accede a oportunidades exclusivas de inversión y diversifica tu cartera financiera.',
  },
  {
    id: 6,
    title: 'Asesoramiento Personalizado',
    text: 'Recibe asesoramiento personalizado de expertos financieros y traders experimentados.',
  },
  {
    id: 7,
    title: 'Herramientas Avanzadas',
    text: 'Utiliza herramientas avanzadas de análisis y gráficos para tomar decisiones informadas.',
  },
  {
    id: 8,
    title: 'Bonificaciones por Desempeño',
    text: 'Gana bonificaciones adicionales al lograr metas y resultados destacados en tus inversiones.',
  },
];

export default function GridListWithHeading() {
  return (
    <>
    
    <Box p={7} bg={useColorModeValue('gray.100', 'gray.700')}>
      {/* Sección de encabezado */}
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={'3xl'}>Descubre las Características de Nuestra Plataforma</Heading>
        <Text color={'gray.600'} fontSize={'xl'}>
          {/* Descripción del encabezado */}
          Aprende, invierte y gana con nuestras herramientas y desafíos exclusivos.
        </Text>
      </Stack>

      {/* Sección de características con íconos de verificación */}
      <Container maxW={'6xl'} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align={'top'}>
              {/* Ícono de verificación */}
              <Box color={'green.400'} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              {/* Contenido de la característica */}
              <VStack align={'start'}>
                <Text fontWeight={600}>{feature.title}</Text>
                <Text color={'gray.600'}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
    </>
  );
}
