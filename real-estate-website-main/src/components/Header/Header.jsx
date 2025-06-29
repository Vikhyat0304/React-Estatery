import {
  Flex,
  Heading,
  Button,
  HStack,
  chakra,
  ButtonGroup,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import NavMobile from './NavMobile';

const Header = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.300');
  const hoverColor = useColorModeValue('cyan.600', 'cyan.300');
  const logoColor = useColorModeValue('cyan.700', 'cyan.400');

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Features', path: '/features' },
    { label: 'About Us', path: '/about' },
  ];

  return (
    <chakra.header
      id="header"
      px={{ base: 4, md: 8 }}
      py={4}
      boxShadow="md"
      bg={useColorModeValue('#ffffffcc', '#1A202Ccc')}
      backdropFilter="saturate(180%) blur(10px)"
      borderBottom={`1px solid ${borderColor}`}
      position="sticky"
      top="0"
      zIndex="100"
    >
      <Flex align="center" justify="space-between">
        {/* Logo */}
        <RouterLink to="/">
          <Heading
            fontSize={{ base: '2xl', md: '3xl' }}
            color={logoColor}
            fontWeight="bold"
            letterSpacing="tight"
          >
            Estatery<span style={{ color: hoverColor }}>.</span>
          </Heading>
        </RouterLink>

        {/* Desktop Navigation */}
        {isDesktop ? (
          <Flex align="center" gap={6}>
            <ButtonGroup as="nav" variant="ghost" spacing={4}>
              {navItems.map((item) => (
                <Button
                  as={RouterLink}
                  to={item.path}
                  key={item.label}
                  fontSize="md"
                  colorScheme="gray"
                  _hover={{ color: hoverColor, transform: 'scale(1.05)' }}
                  transition="all 0.25s ease"
                >
                  {item.label}
                </Button>
              ))}
            </ButtonGroup>

            {/* Contact and Sign Up */}
            <HStack spacing={3}>
              <Button
                as={RouterLink}
                to="/contact"
                size="sm"
                variant="solid"
                colorScheme="cyan"
                _hover={{ transform: 'translateY(-1px)', boxShadow: 'lg' }}
              >
                Contact
              </Button>
              <Button
                as={RouterLink}
                to="/signup"
                size="sm"
                variant="outline"
                colorScheme="cyan"
                _hover={{ bg: 'cyan.50' }}
              >
                Sign up
              </Button>
            </HStack>
          </Flex>
        ) : (
          <NavMobile />
        )}
      </Flex>
    </chakra.header>
  );
};

export default Header;
