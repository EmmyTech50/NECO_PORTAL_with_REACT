import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  
  InputRightElement,
  Stack,
  useDisclosure,
  useBreakpointValue,
  IconButton,
  Icon,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const LoginPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => setShowPassword(!showPassword);

  return (
    <Box
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="gray.100"
      p={4}
    >
      <Box
        maxWidth="400px"
        width="100%"
        bg="white"
        boxShadow="lg"
        borderRadius="md"
        p={6}
      >
        <Stack spacing={4}>
          <Heading size="lg" textAlign="center">
            Admin Login
          </Heading>
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input id="email" type="email" placeholder="Enter your email" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <InputGroup>
              <InputRightElement>
                <IconButton
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                  onClick={handleClick}
                  variant="link"
                />
              </InputRightElement>
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
              />
            </InputGroup>
          </FormControl>
          <Button colorScheme="green" mt={4} type="submit">
            Log In
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default LoginPage;
