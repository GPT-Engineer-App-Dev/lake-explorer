import { Container, Text, VStack, Heading, Box, Button, Image } from "@chakra-ui/react";
import { FaWater } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>Welcome to Lake Explorer</Heading>
          <Text fontSize="lg">Discover the most beautiful lakes around the world.</Text>
        </Box>
        <Image src="/images/lake.jpg" alt="Beautiful Lake" borderRadius="md" boxSize="300px" objectFit="cover" />
        <Button rightIcon={<FaWater />} colorScheme="blue" size="lg">Explore Now</Button>
      </VStack>
    </Container>
  );
};

export default Index;