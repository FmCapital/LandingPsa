import {
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Image,
  HStack, // Import the Image component from Chakra UI
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import Link from 'next/link'

interface Props {
  children: React.ReactNode
}
const Links = [{title:'Trading',link:'trade'},{title:'Inversiones',link:'investing'},{title:'Acerca',link:'about'},{title:'Fondo',link:'fund'}]

const NavLink = (props: Props) => {
  const { children } = props

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}>
      {children}
    </Box>
  )
}

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          {/* Replace the placeholder text with the Image component */}
          <HStack spacing={8} alignItems={'center'}>
          <Link href={'/'}>
          <Image src="/icon.png" alt="Firm Logo" boxSize="100px" />
          </Link>
          
          
          <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <Link href={link.link}>
                <NavLink   key={link.title}>{link.title}</NavLink>
                </Link>
              ))}
            </HStack>
            </HStack>
          <Flex alignItems={'center'}>
          
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}
