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
} from '@chakra-ui/react';
import { ViewIcon, ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';

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
      <Table variant="striped" colorScheme="gray" size="md">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Phone</Th>
            <Th>Info</Th>
          </Tr>
        </Thead>
        <Tbody>
          {currentUsers.map((user) => (
            <Tr key={user.id}>
              <Td>{user.name}</Td>
              <Td>{user.email}</Td>
              <Td>{user.phone}</Td>
              <Td>
                <IconButton
                  aria-label="View User"
                  icon={<ViewIcon />}
                  onClick={() => handleViewUser(user)}
                  colorScheme="green"
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      {/* Pagination Controls */}
      <Flex justifyContent="space-between" alignItems="center" mt={4}>
        <Button
          leftIcon={<ArrowLeftIcon />}
          onClick={handlePrevPage}
          isDisabled={currentPage === 1}
        >
          Previous
        </Button>
        <Text>
          Page {currentPage} of {totalPages}
        </Text>
        <Button
          rightIcon={<ArrowRightIcon />}
          onClick={handleNextPage}
          isDisabled={currentPage === totalPages}
        >
          Next
        </Button>
      </Flex>

      {/* Drawer for Viewing User Information */}
      <Drawer isOpen={isDrawerOpen} placement="right" onClose={onCloseDrawer} size="xl">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>View User Information</DrawerHeader>

          <DrawerBody>
            {selectedUser && (
              <Stack spacing={4}>
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
              </Stack>
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
            <Table variant="simple" colorScheme="gray" size="sm">
              <Thead>
                <Tr>
                  <Th>Date</Th>
                  <Th>Amount</Th>
                  <Th>Status</Th>
                </Tr>
              </Thead>
              <Tbody>
                {transactions.map((transaction) => (
                  <Tr key={transaction.id}>
                    <Td>{transaction.date}</Td>
                    <Td>{transaction.amount}</Td>
                    <Td>{transaction.status}</Td>
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