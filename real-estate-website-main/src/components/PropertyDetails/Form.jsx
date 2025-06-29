import {
  Textarea,
  Image,
  VStack,
  HStack,
  Box,
  Text,
  Input,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';

const Form = ({ searchedHouse }) => {
  const cardBg = 'linear-gradient(145deg, rgba(23,25,35,0.9), rgba(30,30,46,0.85))';
  const borderColor = 'rgba(255, 255, 255, 0.06)';
  const textColor = 'gray.100';
  const placeholderColor = 'gray.400';
  const inputBg = 'rgba(255,255,255,0.03)';
  const shadow = '0 15px 40px rgba(0,0,0,0.5)';

  return (
    <VStack
      border="1px solid"
      borderColor={borderColor}
      bg={cardBg}
      borderRadius="xl"
      boxShadow={shadow}
      backdropFilter="blur(14px)"
      px={{ base: 5, md: 7 }}
      py={{ base: 6, md: 8 }}
      spacing={6}
      w="full"
      maxW="400px"
    >
      {/* Agent Info */}
      <HStack spacing={5} w="full" align="center">
        <Image
          src={searchedHouse.agent.image}
          alt={searchedHouse.agent.name}
          borderRadius="full"
          boxSize="70px"
          objectFit="cover"
          border="2px solid rgba(255, 255, 255, 0.2)"
          boxShadow="0 4px 15px rgba(0,0,0,0.3)"
        />
        <Box>
          <Text fontWeight="semibold" fontSize="md" color={textColor}>
            {searchedHouse.agent.name}
          </Text>
          <Text fontSize="sm" color={placeholderColor}>
            +{searchedHouse.agent.phone}
          </Text>
        </Box>
      </HStack>

      {/* Form */}
      <VStack as="form" spacing={4} w="full">
        <Input
          placeholder="Your Name"
          bg={inputBg}
          color={textColor}
          _placeholder={{ color: placeholderColor }}
          border="1px solid"
          borderColor="whiteAlpha.100"
          _focus={{ borderColor: 'cyan.500' }}
        />
        <Input
          placeholder="Your Email"
          bg={inputBg}
          color={textColor}
          _placeholder={{ color: placeholderColor }}
          border="1px solid"
          borderColor="whiteAlpha.100"
          _focus={{ borderColor: 'cyan.500' }}
        />
        <Input
          placeholder="Your Phone"
          bg={inputBg}
          color={textColor}
          _placeholder={{ color: placeholderColor }}
          border="1px solid"
          borderColor="whiteAlpha.100"
          _focus={{ borderColor: 'cyan.500' }}
        />
        <Textarea
          placeholder="Message*"
          defaultValue="Hello, I am interested in [Modern apartment]"
          bg={inputBg}
          color={textColor}
          _placeholder={{ color: placeholderColor }}
          border="1px solid"
          borderColor="whiteAlpha.100"
          size="sm"
          _focus={{ borderColor: 'cyan.500' }}
        />

        <HStack spacing={3} pt={1} w="full">
          <Button
            w="full"
            bgGradient="linear(to-r, cyan.400, cyan.600)"
            color="white"
            fontWeight="medium"
            _hover={{ bgGradient: "linear(to-r, cyan.500, cyan.700)" }}
            transition="all 0.3s ease"
          >
            Send Message
          </Button>
          <Button
            w="50%"
            variant="outline"
            colorScheme="cyan"
            borderColor="cyan.600"
            _hover={{ bg: 'whiteAlpha.200' }}
          >
            Call
          </Button>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Form;
