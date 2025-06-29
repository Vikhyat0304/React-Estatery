import {
  VStack,
  Divider,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  Flex,
} from "@chakra-ui/react";
import { BiBed, BiBath, BiArea } from "react-icons/bi";

const HouseItem = ({ house }) => {
  const cardBg = "rgba(17, 24, 39, 0.75)"; // dark glass
  const borderColor = "rgba(255, 255, 255, 0.08)";
  const priceColor = "cyan.300";
  const textColor = "gray.100";
  const addressColor = "gray.400";

  return (
    <Flex justify="center" align="center" p={{ base: 2, md: 4 }}>
      <Stack
        width={{ base: "90%", sm: "320px" }}
        backdropFilter="blur(16px)"
        bg={cardBg}
        borderRadius="2xl"
        border="1px solid"
        borderColor={borderColor}
        boxShadow="0 8px 30px rgba(0, 0, 0, 0.6)"
        overflow="hidden"
        transition="all 0.35s ease-in-out"
        _hover={{
          transform: "translateY(-5px) scale(1.03)",
          boxShadow: "0 12px 45px rgba(0,0,0,0.75)",
        }}
        role="group"
      >
        {/* Image Section */}
        <Image
          src={house.imageLg}
          h="180px"
          w="full"
          objectFit="cover"
          filter="brightness(0.95)"
          transition="0.3s ease"
          _groupHover={{ filter: "brightness(1.05)" }}
        />

        {/* Info Section */}
        <VStack px="5" py="4" align="start" spacing="2">
          {/* Price */}
          <Text fontWeight="bold" fontSize="lg" color={priceColor}>
            ₹{house.price}
            <Text
              as="span"
              fontSize="sm"
              fontWeight="normal"
              color={addressColor}
            >
              /month
            </Text>
          </Text>

          {/* Title */}
          <Heading fontSize="lg" color={textColor} noOfLines={1}>
            {house.name}
          </Heading>

          {/* Address */}
          <Text fontSize="sm" color={addressColor} noOfLines={1}>
            {house.address}
          </Text>

          <Divider borderColor="gray.600" my={2} />

          {/* Specs */}
          <HStack spacing="6" color="gray.300" fontSize="sm">
            <HStack spacing={1}>
              <BiBed size={18} />
              <Text>{house.bedrooms}</Text>
            </HStack>
            <HStack spacing={1}>
              <BiBath size={18} />
              <Text>{house.bathrooms}</Text>
            </HStack>
            <HStack spacing={1}>
              <BiArea size={18} />
              <Text>{house.surface}</Text>
            </HStack>
          </HStack>
        </VStack>
      </Stack>
    </Flex>
  );
};

export default HouseItem;
