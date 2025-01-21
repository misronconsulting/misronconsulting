import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom"; // Import RouterLink from react-router-dom

const Footer = () => {
  return (
    <Box bg="brand.900" color="white" py={8}>
      <Flex maxW="container.xl" mx="auto" px={4} direction={{ base: "column", md: "row" }} justify="space-between">
        <VStack align="start" mb={{ base: 6, md: 0 }}>
          <Text fontSize="xl" fontWeight="bold" mb={2}>
            Misron Consulting
          </Text>
          <Text fontSize="sm">Empowering businesses with cutting-edge Data and AI solutions.</Text>
        </VStack>
        <VStack align="start" mb={{ base: 6, md: 0 }}>
          <Text fontSize="lg" fontWeight="semibold" mb={2}>
            Quick Links
          </Text>
          <RouterLink to="/" style={{ textDecoration: 'none', color: 'white' }} onMouseEnter={(e) => e.target.style.color = 'brand.200'} onMouseLeave={(e) => e.target.style.color = 'white'}>
            Home
          </RouterLink>
          <RouterLink to="/about" style={{ textDecoration: 'none', color: 'white' }} onMouseEnter={(e) => e.target.style.color = 'brand.200'} onMouseLeave={(e) => e.target.style.color = 'white'}>
            About
          </RouterLink>
          <RouterLink to="/services" style={{ textDecoration: 'none', color: 'white' }} onMouseEnter={(e) => e.target.style.color = 'brand.200'} onMouseLeave={(e) => e.target.style.color = 'white'}>
            Services
          </RouterLink>
          <RouterLink to="/contact" style={{ textDecoration: 'none', color: 'white' }} onMouseEnter={(e) => e.target.style.color = 'brand.200'} onMouseLeave={(e) => e.target.style.color = 'white'}>
            Contact
          </RouterLink>
        </VStack>
        <VStack align="start">
          <Text fontSize="lg" fontWeight="semibold" mb={2}>
            Contact Us
          </Text>
          <Text>SaltLake Kolkata India</Text>
          <Text>Phone: (91) 62893290271</Text>
          <Text>Email: misron.consulting@gmail.com</Text>
        </VStack>
      </Flex>
      <Text mt={8} textAlign="center" fontSize="sm">
        &copy; {new Date().getFullYear()} Misron Consulting. All rights reserved.
      </Text>
    </Box>
  );
}

export default Footer;
