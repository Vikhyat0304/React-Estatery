import {
  VStack,
  HStack,
  Text,
  Heading,
  Stack,
  Box,
  Image,
  Button,
} from "@chakra-ui/react";
import { BiPlus } from "react-icons/bi";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { bannerData } from "../data";

// Background Image
const BgImage = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80';

import Apartment1Lg from "../assets/images/apartments/a1lg.png";
import Apartment6Lg from "../assets/images/apartments/a6lg.png";

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Box
      w="100%"
      minH="100vh"
      position="relative"
      bgImage={`url('${BgImage}')`}
      bgSize="cover"
      bgPosition="center"
      _after={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        w: "100%",
        h: "100%",
        bg: "blackAlpha.700",
        zIndex: 1,
      }}
    >
      <Stack
        position="relative"
        zIndex={2}
        direction={{ base: "column", lg: "row" }}
        w="100%"
        minH="100vh"
        px={{ base: 6, md: 20 }}
        py={12}
        align="center"
        justify="space-between"
        spacing={10}
      >
        {/* LEFT Section */}
        <VStack
          align="flex-start"
          data-aos="fade-right"
          spacing={6}
          p={8}
          borderRadius="2xl"
          bg="whiteAlpha.100"
          backdropFilter="blur(14px)"
          boxShadow="2xl"
          maxW="2xl"
        >
          <Heading
            fontSize={{ base: "3xl", md: "5xl" }}
            color="pink.300"
            fontWeight="extrabold"
            lineHeight="1.2"
          >
            Discover Your Dream Home Today
          </Heading>

          <Text fontSize="lg" color="gray.200" maxW="lg">
            We help you find the most beautiful places to live. Trusted by 4500+ happy customers.
          </Text>

          <Button
            size="lg"
            colorScheme="pink"
            bgGradient="linear(to-r, pink.400, pink.500)"
            _hover={{ bg: "pink.600", transform: "scale(1.05)" }}
            transition="all 0.3s"
            shadow="lg"
          >
            Explore Listings
          </Button>

          <HStack spacing={4} pt={6} wrap="wrap">
            {bannerData.map((item, index) => (
              <VStack
                key={index}
                bg="whiteAlpha.200"
                border="1px solid"
                borderColor="whiteAlpha.300"
                p={4}
                borderRadius="lg"
                align="left"
                _hover={{ bg: "whiteAlpha.300", transform: "scale(1.05)" }}
                transition="all 0.3s ease"
              >
                <HStack align="center">
                  <Text fontSize="2xl" fontWeight="bold" color="white">
                    {Object.keys(item)}
                  </Text>
                  <BiPlus size={20} color="#ED64A6" />
                </HStack>
                <Text fontSize="sm" color="gray.100">
                  {Object.values(item)}
                </Text>
              </VStack>
            ))}
          </HStack>
        </VStack>

        {/* RIGHT Section (Images) */}
        <VStack
          data-aos="fade-left"
          spacing={6}
          align="center"
          justify="center"
          h="100%"
          flex="1"
        >
          <Box
            w={{ base: "250px", md: "280px", xl: "300px" }}
            h="auto"
            overflow="hidden"
            borderRadius="2xl"
            boxShadow="2xl"
            transition="0.3s"
            _hover={{ transform: "scale(1.05)" }}
          >
            <Image src={Apartment1Lg} alt="Apartment 1" objectFit="cover" w="100%" />
          </Box>

          <Box
            w={{ base: "250px", md: "280px", xl: "300px" }}
            h="auto"
            overflow="hidden"
            borderRadius="2xl"
            boxShadow="2xl"
            transition="0.3s"
            _hover={{ transform: "scale(1.05)" }}
          >
            <Image src={Apartment6Lg} alt="Apartment 2" objectFit="cover" w="100%" />
          </Box>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Banner;
