import { ReactNode } from 'react';
import { Stack, Container, Box, Flex, Text, Heading, SimpleGrid, Button, useColorModeValue, Image } from '@chakra-ui/react';

export default function TradingPlansPage() {
  const bgColor = useColorModeValue('gray.200', 'gray.800');
  const textColor = useColorModeValue('gray.700', 'gray.200');
  const titleColor = useColorModeValue('gray.800', 'gray.100');

  return (
    <Box bg={bgColor} position={'relative'} minHeight="100vh">
      <Container maxW={'7xl'} zIndex={10} position={'relative'} py={20}>
        <Stack direction={{ base: 'column', lg: 'row' }} spacing={10}>
          <Stack
            flex={1}
            color={textColor}
            justify={{ lg: 'center' }}
          >
            <Box>
              <Text
                fontFamily={'heading'}
                fontWeight={700}
                textTransform={'uppercase'}
                mb={3}
                fontSize={'xl'}
                color={'red'}>
                Planes de Trading
              </Text>
              <Heading color={titleColor} mb={5} fontSize={{ base: '3xl', md: '5xl' }}>
                Descubre el paquete adecuado para ti
              </Heading>
              <Text fontSize={'xl'} color={textColor}>
                Nuestros planes de trading están diseñados para ayudarte a alcanzar tus metas financieras y convertirte en un trader exitoso.
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mt={10}>
              {tradingPlans.map((plan) => (
                <Box key={plan.title}>
                  <Text fontFamily={'heading'} fontSize={'3xl'} color={titleColor} mb={3}>
                    {plan.title}
                  </Text>
                  <Text fontSize={'xl'} color={textColor}>
                    {plan.description}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
          
          <Image
  src="course.jpg"
  alt="Description"
  boxSize="400px"
  objectFit="cover"
  mt={50}
  boxShadow="lg" // Add shadow to the image
  borderRadius="xl" // Apply rounded borders to the image
/>
        
        </Stack>
        <Box textAlign="center" mt={8}>
          <Button colorScheme="blue" size="lg" onClick={() => handlePurchase()}>
            ¡Comienza ahora!
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

const tradingPlans = [
  {
    title: 'Curso de Trading',
    description: 'Acceso a una amplia variedad de cursos diseñados para principiantes y traders avanzados. Aprende estrategias de trading, análisis técnico, y gestión de riesgos.',
  },
  {
    title: 'Challenge de Trading',
    description: 'Alcanza el objetivo y respeta las reglas de gestión de riesgos para superar el desafío. No hay límites de tiempo ni restricciones: opera con fondos reales inmediatamente después de pasar el desafío.',
  },
  {
    title: 'Asesorías Personalizadas',
    description: 'Recibe asesoría personalizada de nuestros expertos traders. Analiza tus operaciones, recibe retroalimentación y mejora tu rendimiento como trader.',
  },
];

const handlePurchase = () => {
  // Aquí puedes agregar la lógica para redirigir al usuario a la página de compra o realizar alguna acción relacionada con la compra.
  console.log('¡Compra realizada!');
};