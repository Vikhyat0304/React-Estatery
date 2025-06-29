import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Icon,
  Image,
  useToast,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

import AvatarImage from "../assets/images/agents/agent2.png";

const Contact = () => {
  const toast = useToast();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    toast({
      title: "Message Sent",
      description: "We’ll get back to you shortly!",
      status: "success",
      duration: 4000,
      isClosable: true,
      position: "bottom-right",
    });
  };

  return (
    <Box
      minH="100vh"
      px={{ base: 4, md: 12 }}
      py={16}
      position="relative"
      bgGradient="linear(to-br, #0f2027, #203a43, #2c5364)"
      color="white"
      overflow="hidden"
      _before={{
        content: `""`,
        position: "absolute",
        top: "-20%",
        left: "-20%",
        w: "160%",
        h: "160%",
        bgGradient: "radial(at top left, rgba(0,255,255,0.12), transparent 80%)",
        zIndex: 0,
      }}
    >
      <Box position="relative" zIndex={1}>
        {/* Title */}
        <VStack spacing={4} textAlign="center" mb={14} data-aos="fade-down">
          <Heading
            size="2xl"
            bgGradient="linear(to-r, teal.300, cyan.400)"
            bgClip="text"
          >
            Contact Us
          </Heading>
          <Text fontSize="lg" color="gray.300" maxW="2xl">
            Got a question, idea, or collaboration in mind? Drop us a message!
          </Text>
        </VStack>

        <HStack
          spacing={10}
          flexDir={{ base: "column", md: "row" }}
          align="start"
          justify="center"
        >
          {/* Avatar Contact Card */}
          <VStack
            spacing={6}
            align="center"
            bg="whiteAlpha.100"
            p={8}
            borderRadius="xl"
            backdropFilter="blur(10px)"
            boxShadow="xl"
            w={{ base: "100%", md: "35%" }}
            data-aos="fade-right"
            _hover={{
              transform: "scale(1.02)",
              boxShadow: "0 0 30px rgba(0,255,255,0.2)",
              transition: "0.3s ease-in-out",
            }}
            transition="0.3s ease-in-out"
          >
            <Image
              src={AvatarImage}
              alt="Agent"
              boxSize="100px"
              borderRadius="full"
              border="3px solid cyan"
            />
            <Heading size="md" color="teal.300">
                Sheikh Chilli Chaturvedi
            </Heading>
            <Text color="gray.300" fontSize="sm">
              Senior Support Agent
            </Text>
            <HStack spacing={3}>
              <Icon as={FaPhoneAlt} color="teal.300" />
              <Text color="gray.200">+91 9876543210</Text>
            </HStack>
            <HStack spacing={3}>
              <Icon as={FaEnvelope} color="teal.300" />
              <Text color="gray.200">help@estatery.com</Text>
            </HStack>
            <HStack spacing={3}>
              <Icon as={FaMapMarkerAlt} color="teal.300" />
              <Text color="gray.200">Gwalior, MP</Text>
            </HStack>
          </VStack>

          {/* Form Section */}
          <Box
            bg="whiteAlpha.100"
            p={8}
            borderRadius="xl"
            w={{ base: "100%", md: "55%" }}
            backdropFilter="blur(10px)"
            boxShadow="2xl"
            data-aos="fade-left"
            _hover={{
              transform: "scale(1.01)",
              boxShadow: "0 0 25px rgba(0,255,255,0.15)",
              transition: "0.3s ease-in-out",
            }}
            transition="0.3s ease-in-out"
          >
            <form onSubmit={handleSubmit}>
              <FormControl mb={4} isRequired>
                <FormLabel color="gray.300">Name</FormLabel>
                <Input
                  placeholder="Your Name"
                  bg="whiteAlpha.200"
                  _placeholder={{ color: "gray.400" }}
                  focusBorderColor="teal.400"
                  transition="all 0.3s"
                  _hover={{
                    borderColor: "teal.300",
                    bg: "whiteAlpha.300",
                  }}
                />
              </FormControl>
              <FormControl mb={4} isRequired>
                <FormLabel color="gray.300">Email</FormLabel>
                <Input
                  type="email"
                  placeholder="you@example.com"
                  bg="whiteAlpha.200"
                  _placeholder={{ color: "gray.400" }}
                  focusBorderColor="teal.400"
                  transition="all 0.3s"
                  _hover={{
                    borderColor: "teal.300",
                    bg: "whiteAlpha.300",
                  }}
                />
              </FormControl>
              <FormControl mb={4} isRequired>
                <FormLabel color="gray.300">Message</FormLabel>
                <Textarea
                  rows={5}
                  placeholder="Write your message..."
                  bg="whiteAlpha.200"
                  _placeholder={{ color: "gray.400" }}
                  focusBorderColor="teal.400"
                  transition="all 0.3s"
                  _hover={{
                    borderColor: "teal.300",
                    bg: "whiteAlpha.300",
                  }}
                />
              </FormControl>
              <Button
                mt={4}
                w="full"
                bg="teal.400"
                color="white"
                _hover={{
                  bg: "teal.500",
                  boxShadow: "0 0 16px rgba(0,255,255,0.4)",
                  transform: "scale(1.05)",
                }}
                transition="0.3s"
                type="submit"
              >
                Send Message
              </Button>
            </form>
          </Box>
        </HStack>
      </Box>
    </Box>
  );
};

export default Contact;
