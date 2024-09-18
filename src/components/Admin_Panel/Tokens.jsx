import React, { useState } from 'react';
import {
  Box,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  useDisclosure,
  Select,
  Text,
  Card,
  CardHeader,
  CardBody,
  Heading,
  CardFooter,
} from '@chakra-ui/react';
import { AddIcon, ArrowLeftIcon, ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

// Sample token data
const allUsers = [
  { id: 1, name: 'Token A', status: 'Active', type: 'Used' },
  { id: 2, name: 'Token B', status: 'Inactive', type: 'Used' },
  { id: 3, name: 'Token C', status: 'Active', type: 'Active' },
  { id: 4, name: 'Token D', status: 'Inactive', type: 'Used' },
  { id: 5, name: 'Token E', status: 'Active', type: 'Active' },
  { id: 6, name: 'Token F', status: 'Active', type: 'Used' },
  { id: 7, name: 'Token G', status: 'Inactive', type: 'Active' },
  // Add more tokens if needed
];

function TokenTable() {
  const { isOpen, onOpen, onClose } = useDisclosure();


// Pagination state
const [currentPage, setCurrentPage] = useState(1);
const usersPerPage = 5;
const indexOfLastUser = currentPage * usersPerPage;
const indexOfFirstUser = indexOfLastUser - usersPerPage;
const currentUsers = allUsers.slice(indexOfFirstUser, indexOfLastUser);
const totalPages = Math.ceil(allUsers.length / usersPerPage);

  // Handle page change
  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  // Handle rows per page change
  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to first page
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

  // // Paginated tokens data
  // const paginatedTokens = allUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);


  

  return (
    <Box p={4}>
      {/* Generate Button */}
      <Button colorScheme="green" mb={4} onClick={onOpen} leftIcon={<AddIcon />}>
        Generate
      </Button>

      {/* Token Table with Box Shadow */}
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
            Token Order
          </Heading>
        </CardHeader>

      <CardBody p={4}>

          <Table variant="striped" colorScheme="gray" size="sm">
            <Thead>
              <Tr>
                <Th p={4} borderBottomWidth="2px" borderBottomColor="gray.200">
                  Token Name
                </Th>
                <Th p={4} borderBottomWidth="2px" borderBottomColor="gray.200">
                  Active Tokens
                </Th>
                <Th p={4} borderBottomWidth="2px" borderBottomColor="gray.200">
                  Used Tokens
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {currentUsers.map((token) => (
                <Tr key={token.id} _hover={{ bg: 'gray.50' }}>
                  <Td p={4}>{token.name}</Td>
                  <Td p={4}>{token.type === 'Active' ? 'Yes' : 'No'}</Td>
                  <Td p={4}>{token.type === 'Used' ? 'Yes' : 'No'}</Td>
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
            leftIcon={<ArrowLeftIcon />}
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
            rightIcon={<ArrowRightIcon />}
            size="sm"
            variant="outline"
          >
            Next
          </Button>

        </CardFooter>
       
      </Card>      

      {/* Generate Modal */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Generate Token</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input placeholder="Enter value" defaultValue="2000" />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="green" mr={3} onClick={onClose}>
              Continue
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default TokenTable;
