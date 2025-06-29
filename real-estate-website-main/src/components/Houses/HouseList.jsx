import {
  Center,
  Grid,
  Heading,
  Spinner,
  Stack,
  Text,
  Box,
  useColorModeValue,
  useBreakpointValue
} from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { HouseContext } from "../../context/HouseContext";
import HouseItem from "./HouseItem";

const HouseList = () => {
  const { houses, isLoading } = useContext(HouseContext);

  const cardBg = useColorModeValue("whiteAlpha.100", "whiteAlpha.100");

  const columns = useBreakpointValue({
    base: 1,
    sm: 2,
    md: 3,
    //sm: 4,
  });

  if (isLoading) {
    return (
      <Center minH="60vh" bg="gray.900">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.700"
          color="cyan.400"
          size="xl"
        />
      </Center>
    );
  }

  if (houses.length === 0) {
    return (
      <Center minH="50vh" bg="gray.900">
        <Stack spacing={4} align="center">
          <Heading size="lg" color="gray.300">
            Oops... No results found
          </Heading>
          <Text color="gray.400">Try adjusting filters or search again</Text>
        </Stack>
      </Center>
    );
  }

  return (
    <Box px={{ base: 2, md: 6 }} py={{ base: 4, md: 6 }} bg="gray.900" minH="100vh">
      <Grid
        templateColumns={`repeat(${columns}, 1fr)`}
        gap={4}
        alignItems="stretch"
      >
        {houses.map((item) => (
          <Link
            to={`/property-details/${item.id}`}
            key={item.id}
            style={{ textDecoration: "none", width: "%" }}
          >
            <Box
              bg={cardBg}
              borderRadius="md"
              boxShadow="lg"
              overflow="hidden"
              transition="all 0.3s"
              _hover={{
                transform: "scale(1.02)",
                boxShadow: "xl",
              }}
              border="1px solid"
              borderColor="whiteAlpha.200"
              backdropFilter="blur(4px)"
              p={3}
              h="100%"
              maxH="410px"  // 👈 Card height control
            >
              <HouseItem house={item} />
            </Box>
          </Link>
        ))}
      </Grid>
    </Box>
  );
};

export default HouseList;
