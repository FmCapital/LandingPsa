import { Box, Container, Text, Heading, SimpleGrid, Button, useColorModeValue, Flex } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

export default function PassiveInvestingPage() {
  const bgColor = useColorModeValue('gray.200', 'gray.800');
  const textColor = useColorModeValue('gray.700', 'gray.200');
  const titleColor = useColorModeValue('gray.800', 'gray.100');

  return (
    <Box bg={bgColor} minHeight="100vh">
      <Container maxW={'7xl'} py={20}>
        <SimpleGrid columns={{ base: 1, md: 1 }} spacing={10}>
          <Box color={textColor}>
            <Text fontFamily={'heading'} fontWeight={700} textTransform={'uppercase'} mb={3} fontSize={'xl'} color={'red'}>
              Inversiones Pasivas
            </Text>
            <Heading color={titleColor} mb={5} fontSize={{ base: '3xl', md: '5xl' }}>
              Descubre el paquete adecuado para ti
            </Heading>
            <Text fontSize={'xl'} color={textColor} mb={8}>
              ¿Estás buscando una forma de hacer crecer tu dinero de manera segura y sin dedicar horas frente a una pantalla? Nuestros planes de inversión pasiva te ofrecen la oportunidad de invertir en instrumentos financieros sólidos como bonos gubernamentales y acciones de la bolsa de valores, todo respaldado por el asesoramiento de expertos financieros.
            </Text>
            <Text fontSize={'xl'} color={textColor} mb={8}>
              Este curso exclusivo está diseñado para inversores de alta rentabilidad pasiva que buscan optimizar sus inversiones y maximizar su patrimonio a largo plazo.
            </Text>
            <SimpleGrid columns={1} spacing={5}>
              {investmentOpportunities.map((opportunity) => (
                <Box key={opportunity.title}>
                  <Text fontFamily={'heading'} fontSize={'3xl'} color={titleColor} mb={3}>
                    {opportunity.title}
                  </Text>
                  <Text fontSize={'xl'} color={textColor} mb={5}>
                    {opportunity.description}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>

            <Button colorScheme="blue" size="lg" mt={8} rightIcon={<ArrowForwardIcon />} onClick={() => handleLearnMore()}>
              ¡Aprende más!
            </Button>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

const investmentOpportunities = [
  {
    title: 'Oportunidades de Inversión',
    description: 'Accede a oportunidades exclusivas de inversión y diversifica tu cartera financiera con instrumentos sólidos como bonos gubernamentales y acciones de empresas líderes en la bolsa de valores.',
  },
  {
    title: 'Asesoramiento Personalizado',
    description: 'Recibe asesoramiento personalizado de expertos financieros y traders experimentados, quienes te guiarán en la construcción de una cartera de inversiones adecuada a tus objetivos y tolerancia al riesgo.',
  },
  {
    title: 'Herramientas Avanzadas',
    description: 'Utiliza herramientas avanzadas de análisis y gráficos para tomar decisiones informadas sobre tus inversiones, maximizando así tus oportunidades de rendimiento y minimizando los riesgos.',
  },
];

const handleLearnMore = () => {
  // Aquí puedes agregar la lógica para redirigir al usuario a la página de aprendizaje o realizar alguna acción relacionada con la misma.
  console.log('¡Aprende más sobre inversiones pasivas!');
};
