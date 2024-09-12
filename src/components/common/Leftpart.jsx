import React from 'react';
import {
  GridItem,
  Image,
  Box,
  Heading,
  Stack,
  Text,
  UnorderedList,
  ListItem,
  HStack,
} from '@chakra-ui/react';
import Logo from '../../assets/neco_logo.svg';
import { ChatIcon } from '@chakra-ui/icons';

function Leftpart() {
  return (
    <GridItem colSpan={2} bg="#07bc0c88" h="100%">
      <Stack spacing={6} p={6} color="#fff">
        <Box textAlign="center">
          <Image src={Logo} boxSize="100px" alt="Neco Logo" mx="auto" size/>
          <Heading mt={2} as="h4" fontSize={'md'}>
            NECO RESULTS
          </Heading>
        </Box>

        <Box>
          <Text fontWeight="bold" mb={2} mt={1} >
            How it works
          </Text>
          <UnorderedList spacing={2} fontSize={'sm'}>
            <ListItem>Select your examination year and examination type.</ListItem>
            <ListItem>Enter your Token.</ListItem>
            <ListItem>Enter your Registration number.</ListItem>
            <ListItem>Click on the "Check my result" button.</ListItem>
          </UnorderedList>
        </Box>

        <Box mt="auto">
          <HStack spacing={4}>
            <Box
              bg="#fff"
              borderRadius="50%"
              w={30}
              h={30}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <ChatIcon color="green" />
            </Box>
            <Text fontSize={10}>Support: support@neco.gov.ng</Text>
          </HStack>
        </Box>
      </Stack>
    </GridItem>
  );
}

export default Leftpart;
