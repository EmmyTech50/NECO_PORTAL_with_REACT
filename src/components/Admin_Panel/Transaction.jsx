import React, { useState } from 'react';
import { ArrowLeftIcon, ArrowRightIcon, Search2Icon } from '@chakra-ui/icons';
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
  Select,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  useBreakpointValue,
} from '@chakra-ui/react';

const AdminTransactions = () => {
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Example data (Replace with dynamic data from API or state)
  const transactions = [
    { ref: '123456', rrr: '123456789', date: '2024-09-12', payer: 'John Doe', amount: '10,000', status: 'Completed' },
    { ref: '654321', rrr: '987654321', date: '2024-09-10', payer: 'Jane Smith', amount: '5,000', status: 'Pending' },
    // Add more transaction objects as needed
  ];

  // Calculate total pages
  const totalPages = Math.ceil(transactions.length / rowsPerPage);

  // Get the current page's transactions
  const currentTransactions = transactions.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  // Dynamic input size based on screen size for better responsiveness
  const inputSize = useBreakpointValue({ base: 'md', md: 'lg' });

  return (
    <Box p={4}>
      <Heading as="h6" size="md" mb={6}>
        Admin Transactions
      </Heading>

      {/* Search and Filter Controls */}
      <Flex
        direction={{ base: 'column', md: 'row' }}
        alignItems="center"
        justifyContent="space-between"
        gap={4}
        mb={6}
        flexWrap="wrap"
      >
        {/* Search and Filter Inputs */}
        <Flex gap={4} flexWrap="wrap">
          <FormControl w={{ base: 'full', md: '330px' }} bg="#e0e0e0" borderRadius="5px">
            <InputGroup>
              <InputRightElement pointerEvents="none">
                <Search2Icon color="black" />
              </InputRightElement>
              <Input
                type="text"
                placeholder="Search by reference number"
                size={inputSize}
                bg="white"
              />
            </InputGroup>
          </FormControl>

          <Select placeholder="Status" w={{ base: 'full', md: '150px' }} bg="#e0e0e0" size={inputSize}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
            <option value="failed">Failed</option>
          </Select>

          <Input
            placeholder="Select Date"
            type="date"
            w={{ base: 'full', md: '150px' }}
            bg="#e0e0e0"
            size={inputSize}
          />
        </Flex>

        {/* Admin Action Buttons */}
        <Flex gap={4}>
          <Button colorScheme="blue" borderRadius="5px">
            Export CSV
          </Button>
          <Button colorScheme="red" borderRadius="5px">
            Bulk Action
          </Button>
        </Flex>
      </Flex>

      {/* Transactions Table */}
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
            Transactions Overview
          </Heading>
        </CardHeader>

        <CardBody p={4}>
          {/* Responsive Table */}
          <Table variant="striped" colorScheme="gray" size="sm">
            <Thead>
              <Tr>
                <Th>Reference</Th>
                <Th>RRR</Th>
                <Th>Date</Th>
                <Th>Payer</Th>
                <Th>Amount (₦)</Th>
                <Th>Status</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {currentTransactions.map((transaction, index) => (
                <Tr key={index}>
                  <Td>{transaction.ref}</Td>
                  <Td>{transaction.rrr}</Td>
                  <Td>{transaction.date}</Td>
                  <Td>{transaction.payer}</Td>
                  <Td>{transaction.amount}</Td>
                  <Td>{transaction.status}</Td>
                  <Td>
                    <Button size="sm" colorScheme="green">
                      View
                    </Button>
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
          <Select
            variant="filled"
            placeholder="Rows per page"
            size="lg"
            w="auto"
            onChange={(e) => setRowsPerPage(Number(e.target.value))}
          >
            <option value="10">10 Rows</option>
            <option value="20">20 Rows</option>
            <option value="30">30 Rows</option>
          </Select>

          <Text>
            Page {currentPage} of {totalPages}
          </Text>

          <Flex gap={2}>
            <Button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              isDisabled={currentPage === 1}
              colorScheme="green"
            >
              <ArrowLeftIcon color="white" />
            </Button>
            <Button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              isDisabled={currentPage === totalPages}
              colorScheme="green"
            >
              <ArrowRightIcon color="white" />
            </Button>
          </Flex>
        </CardFooter>
      </Card>
    </Box>
  );
}

export default AdminTransactions;
