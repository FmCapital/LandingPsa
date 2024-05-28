import { Container, Text, Heading, List, ListItem, ListIcon } from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';

export default function Terms() {
  return (
    <Container maxW="container.md" mt={10}>
      <Heading as="h1" size="lg" mb={4}>
        Términos y Condiciones
      </Heading>
      <Text fontSize="lg" mb={6}>
        Los siguientes términos y condiciones rigen el uso de nuestra plataforma como una guía educativa en inversiones.
      </Text>
      <Heading as="h2" size="md" mb={2}>
        1. Propósito de la Plataforma
      </Heading>
      <Text mb={4}>
        Nuestra plataforma tiene como objetivo proporcionar información educativa y orientación sobre inversiones financieras. No somos una plataforma de inversión, y no gestionamos ni administramos fondos de inversión en nombre de nuestros usuarios.
      </Text>
      <Heading as="h2" size="md" mb={2}>
        2. Responsabilidad del Usuario
      </Heading>
      <Text mb={4}>
        Al utilizar nuestra plataforma, el usuario acepta que es responsable de sus propias decisiones de inversión. La información proporcionada en nuestra plataforma no constituye asesoramiento financiero, y los usuarios deben realizar su propia investigación y análisis antes de tomar decisiones de inversión.
      </Text>
      <Heading as="h2" size="md" mb={2}>
        3. Limitación de Responsabilidad
      </Heading>
      <Text mb={4}>
        No nos hacemos responsables de ninguna pérdida financiera o daño que pueda surgir del uso de la información proporcionada en nuestra plataforma. Los usuarios utilizan nuestra plataforma bajo su propio riesgo, y renuncian a cualquier reclamo o demanda contra nosotros por pérdidas financieras.
      </Text>
      <Heading as="h2" size="md" mb={2}>
        4. Actualización de Términos y Condiciones
      </Heading>
      <Text mb={6}>
        Nos reservamos el derecho de actualizar o modificar estos términos y condiciones en cualquier momento. Los usuarios serán notificados de cualquier cambio en los términos y condiciones.
      </Text>
      <Text fontSize="lg" fontWeight="bold" mb={2}>
        ¡Gracias por utilizar nuestros servicios!
      </Text>
    </Container>
  );
}
