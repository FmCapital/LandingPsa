import {
    Box,
    chakra,
    Flex,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
  } from '@chakra-ui/react'
  import { ReactNode } from 'react'
  import { BsPerson } from 'react-icons/bs'
  import { FiServer } from 'react-icons/fi'
  import { GoLocation } from 'react-icons/go'
  
  interface Props {
    title: string
    stat: string
    icon: ReactNode
  }
  
  function StatsCard(props: Props) {
    const { title, stat, icon } = props
    return (
      <Stat
        px={{ base: 2, md: 4 }}
        py={'5'}
        shadow={'xl'}
        border={'1px solid'}
        borderColor={useColorModeValue('gray.800', 'gray.500')}
        rounded={'lg'}>
        <Flex justifyContent={'space-between'}>
          <Box pl={{ base: 2, md: 4 }}>
            <StatLabel fontWeight={'medium'} isTruncated>
              {title}
            </StatLabel>
            <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
              {stat}
            </StatNumber>
          </Box>
          <Box
            my={'auto'}
            color={useColorModeValue('gray.800', 'gray.200')}
            alignContent={'center'}>
            {icon}
          </Box>
        </Flex>
      </Stat>
    )
  }
  
  export default function Users() {
    return (
      <Box maxW="7xl" mx={'auto'} mt={5} mb={100}   px={{ base: 2, sm: 12, md: 17 }}>
        <chakra.h1 textAlign={'center'} fontSize={'4xl'} py={10} fontWeight={'bold'}>
          Nuestra comunidad está creciendo, ¡tú también podrías hacerlo!
        </chakra.h1>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard title={'Usuarios'} stat={'28'} icon={<BsPerson size={'3em'} />} />
          <StatsCard title={'Traders Activos'} stat={'5'} icon={<FiServer size={'3em'} />} />
          <StatsCard title={'Alumnos'} stat={'50+'} icon={<GoLocation size={'3em'} />} />
        </SimpleGrid>
      </Box>
    )
  }
  