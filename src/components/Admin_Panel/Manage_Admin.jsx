import React, { useState } from 'react';
import {
  Search2Icon,
  EditIcon,
  DeleteIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ViewIcon,
  ViewOffIcon,
  AddIcon,
} from '@chakra-ui/icons';
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  FormControl,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  useBreakpointValue,
  IconButton,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Stack,
  Select,
} from '@chakra-ui/react';

function AdminManagement() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const inputSize = useBreakpointValue({ base: 'md', md: 'lg' });

  // Dummy data for co-admins
  const initialCoAdmins = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Editor', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Moderator', status: 'Inactive' },
    { id: 3, name: 'Sam Wilson', email: 'sam@example.com', role: 'Viewer', status: 'Active' },
    { id: 4, name: 'Alex Johnson', email: 'alex@example.com', role: 'Admin', status: 'Active' },
    { id: 5, name: 'Lisa Brown', email: 'lisa@example.com', role: 'Editor', status: 'Inactive' },
    { id: 6, name: 'Tom Hanks', email: 'tom@example.com', role: 'Viewer', status: 'Active' },
  ];

  const [coAdmins, setCoAdmins] = useState(initialCoAdmins);
  const [currentPage, setCurrentPage] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const itemsPerPage = 3;

  // Pagination calculations
  const totalPages = Math.ceil(coAdmins.length / itemsPerPage);
  const paginatedAdmins = coAdmins.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle page changes
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
        Admin Management
      </Heading>

      {/* Search and Add Admin Controls */}
      <Flex
        direction={{ base: 'column', md: 'row' }}
        alignItems="center"
        justifyContent="space-between"
        gap={4}
        mb={6}
        flexWrap="wrap"
      >
        {/* Search Input */}
        <FormControl w={{ base: 'full', md: '330px' }} bg="#e0e0e0" borderRadius="5px">
          <InputGroup>
            <InputRightElement pointerEvents="none">
              <Search2Icon color="black" />
            </InputRightElement>
            <Input
              type="text"
              placeholder="Search by admin name or email"
              size={inputSize}
              bg="white"
            />
          </InputGroup>
        </FormControl>

        {/* Add Admin Button */}
        <Button
          colorScheme="green"
          onClick={onOpen}
          borderRadius="5px"
          leftIcon={<AddIcon />}
        >
          Add Admin
        </Button>
      </Flex>

      {/* Admins Table */}
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
            Admin List
          </Heading>
        </CardHeader>

        <CardBody p={4}>
          {/* Responsive Table */}
          <Table variant="striped" colorScheme="gray" size="sm">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Role</Th>
                <Th>Status</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {paginatedAdmins.map((admin) => (
                <Tr key={admin.id}>
                  <Td>{admin.name}</Td>
                  <Td>{admin.email}</Td>
                  <Td>{admin.role}</Td>
                  <Td>{admin.status}</Td>
                  <Td>
                    <Flex gap={2}>
                      <IconButton
                        aria-label="Edit Admin"
                        icon={<EditIcon />}
                        colorScheme="green"
                        size="sm"
                      />
                      <IconButton
                        aria-label="Delete Admin"
                        icon={<DeleteIcon />}
                        colorScheme="red"
                        size="sm"
                      />
                    </Flex>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </CardBody>

        {/* Pagination and Footer */}
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
            leftIcon={<ChevronLeftIcon />}
            size="sm"
            variant="outline"
          >
            Previous
          </Button>
          <Text>
            Page {currentPage} of {totalPages}
          </Text>
          <Button
            onClick={handleNextPage}
            isDisabled={currentPage === totalPages}
            rightIcon={<ChevronRightIcon />}
            size="sm"
            variant="outline"
          >
            Next
          </Button>
        </CardFooter>
      </Card>

      {/* Add Admin Modal */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Admin</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={4}>
              <FormControl>
                <Input placeholder="Name" />
              </FormControl>
              <FormControl>
                <Input placeholder="Email" type="email" />
              </FormControl>
              <FormControl>
                <InputGroup>
                  <Input
                    placeholder="Password"
                    type={showPassword ? 'text' : 'password'}
                  />
                  <InputRightElement>
                    <IconButton
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                      icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                      onClick={() => setShowPassword(!showPassword)}
                      variant="ghost"
                    />
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl>
                <Select placeholder="Role">
                  <option value="editor">Editor</option>
                  <option value="moderator">Moderator</option>
                  <option value="viewer">Viewer</option>
                </Select>
              </FormControl>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="green" mr={3} onClick={onClose}>
              Add
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default AdminManagement;
