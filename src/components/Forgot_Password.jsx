import React from 'react';
import {
  Grid,
  Box,
  Heading,
  Text,
  FormControl,
  Input,
  Link,
  Button,
  FormHelperText,
  FormLabel,
  FormErrorMessage,
  Stack,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { ArrowBackIcon, LockIcon } from '@chakra-ui/icons';

function Forgot_Password() {
  // State for email input
  const [input, setInput] = React.useState('');
  const handleInputChange = (e) => setInput(e.target.value);
  const isError = input === '';

  return (
    <Grid h="100vh" display="flex" alignItems="center" justifyContent="center">
      <Box w={{ base: '90%', md: '400px' }} p={6} bg="#fff" borderRadius="md" boxShadow="md">
        <Stack spacing={6}>
          <VStack spacing={3} align="center">
            <LockIcon boxSize={8} color="#07bc0c88" />
            <Heading as="h4" size="md">
              Reset Password
            </Heading>
            <Text textAlign="center" fontSize="sm" color="gray.600">
              Enter the email associated with your account, and we will send you instructions to
              reset your password.
            </Text>
          </VStack>

          <FormControl isInvalid={isError}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={input}
              onChange={handleInputChange}
              variant="filled"
              placeholder="youremail@example.com"
            />
            {!isError ? (
              <FormHelperText>
                Enter the email you'd like to receive the instructions on.
              </FormHelperText>
            ) : (
              <FormErrorMessage>Email is required.</FormErrorMessage>
            )}
          </FormControl>

          <Button bg="#07bc0c88" color="white" w="100%" mt={4}>
            Reset Password
          </Button>

          <HStack justify="center" spacing={2} mt={4}>
            <ArrowBackIcon color="#07bc0c88" />
            <Link href="/login" color="#07bc0c88">
              Back To Login
            </Link>
          </HStack>
        </Stack>
      </Box>
    </Grid>
  );
}

export default Forgot_Password;
