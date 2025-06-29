import {
  Box,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import BgImage from "../assets/images/bg-hero.jpg";

const SignUp = () => {
  const toast = useToast();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Signed up!",
      description: "Welcome aboard 🚀",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "bottom-right",
    });
  };

  return (
    <Box
      minH="100vh"
      bgImage={`url(${BgImage})`}
      bgSize="cover"
      bgPosition="center"
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={4}
      py={16}
      _before={{
        content: `""`,
        position: "absolute",
        top: 0,
        left: 0,
        w: "100%",
        h: "100%",
        bgGradient: "linear(to-br, blackAlpha.700, teal.900)",
        zIndex: 0,
      }}
    >
      <Box
        position="relative"
        zIndex={1}
        bg="whiteAlpha.100"
        p={10}
        borderRadius="2xl"
        backdropFilter="blur(20px)"
        boxShadow="2xl"
        maxW="md"
        w="full"
        data-aos="zoom-in"
        _hover={{
          transform: "scale(1.02)",
          transition: "all 0.4s ease-in-out",
          boxShadow: "0 0 30px rgba(0,255,255,0.2)",
        }}
      >
        <VStack spacing={6} as="form" onSubmit={handleSubmit}>
          <Heading
            size="xl"
            bgGradient="linear(to-r, teal.300, blue.400)"
            bgClip="text"
            textAlign="center"
          >
            Create an Account
          </Heading>

          <Text fontSize="sm" color="gray.300" textAlign="center">
            Join thousands of happy homeowners today.
          </Text>

          <FormControl isRequired>
            <FormLabel color="gray.300">Full Name</FormLabel>
            <Input
              placeholder="John Doe"
              bg="whiteAlpha.200"
              _placeholder={{ color: "gray.400" }}
              focusBorderColor="teal.400"
              _hover={{ bg: "whiteAlpha.300", transform: "scale(1.02)" }}
              transition="all 0.3s"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel color="gray.300">Email Address</FormLabel>
            <Input
              type="email"
              placeholder="you@example.com"
              bg="whiteAlpha.200"
              _placeholder={{ color: "gray.400" }}
              focusBorderColor="teal.400"
              _hover={{ bg: "whiteAlpha.300", transform: "scale(1.02)" }}
              transition="all 0.3s"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel color="gray.300">Password</FormLabel>
            <Input
              type="password"
              placeholder="********"
              bg="whiteAlpha.200"
              _placeholder={{ color: "gray.400" }}
              focusBorderColor="teal.400"
              _hover={{ bg: "whiteAlpha.300", transform: "scale(1.02)" }}
              transition="all 0.3s"
            />
          </FormControl>

          <Button
            type="submit"
            colorScheme="teal"
            size="lg"
            w="full"
            mt={2}
            bg="teal.400"
            _hover={{
              bg: "teal.500",
              transform: "scale(1.05)",
              boxShadow: "0 0 15px teal",
            }}
            transition="all 0.3s"
          >
            Sign Up
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default SignUp;
