import React from 'react';
import { ArrowLeftIcon, ArrowRightIcon, Search2Icon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  FormControl,
  Grid,
  GridItem,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Text,
} from '@chakra-ui/react';

function Transactions() {
  return (
    <Box>
      <Grid h="100vh" templateRows="repeat(1, 1fr)" templateColumns="repeat(1, 1fr)" width="100%">
        <GridItem h="100vh" width="100%" overflowX="hidden">
          <Box mt={10}>
            <Heading as="h6" size="md" px={4}>
              Transactions
            </Heading>
          </Box>

          <Box px={4}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mt={10} flexWrap="wrap" gap={4}>
              <Box display="flex" flexWrap="wrap" gap={4}>
                <FormControl borderRadius="5px" w={{ base: 'full', md: '330px' }} bgColor="#e0e0e0">
                  <InputGroup>
                    <InputRightElement pointerEvents="none" display="flex" justifyContent="center" alignItems="center">
                      <Search2Icon color="black" />
                    </InputRightElement>
                    <Input type="text" placeholder="Search by reference number rrr" size="lg" />
                  </InputGroup>
                </FormControl>

                <Select placeholder="All" w={{ base: 'full', md: '100px' }} bgColor="#e0e0e0" size="lg">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>

                <Input placeholder="Select Date" type="date" w={{ base: 'full', md: '150px' }} bgColor="#e0e0e0" size="lg" />
              </Box>

              <Box display="flex" gap={4}>
                <Button outlineColor="#51b55f" bg="#fff" color="#51b55f" borderRadius="5px">
                  Verify Payment
                </Button>
                <Button colorScheme="green" bgColor="#51b55f" color="#fff" borderRadius="5px">
                  Purchase Token
                </Button>
              </Box>
            </Box>

            <Box mt={10}>
              <Card border="2px solid #e0e0e0">
                <CardHeader
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  borderBottom="2px solid #ccc"
                  bgColor="#fff"
                  p={4}
                >
                  <Heading as="h6" size="sm">
                    Payment Reference
                  </Heading>
                  <Heading as="h6" size="sm">
                    RRR
                  </Heading>
                  <Heading as="h6" size="sm">
                    Date Paid
                  </Heading>
                  <Heading as="h6" size="sm">
                    Payer Name
                  </Heading>
                  <Heading as="h6" size="sm">
                    Amount (₦)
                  </Heading>
                  <Heading as="h6" size="sm">
                    Status
                  </Heading>
                  <Heading as="h6" size="sm">
                    Action
                  </Heading>
                </CardHeader>

                <CardBody bgColor="#e5e7eb" p={4}>
                  <Text textAlign="center" h="100" mt={10}>
                    No Records found
                  </Text>
                </CardBody>

                <Box display="flex" justifyContent="space-between" alignItems="center" bg="#e0e0e0" p={2}>
                  <ArrowLeftIcon mx={4} />
                  <ArrowRightIcon mx={4} />
                </Box>

                <CardFooter display="flex" justifyContent="center" alignItems="center" flexWrap="wrap" gap={4} p={4}>
                  <Select variant="filled" placeholder="10 Rows" size="lg" w="auto">
                    <option value="option2">20 Rows</option>
                    <option value="option3">30 Rows</option>
                  </Select>

                  <Text mr={2}>Page 1 of 0</Text>

                  <Box display="flex">
                    <Box
                      h="40px"
                      w="40px"
                      borderRadius="50%"
                      bgColor="#51b55f"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      mr={1}
                    >
                      <ArrowLeftIcon color="white" />
                    </Box>
                    <Box
                      h="40px"
                      w="40px"
                      borderRadius="50%"
                      bgColor="#51b55f"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      ml={1}
                    >
                      <ArrowRightIcon color="white" />
                    </Box>
                  </Box>
                </CardFooter>
              </Card>
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Transactions;
