import { Routes, Route } from 'react-router-dom';
import { Box, Center, Text } from '@chakra-ui/react';

import Header from './components/Header/Header';
import Home from './routes/Home';
import PropertyDetails from './routes/PropertyDetails';
import Footer from './components/Footer';
import HouseProvider from './context/HouseContext';
import Features from './routes/Features';
import Contact from './routes/Contact';
import SignUp from './routes/SignUp';
import HouseDetails from './components/PropertyDetails/HouseDetails';
import About from './routes/About'; // ✅ About route added

const App = () => {
  return (
    <HouseProvider>
      <Box
        minH="100vh"
        bg="gray.900"
        color="white"
        overflowX="hidden"
        display="flex"
        flexDirection="column"
      >
        <Header />

        <Box flex="1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/about" element={<About />} />  {/* ✅ About Page */}
            <Route path="/features" element={<Features />} />
            <Route path="/property-details" element={<PropertyDetails />}>
              <Route path=":propertyId" element={<HouseDetails />} />

            </Route>
            <Route
              path="*"
              element={
                <Center py={20}>
                  <Text fontSize="xl" color="gray.400">
                    🚫 Oops! The page you’re looking for doesn’t exist.
                  </Text>
                </Center>
              }
            />
          </Routes>
        </Box>

        <Footer />
      </Box>
    </HouseProvider>
  );
};

export default App;
