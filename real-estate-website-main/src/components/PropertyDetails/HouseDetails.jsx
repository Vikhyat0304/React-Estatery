import {
  Stack,
  VStack,
  Heading,
  Text,
  Box,
  HStack,
  Image,
  Badge,
} from "@chakra-ui/react";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import { HouseContext } from "../../context/HouseContext";
import Form from "./Form";

const HouseDetails = () => {
  const { propertyId } = useParams();
  const { houses } = useContext(HouseContext);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const searchedHouse = houses.find((house) => house.id == propertyId);

  if (!searchedHouse) {
    return (
      <Box py="20" px="6" textAlign="center">
        <Heading size="md">❌ Property not found</Heading>
        <Text mt="2" color="gray.400">Please try again with a valid listing.</Text>
      </Box>
    );
  }

  return (
    <Box
      px={{ base: 4, md: 8 }}
      py={10}
      bgGradient="linear(to-br, #0f172a, #1e293b)"
      borderRadius="2xl"
      color="gray.100"
      boxShadow="lg"
      maxW="100%"
      data-aos="fade-up"
    >
      {/* Header Info */}
      <Stack
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align={{ md: "center" }}
        spacing={6}
        mb={10}
      >
        <Box data-aos="fade-right">
          <Heading fontSize={{ base: "xl", md: "2xl" }}>
            {searchedHouse.name}
          </Heading>
          <Text fontSize="sm" color="gray.400">
            {searchedHouse.address}
          </Text>
        </Box>

        <HStack spacing="3" data-aos="zoom-in">
          <Badge px="3" py="1" colorScheme="green" borderRadius="md" fontSize="sm">
            {searchedHouse.type}
          </Badge>
          <Badge px="3" py="1" colorScheme="purple" borderRadius="md" fontSize="sm">
            {searchedHouse.country}
          </Badge>
        </HStack>

        <Text fontSize="xl" fontWeight="bold" color="cyan.300" data-aos="fade-left">
          ₹ {searchedHouse.price.toLocaleString("en-IN")}
        </Text>
      </Stack>

      {/* Main Section */}
      <Stack
        direction={{ base: "column", lg: "row" }}
        spacing={10}
        align="flex-start"
      >
        {/* Left */}
        <VStack
          align="start"
          spacing={6}
          w="100%"
          maxW="750px"
          borderRadius="xl"
          bg="rgba(255,255,255,0.02)"
          p="5"
          boxShadow="xl"
          backdropFilter="blur(6px)"
          data-aos="fade-up"
        >
          <Image
            src={searchedHouse.imageLg}
            alt="house"
            borderRadius="lg"
            w="100%"
            objectFit="cover"
            boxShadow="lg"
            transition="0.4s ease"
            _hover={{
              transform: "scale(1.02)",
              boxShadow: "0 12px 30px rgba(0,0,0,0.5)",
            }}
          />

          {/* Features */}
          <HStack
            spacing={{ base: 5, md: 10 }}
            w="100%"
            justify="space-between"
            color="gray.300"
            fontSize="sm"
          >
            <HStack spacing={2}>
              <BiBed size={20} />
              <Text>{searchedHouse.bedrooms} Beds</Text>
            </HStack>
            <HStack spacing={2}>
              <BiBath size={20} />
              <Text>{searchedHouse.bathrooms} Baths</Text>
            </HStack>
            <HStack spacing={2}>
              <BiArea size={20} />
              <Text>{searchedHouse.surface}</Text>
            </HStack>
          </HStack>

          <Text fontSize="15px" color="gray.400" lineHeight="1.8">
            {searchedHouse.description}
          </Text>
        </VStack>

        {/* Form */}
        <Box
          w={{ base: "100%", lg: "400px" }}
          borderRadius="lg"
          bg="rgba(255,255,255,0.03)"
          boxShadow="xl"
          backdropFilter="blur(6px)"
          p="6"
          data-aos="fade-left"
        >
          <Form searchedHouse={searchedHouse} />
        </Box>
      </Stack>
    </Box>
  );
};

export default HouseDetails;
