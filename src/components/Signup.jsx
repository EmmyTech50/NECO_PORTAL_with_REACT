import React from 'react';
import {
  Grid,
  GridItem,
  Box,
  Heading,
  Stack,
  Text,
  HStack,
  VStack,
  Select,
  FormControl,
  Input,
  Button,
  Link,
} from '@chakra-ui/react';
import Leftpart from './common/Leftpart';

function Signup() {
  const Years = Array.from({ length: 2023 - 2000 + 1 }, (_, index) => 2000 + index);

  return (
    <Grid
      h="100vh"
      templateRows="repeat(1, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={1/2}
    >
      <Leftpart />

      <GridItem colSpan={3} bg="#fff" h="100vh">
        <Stack
          display="flex"
          justifyContent="center"
          alignItems="center"
          w="100%"
        >
          <Box h="90vh" w="55%" margin="auto" mt="5vh">
            <VStack spacing={4}>
              <Heading>Check Result</Heading>

              {/* Examination Year Selector */}
              <FormControl>
                <Select variant="filled" placeholder="Examination Year">
                  {Years.map((year, index) => (
                    <option value={year} key={index}>
                      {year}
                    </option>
                  ))}
                </Select>
              </FormControl>

              {/* Examination Type Selector */}
              <FormControl>
                <Select variant="filled" placeholder="Examination Type">
                  <option value="ssce_int">SSCE INTERNAL</option>
                  <option value="ssce_ext">SSCE EXTERNAL</option>
                  <option value="bece">BECE</option>
                  <option value="ncee">NCEE</option>
                  <option value="gifted">GIFTED</option>
                </Select>
              </FormControl>

              {/* Token Input */}
              <FormControl>
                <Input
                  type="text"
                  placeholder="Token Eg (0000 0000 0000)"
                  variant="filled"
                />
              </FormControl>

              {/* Registration Number Input */}
              <FormControl>
                <Input
                  type="text"
                  placeholder="Registration Number"
                  variant="filled"
                />
              </FormControl>

              {/* Check Result Button */}
              <FormControl>
                <Button colorScheme="green" w="100%">
                  Check Result
                </Button>
              </FormControl>

              <Text mt={4}>or</Text>

              {/* Token Purchase and Login Links */}
              <Text fontSize="sm" textAlign="center">
                Don’t have a token to check your result? Purchase a token with the button below
              </Text>

              <FormControl>
                <Button colorScheme="blue" w="100%">
                  <Link href="/login" color="white">
                    Purchase Token
                  </Link>
                </Button>
              </FormControl>

              <HStack mt={4}>
                <Text>Already have an account?</Text>
                <Link href="/login" color="blue.600">
                  Login here
                </Link>
              </HStack>

              <VStack mt={4}>
                <Link href="/Create_account" color="green.600">
                  Create Account
                </Link>
              </VStack>
            </VStack>
          </Box>
        </Stack>
      </GridItem>
    </Grid>
  );
}

export default Signup;
