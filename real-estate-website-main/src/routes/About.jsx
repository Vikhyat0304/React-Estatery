import {
  Box,
  Heading,
  Text,
  VStack,
  Image,
  SimpleGrid,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import BgImage from "../assets/images/bg-hero.jpg";
import Team1 from "../assets/images/agents/agent1.png";
import Team2 from "../assets/images/agents/agent2.png";
import Team3 from "../assets/images/agents/agent3.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  const teamMembers = [
    { name: "Patricia", role: "Lead Agent", image: Team1 },
    { name: "Daryl", role: "Sales Head", image: Team2 },
    { name: "Amado", role: "Customer Success", image: Team3 },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Box
      w="100%"
      minH="100vh"
      bgImage={`url(${BgImage})`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      px={{ base: 4, md: 12 }}
      py={16}
      color="white"
      position="relative"
      _before={{
        content: `""`,
        position: "absolute",
        top: 0,
        left: 0,
        w: "100%",
        h: "100%",
        bgGradient: "linear(to-br, blackAlpha.800, blue.900)",
        zIndex: 0,
      }}
    >
      <Box position="relative" zIndex={1}>
        {/* Header Section */}
        <VStack spacing={4} textAlign="center" mb={14}>
          <Heading
            size="2xl"
            bgGradient="linear(to-r, cyan.400, blue.500)"
            bgClip="text"
          >
            About Us
          </Heading>
          <Text fontSize="lg" maxW="3xl" color="gray.200">
            We are committed to helping you find the best properties that suit your lifestyle. Trusted by over 4500+ customers, we're building dreams one brick at a time.
          </Text>
        </VStack>

        {/* Team Section */}
        <Heading
          size="lg"
          mb={6}
          textAlign="center"
          bgGradient="linear(to-r, cyan.300, blue.400)"
          bgClip="text"
        >
          Meet Our Team
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={8} mb={16}>
          {teamMembers.map((member, index) => (
            <VStack
              key={index}
              data-aos="fade-up"
              bg="whiteAlpha.100"
              borderRadius="xl"
              p={6}
              boxShadow="xl"
              backdropFilter="blur(12px)"
              _hover={{ transform: "scale(1.05)", bg: "whiteAlpha.200" }}
              transition="0.3s ease-in-out"
            >
              <Image
                src={member.image}
                boxSize="120px"
                objectFit="cover"
                borderRadius="full"
                border="3px solid #00B5D8"
              />
              <Heading size="md">{member.name}</Heading>
              <Text color="gray.300">{member.role}</Text>
            </VStack>
          ))}
        </SimpleGrid>

        {/* FAQ Section */}
        <Heading
          size="lg"
          mb={6}
          textAlign="center"
          bgGradient="linear(to-r, cyan.300, blue.400)"
          bgClip="text"
        >
          Frequently Asked Questions
        </Heading>
        <Accordion allowToggle mb={20} borderRadius="lg" bg="whiteAlpha.100" p={6}>
          {[
            {
              q: "How can I schedule a property visit?",
              a: "Just contact us via the form below or call the agent listed on the property details.",
            },
            {
              q: "Do you offer mortgage consultation?",
              a: "Yes, we have experts to guide you through your home loan journey.",
            },
          ].map((item, idx) => (
            <AccordionItem key={idx} borderColor="whiteAlpha.300">
              <AccordionButton _expanded={{ bg: "blue.700", color: "white" }}>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  {item.q}
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4} color="gray.200">
                {item.a}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Contact Section */}
        <Heading
          size="lg"
          mb={6}
          textAlign="center"
          bgGradient="linear(to-r, cyan.300, blue.400)"
          bgClip="text"
        >
          Contact Us
        </Heading>
        <Box
          as="form"
          bg="whiteAlpha.100"
          p={8}
          borderRadius="xl"
          maxW="lg"
          mx="auto"
          backdropFilter="blur(8px)"
          boxShadow="2xl"
        >
          <FormControl mb={4}>
            <FormLabel color="gray.300">Name</FormLabel>
            <Input placeholder="Your Name" bg="whiteAlpha.200" _placeholder={{ color: 'gray.400' }} />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel color="gray.300">Email</FormLabel>
            <Input type="email" placeholder="you@example.com" bg="whiteAlpha.200" _placeholder={{ color: 'gray.400' }} />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel color="gray.300">Message</FormLabel>
            <Textarea rows={4} placeholder="Write your message here..." bg="whiteAlpha.200" _placeholder={{ color: 'gray.400' }} />
          </FormControl>
          <Button
            mt={4}
            colorScheme="blue"
            w="full"
            bg="blue.500"
            _hover={{ bg: "blue.600", transform: "scale(1.03)" }}
            transition="0.3s"
          >
            Send Message
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
