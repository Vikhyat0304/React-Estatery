// src/routes/Features.jsx
import {
  Box,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Icon,
  Button,
  Image,
} from "@chakra-ui/react";
import { FaHome, FaHandshake, FaMapMarkedAlt, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import BgImage from "../assets/images/bg-hero.jpg";
import FeatureImg from "../assets/images/apartments/a6lg.png";

const features = [
  {
    icon: FaHome,
    title: "Premium Properties",
    desc: "Top-rated and luxurious homes across all budgets.",
  },
  {
    icon: FaHandshake,
    title: "Trusted by Thousands",
    desc: "Our satisfied clients are our biggest promoters.",
  },
  {
    icon: FaMapMarkedAlt,
    title: "Smart Location Search",
    desc: "Filter homes based on zones, schools, and work proximity.",
  },
  {
    icon: FaLock,
    title: "Secure Deals",
    desc: "We ensure verified listings and legal clarity for all deals.",
  },
];

const Features = () => {
  const navigate = useNavigate();

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
      px={{ base: 4, md: 12 }}
      py={16}
      position="relative"
      _before={{
        content: `""`,
        position: "absolute",
        top: 0,
        left: 0,
        h: "100%",
        w: "100%",
        bgGradient: "linear(to-br, blackAlpha.800, blue.900)",
        zIndex: 0,
      }}
    >
      <Box position="relative" zIndex={1}>
        {/* Hero */}
        <VStack spacing={6} textAlign="center" mb={14}>
          <Heading
            size="2xl"
            bgGradient="linear(to-r, cyan.400, blue.500)"
            bgClip="text"
            data-aos="fade-down"
          >
            Our Standout Features
          </Heading>
          <Text maxW="3xl" color="gray.200" data-aos="fade-up">
            We go beyond just listings. Explore features that redefine real estate experiences.
          </Text>
        </VStack>

        {/* Feature Cards */}
        <SimpleGrid columns={[1, 2, 2, 4]} spacing={10} mb={20}>
          {features.map((f, idx) => (
            <VStack
              key={idx}
              spacing={4}
              bg="whiteAlpha.100"
              p={6}
              borderRadius="xl"
              boxShadow="xl"
              backdropFilter="blur(10px)"
              data-aos="fade-up"
              _hover={{ transform: "translateY(-5px)", bg: "whiteAlpha.200" }}
              transition="all 0.3s ease-in-out"
            >
              <Icon as={f.icon} w={10} h={10} color="cyan.300" />
              <Heading size="md">{f.title}</Heading>
              <Text textAlign="center" color="gray.300">
                {f.desc}
              </Text>
            </VStack>
          ))}
        </SimpleGrid>

        {/* Image Showcase without AOS */}
        <Box mb={20} textAlign="center">
          <Image
            src={FeatureImg}
            alt="Feature"
            mx="auto"
            borderRadius="lg"
            boxShadow="2xl"
            maxW="600px"
            objectFit="cover"
            transition="all 0.3s"
            _hover={{ transform: "scale(1.03)" }}
          />
        </Box>

       {/* CTA */}
        <VStack spacing={4} textAlign="center">
          <Heading
            size="lg"
            bgGradient="linear(to-r, cyan.400, blue.500)"
            bgClip="text"
          >
            Ready to Explore Your Dream Property?
          </Heading>
          <Button
            colorScheme="blue"
            size="lg"
            bg="blue.500"
            _hover={{ bg: "blue.600", transform: "scale(1.05)" }}
            transition="0.3s"
            onClick={() => navigate('/')}
          >
            Browse Listings
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default Features;
