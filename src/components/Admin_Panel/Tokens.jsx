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
  useBreakpointValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  useDisclosure,
} from '@chakra-ui/react';

// Sample token data
const tokensData = [
  { id: 1, name: 'Token A', status: 'Active', type: 'Used' },
  { id: 2, name: 'Token B', status: 'Inactive', type: 'Used' },
  { id: 3, name: 'Token C', status: 'Active', type: 'Active' },
  { id: 4, name: 'Token D', status: 'Inactive', type: 'Used' },
  { id: 5, name: 'Token E', status: 'Active', type: 'Active' },
];

function TokenTable() {
  // Modal controls
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Responsive design adjustment for the table size based on screen size
  const tableSize = useBreakpointValue({ base: 'sm', md: 'md', lg: 'lg' });

  return (
    <Box p={4}>
      {/* Generate Button */}
      <Button colorScheme="teal" mb={4} onClick={onOpen}>
        Generate
      </Button>

      {/* Token Table */}
      <TableContainer>
        <Table variant="striped" colorScheme="gray" size={'sm'}>
          <Thead>
            <Tr>
              <Th>Token Name</Th>
              <Th>Active Tokens</Th>
              <Th>Used Tokens</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tokensData.map((token) => (
              <Tr key={token.id}>
                <Td>{token.name}</Td>
                <Td>{token.type === 'Active' ? 'Yes' : 'No'}</Td>
                <Td>{token.type === 'Used' ? 'Yes' : 'No'}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

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
            <Button colorScheme="teal" mr={3} onClick={onClose}>
              Continue
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default TokenTable;
