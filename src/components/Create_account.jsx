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
  FormControl,
  Input,
  Button,
  Link,
  InputRightElement,
  InputGroup,
  SimpleGrid,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import Leftpart from './common/Leftpart';

function Create_account() {
  // Options for year selection
  const Years = Array.from({ length: 2023 - 2000 + 1 }, (_, index) => 2000 + index);

  // Password visibility toggle state
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  // User input state variables
  const [fname, setFname] = React.useState('');
  const [mdname, setMdName] = React.useState('');
  const [lname, setLname] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPass, setConfirmPassword] = React.useState('');

  const isError = ''; // Error state placeholder

  return (
    <Grid h="100vh" templateRows="repeat(1, 1fr)" templateColumns="repeat(5, 1fr)">
      <Leftpart/>
      <GridItem colSpan={3} bg="#fff" h="100vh">
        <Stack display="flex" justifyContent="center" alignItems="center" w="100%">
          <Box h="90vh" w={{ base: '90%', md: '55%' }} margin="auto" mt="5vh">
            <VStack spacing={4} align="start">
              <Heading>Create a new account</Heading>
              <Text>Create an account by filling in the information below</Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="100%">
                <FormControl isInvalid={isError}>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    type="text"
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                    variant="filled"
                    placeholder="First Name"
                  />
                  {isError && <FormErrorMessage>First Name is required.</FormErrorMessage>}
                </FormControl>

                <FormControl isInvalid={isError}>
                  <FormLabel>Middle Name</FormLabel>
                  <Input
                    type="text"
                    value={mdname}
                    onChange={(e) => setMdName(e.target.value)}
                    variant="filled"
                    placeholder="Middle Name"
                  />
                  {isError && <FormErrorMessage>Middle name is required.</FormErrorMessage>}
                </FormControl>

                <FormControl isInvalid={isError}>
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    type="text"
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                    variant="filled"
                    placeholder="Last Name"
                  />
                  {isError && <FormErrorMessage>Last Name is required.</FormErrorMessage>}
                </FormControl>

                <FormControl isInvalid={isError}>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    variant="filled"
                    placeholder="youremail@example.com"
                  />
                  {isError && <FormErrorMessage>Email is required.</FormErrorMessage>}
                </FormControl>

                <FormControl isInvalid={isError}>
                  <FormLabel>Phone Number</FormLabel>
                  <Input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    variant="filled"
                    placeholder="080--"
                  />
                  {isError && <FormErrorMessage>Phone number is required.</FormErrorMessage>}
                </FormControl>

                <FormControl>
                  <FormLabel>Password</FormLabel>
                  <InputGroup size="md">
                    <Input
                      variant="filled"
                      type={show ? 'text' : 'password'}
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>

                <FormControl>
                  <FormLabel>Confirm Password</FormLabel>
                  <InputGroup size="md">
                    <Input
                      variant="filled"
                      type={show ? 'text' : 'password'}
                      placeholder="Confirm password"
                      value={confirmPass}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
              </SimpleGrid>

              <Button bg="#07bc0c88" w="100%">
                Create Account
              </Button>

              <Button border="2px" borderColor="blue" w="100%">
                <Link href="/create-account" color="blue">
                  Check Result Here
                </Link>
              </Button>

              <HStack>
                <Text>Don't have an account?</Text>
                <Link href="/login" color="#07bc0c88" fontSize="md">
                  Login Here
                </Link>
              </HStack>
            </VStack>
          </Box>
        </Stack>
      </GridItem>
    </Grid>
  );
}

export default Create_account;
