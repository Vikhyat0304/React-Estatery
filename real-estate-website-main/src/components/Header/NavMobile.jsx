import { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  VStack,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Button,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Text,
} from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
<Link to="/about">About</Link>



const MotionButton = motion(Button);

const NavMobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const drawerBg = useColorModeValue('rgba(255, 255, 255, 0.92)', 'rgba(26, 32, 44, 0.92)');
  const drawerBorder = useColorModeValue('gray.200', 'whiteAlpha.200');
  const textColor = useColorModeValue('gray.800', 'gray.100');
  const hoverColor = useColorModeValue('cyan.600', 'cyan.300');

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Features', path: '/features' },
    { label: 'About Us', path: '/about' },
  ];

  return (
    <>
      <IconButton
        variant="ghost"
        icon={<FiMenu fontSize="1.5rem" />}
        aria-label="Open Menu"
        onClick={onOpen}
        ref={btnRef}
        _hover={{ bg: 'gray.100', color: hoverColor }}
        color={textColor}
      />

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent
          bg={drawerBg}
          backdropFilter="blur(20px)"
          borderLeft={`1px solid ${drawerBorder}`}
          transition="all 0.3s ease-in-out"
          boxShadow="dark-lg"
        >
          <DrawerCloseButton mt="2" />

          <DrawerHeader
            textAlign="center"
            fontWeight="extrabold"
            fontSize="xl"
            color={hoverColor}
            borderBottom={`1px solid ${drawerBorder}`}
          >
            Menu
          </DrawerHeader>

          <DrawerBody px="10" mt="6">
            <VStack as="nav" spacing="6" align="start">
              {navLinks.map((item, index) => (
                <MotionButton
                  as={RouterLink}
                  to={item.path}
                  key={index}
                  variant="ghost"
                  fontSize="lg"
                  color={textColor}
                  whileHover={{ x: 6, scale: 1.04 }}
                  transition={{ duration: 0.25 }}
                  w="full"
                  justifyContent="flex-start"
                  onClick={onClose}
                >
                  {item.label}
                </MotionButton>
              ))}

              <MotionButton
                size="md"
                variant="solid"
                colorScheme="cyan"
                w="full"
                whileHover={{ y: -2 }}
                boxShadow="md"
              >
                Contact
              </MotionButton>

              <MotionButton
                size="md"
                variant="outline"
                colorScheme="cyan"
                w="full"
                whileHover={{ scale: 1.03 }}
              >
                Sign up
              </MotionButton>
            </VStack>
          </DrawerBody>

          <DrawerFooter justifyContent="center" borderTop={`1px solid ${drawerBorder}`}>
            <Text fontSize="xs" color={textColor} opacity="0.6">
              © 2025 Estatery. All rights reserved.
            </Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavMobile;
