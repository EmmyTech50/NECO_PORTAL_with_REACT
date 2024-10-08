import React from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Checkbox,
  FormControl,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Text,
} from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon, Search2Icon } from '@chakra-ui/icons';

function Mytoken() {
  return (
    <Box>
      <Grid h="100vh" templateRows="1fr" templateColumns="1fr" width="100%">
        <GridItem h="100vh" width="100%" overflowX="hidden">
          <Box mt={10}>
            <Heading as="h6" size="md" px={4}>
              MY TOKEN
            </Heading>
          </Box>

          <Box px={4}>
            <Box
              display="flex"
              flexDirection={{ base: 'column', md: 'row' }}
              justifyContent="space-between"
              alignItems="center"
              mt={10}
              gap={4}
            >
              <ButtonGroup size="lg" isAttached variant="outline">
                <Button outlineColor="#51b55f">Unused</Button>
                <Button>Active/Link</Button>
                <Button>Exhausted</Button>
                <Button>Issued</Button>
              </ButtonGroup>

              <FormControl
                borderRadius="5px"
                bgColor="#e0e0e0"
                w={{ base: '100%', md: 'auto' }}
              >
                <InputGroup>
                  <InputRightElement pointerEvents="none" display="flex" justifyContent="center" alignItems="center">
                    <Search2Icon color="black" />
                  </InputRightElement>
                  <Input type="tel" placeholder="Search Examination Year" size="lg" fontSize="15px" />
                </InputGroup>
              </FormControl>

              <Box borderRadius="5px" bgColor="#51b55f">
                <Button colorScheme="#51b55f">Purchase Token</Button>
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
                  flexDirection={{ base: 'column', md: 'row' }}
                  textAlign={{ base: 'center', md: 'left' }}
                >
                  <Checkbox />
                  <Heading as="h6" size="sm">
                    Token
                  </Heading>
                  <Heading as="h6" size="sm">
                    Payment Reference
                  </Heading>
                  <Heading as="h6" size="sm">
                    Purchase Date
                  </Heading>
                  <Heading as="h6" size="sm">
                    Views
                  </Heading>
                  <Heading as="h6" size="sm">
                    Action
                  </Heading>
                </CardHeader>

                <CardBody bgColor="#e5e7eb">
                  <Text textAlign="center" h={100} mt={10}>
                    No Records found
                  </Text>
                </CardBody>

                <Box display="flex" justifyContent="space-between" alignItems="center" bg="#e0e0e0">
                  <ArrowLeftIcon mx={4} />
                  <ArrowRightIcon mx={4} />
                </Box>

                <Box display="flex" justifyContent="center" my={4}>
                  <CardFooter
                    display="flex"
                    flexDirection={{ base: 'column', md: 'row' }}
                    alignItems="center"
                    gap={4}
                  >
                    <Select variant="filled" placeholder="10 Rows" size="lg" w={{ base: 'full', md: '50px' }} mx={5}>
                      <option value="option2">20 Rows</option>
                      <option value="option3">30 Rows</option>
                    </Select>

                    <Text mr={2}>Page 1 of 10</Text>

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
                </Box>
              </Card>
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Mytoken;
