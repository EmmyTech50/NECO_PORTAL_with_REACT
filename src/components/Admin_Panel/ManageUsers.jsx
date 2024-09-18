import React, { useState } from 'react';
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  Heading,
  IconButton,
  Select,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { ViewIcon, ArrowLeftIcon, ArrowRightIcon, ChevronLeftIcon } from '@chakra-ui/icons';

function ManageUsers() {
  const { isOpen: isDrawerOpen, onOpen: onOpenDrawer, onClose: onCloseDrawer } = useDisclosure();
  const { isOpen: isModalOpen, onOpen: onOpenModal, onClose: onCloseModal } = useDisclosure();

  // Sample data for users
  const allUsers = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', phone: '234-567-8901' },
    { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', phone: '345-678-9012' },
    // Add more users here...
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = allUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(allUsers.length / usersPerPage);

  // State for managing selected user and tokens
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedTokens, setSelectedTokens] = useState([]);
  const [showTokens, setShowTokens] = useState(false);

  // Dummy transaction data
  const transactions = [
    { id: 1, date: '2024-09-10', amount: '₦500', status: 'Completed' },
    { id: 2, date: '2024-09-11', amount: '₦1500', status: 'Pending' },
  ];

  // Dummy token data for dropdown
  const tokenList = ['Token A', 'Token B', 'Token C'];

  const handleViewUser = (user) => {
    setSelectedUser(user);
    setSelectedTokens(tokenList); // In a real-world application, fetch user-specific tokens here
    onOpenDrawer();
  };

  const handleToggleTokens = () => {
    setShowTokens(!showTokens);
  };


  // Pagination handlers
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Box p={4}>
      <Heading as="h6" size="md" mb={6}>
        Manage Users
      </Heading>

      {/* Users Table */}
      <Card border="2px solid #e0e0e0">

      <CardHeader
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          borderBottom="2px solid #ccc"
          bg="#fff"
          p={4}
        >
          <Heading as="h6" size="sm">
            User's Activities
          </Heading>
        </CardHeader>

        <CardBody
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        borderBottom="2px solid #ccc"
        bg="#fff"
        p={4}
        >

        
          <Table variant="striped" colorScheme="gray" size="sm" >
         
            <Thead>
              <Tr>
                <Th
                  p={3}
                  borderBottomWidth="2px"
                  borderBottomColor="gray.200"
                  fontSize="sm"
                  color="gray.600"
                  boxShadow="md"
                >
                  Name
                </Th>
                <Th
                  p={3}
                  borderBottomWidth="2px"
                  borderBottomColor="gray.200"
                  fontSize="sm"
                  color="gray.600"
                  boxShadow="md"
                >
                  Email
                </Th>
                <Th
                  p={3}
                  borderBottomWidth="2px"
                  borderBottomColor="gray.200"
                  fontSize="sm"
                  color="gray.600"
                  boxShadow="md"
                >
                  Phone
                </Th>
                <Th
                  p={3}
                  borderBottomWidth="2px"
                  borderBottomColor="gray.200"
                  fontSize="sm"
                  color="gray.600"
                  boxShadow="md"
                >
                  Info
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {currentUsers.map((user) => (
                <Tr key={user.id} >
                  <Td p={3}>{user.name}</Td>
                  <Td p={3}>{user.email}</Td>
                  <Td p={3}>{user.phone}</Td>
                  <Td p={3}>
                    <IconButton
                      aria-label="View User"
                      icon={<ViewIcon />}
                      onClick={() => handleViewUser(user)}
                      colorScheme="green"
                      size="sm"
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </CardBody>

        {/* Pagination and Rows Number */}
        <CardFooter
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        bg="#e0e0e0"
        p={2}
        flexWrap="wrap"
        gap={4}
        >
        <Button
          onClick={handlePrevPage}
          isDisabled={currentPage === 1}
          leftIcon={<ArrowLeftIcon />}
          size="sm"
          variant="outline"
        >
          Previous
        </Button>
        <Text fontSize="sm">
          Page {currentPage} of {totalPages}
        </Text>
        <Button
          rightIcon={<ArrowRightIcon />}
          onClick={handleNextPage}
          isDisabled={currentPage === totalPages}
          size="sm"
        >
          Next
        </Button>
        </CardFooter>
      </Card>

      {/* Drawer for Viewing User Information */}
      <Drawer isOpen={isDrawerOpen} placement="right" onClose={onCloseDrawer} size="lg">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>User Information</DrawerHeader>

          <DrawerBody>
            {selectedUser && (
              <HStack spacing={4}>
                <Text>
                  <strong>Name:</strong> {selectedUser.name}
                </Text>
                <Text>
                  <strong>Email:</strong> {selectedUser.email}
                </Text>
                <Text>
                  <strong>Phone:</strong> {selectedUser.phone}
                </Text>
              
                {/* Tokens and Transactions Buttons */}
                <Flex gap={4} mt={4}>
                  <Button colorScheme="blue" onClick={handleToggleTokens}>
                    Tokens
                  </Button>
                  <Button colorScheme="green" onClick={onOpenModal}>
                    Transactions
                  </Button>
                </Flex>

                {/* Dropdown for Tokens */}
                {showTokens && (
                  <Select placeholder="Select Token" mt={4}>
                    {selectedTokens.map((token, index) => (
                      <option key={index} value={token}>
                        {token}
                      </option>
                    ))}
                  </Select>
                )}
              </HStack>
            )}
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onCloseDrawer}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      {/* Modal for Viewing Transactions */}
      <Modal isOpen={isModalOpen} onClose={onCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Transaction History</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Table
              variant="unstyled"
              size="sm"
              borderWidth="1px"
              borderRadius="md"
              boxShadow="lg"
              bg="white"
            >
              <Thead>
                <Tr>
                  <Th
                    p={3}
                    borderBottomWidth="2px"
                    borderBottomColor="gray.200"
                    fontSize="sm"
                    color="gray.600"
                    boxShadow="md"
                  >
                    Date
                  </Th>
                  <Th
                    p={3}
                    borderBottomWidth="2px"
                    borderBottomColor="gray.200"
                    fontSize="sm"
                    color="gray.600"
                    boxShadow="md"
                  >
                    Amount
                  </Th>
                  <Th
                    p={3}
                    borderBottomWidth="2px"
                    borderBottomColor="gray.200"
                    fontSize="sm"
                    color="gray.600"
                    boxShadow="md"
                  >
                    Status
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {transactions.map((transaction) => (
                  <Tr key={transaction.id} _hover={{ bg: 'gray.50' }}>
                    <Td p={3}>{transaction.date}</Td>
                    <Td p={3}>{transaction.amount}</Td>
                    <Td p={3}>{transaction.status}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onCloseModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>


  );
}




export default ManageUsers;
