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
} from '@chakra-ui/react';

// Sample token data
const tokensData = [
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
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Handle page change
  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  // Handle rows per page change
  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to first page
  };

  // Paginated tokens data
  const paginatedTokens = tokensData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Box p={4}>
      {/* Generate Button */}
      <Button colorScheme="green" mb={4} onClick={onOpen}>
        Generate
      </Button>

      {/* Token Table with Box Shadow */}
      <Box boxShadow="lg" borderRadius="md" overflow="hidden" bg="white" mb={4}>
        <TableContainer>
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
              {paginatedTokens.map((token) => (
                <Tr key={token.id} _hover={{ bg: 'gray.50' }}>
                  <Td p={4}>{token.name}</Td>
                  <Td p={4}>{token.type === 'Active' ? 'Yes' : 'No'}</Td>
                  <Td p={4}>{token.type === 'Used' ? 'Yes' : 'No'}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>

      {/* Pagination Controls */}
      <Box mt={4} display="flex" justifyContent="space-between" alignItems="center">
        <Select value={rowsPerPage} onChange={handleRowsPerPageChange} width="150px">
          <option value={5}>5 rows</option>
          <option value={10}>10 rows</option>
          <option value={25}>25 rows</option>
        </Select>

        <Box display="flex" alignItems="center">
          <Button
            onClick={() => handleChangePage(page - 1)}
            isDisabled={page === 0}
            size="sm"
          >
            Previous
          </Button>
          <Text mx={2} fontSize="sm">
            Page {page + 1} of {Math.ceil(tokensData.length / rowsPerPage)}
          </Text>
          <Button
            onClick={() => handleChangePage(page + 1)}
            isDisabled={page >= Math.ceil(tokensData.length / rowsPerPage) - 1}
            size="sm"
          >
            Next
          </Button>
        </Box>
      </Box>

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
