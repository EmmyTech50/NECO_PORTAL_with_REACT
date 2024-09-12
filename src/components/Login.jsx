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
  FormLabel,
  FormHelperText,
  FormErrorMessage,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import Leftpart from './common/Leftpart';

function Login() {
  // Email state
  const [input, setInput] = React.useState('');
  const handleInputChange = (e) => setInput(e.target.value);
  const isError = input === '';

  // Password visibility state
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

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
              <Heading fontSize="2xl">Login to your account</Heading>
              <Heading as="h5" size="sm">
                Login with your email address & password.
              </Heading>

              {/* Email Input */}
              <FormControl isInvalid={isError} mt={5}>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  value={input}
                  onChange={handleInputChange}
                  w="100%"
                  variant="filled"
                  placeholder="emmagospelnews@gmail.com"
                />
                {!isError ? (
                  <FormHelperText>
                    Enter the email associated with your account.
                  </FormHelperText>
                ) : (
                  <FormErrorMessage>Email is required.</FormErrorMessage>
                )}
              </FormControl>

              {/* Password Input */}
              <FormControl mt={5}>
                <FormLabel>Password</FormLabel>
                <InputGroup size="md">
                  <Input
                    variant="filled"
                    type={show ? 'text' : 'password'}
                    placeholder="Enter password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                      {show ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              {/* Login Button */}
              <FormControl mt={5}>
                <Button bg="#07bc0c88" w="100%" color="white">
                  Login
                </Button>
              </FormControl>

              {/* Forgot Password Link */}
              <Link href="/Forgot_Password" color="green" fontSize="md" mt={4}>
                Forgot Password
              </Link>

              {/* Check Result Button */}
              <FormControl mt={4}>
                <Button border="2px" borderColor="blue" w="100%">
                  <Link href="/login" color="blue">
                    Check Result Here
                  </Link>
                </Button>
              </FormControl>

              {/* Create Account Link */}
              <HStack mt={4}>
                <Text mr="2">Don't have an account?</Text>
                <Link href="/Create_account" color="green" fontSize="md">
                  Create account here
                </Link>
              </HStack>
            </VStack>
          </Box>
        </Stack>
      </GridItem>
    </Grid>
  );
}

export default Login;
