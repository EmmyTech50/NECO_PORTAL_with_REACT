import React, { useState } from 'react';
import {
  Flex,
  Text,
  Avatar,
  Grid,
  GridItem,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
  IconButton,
  Box,
  Select,
  Button,
  Icon,
  Card,
  CardBody,
  CardFooter,
} from '@chakra-ui/react';
import { FiEdit, FiTrash2, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // For green pagination icons
import { ArrowLeftIcon, ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const AdminHome = () => {
  const Tickets = [
    {
      id: '#9854',
      name: 'Jose D.',
      subject: 'Support for theme',
      assignee: 'John',
      priority: 'Medium',
      status: 'Open',
      createDate: '01/09/2021',
      dueDate: '03/09/2021',
    },
    {
      id: '#3264',
      name: 'E. Brown',
      subject: 'Your application received',
      assignee: 'Jane',
      priority: 'Low',
      status: 'Closed',
      createDate: '01/09/2021',
      dueDate: '05/09/2021',
    },
    {
      id: '#4670',
      name: 'Goran',
      subject: 'Verify your email',
      assignee: 'Sarah',
      priority: 'High',
      status: 'Open',
      createDate: '01/09/2021',
      dueDate: '14/09/2021',
    },
    // Add more tickets as needed
  ];

  const [page, setPage] = useState(0);
  const [initialTickets, setInitialTickets] = useState(Tickets);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // // Paginate data
  // const paginatedTickets = tickets.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  // Handle page change
  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  // Pagination calculations
  const totalPages = Math.ceil(initialTickets.length / itemsPerPage);
  const paginatedinitialTickets = initialTickets.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle rows per page change
  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to first page
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handle page changes
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <Box p={6} boxShadow="lg" bg="white" borderRadius="lg">
      {/* Header */}
      <Flex justify="space-between" mb={4} alignItems="center">
        <Text fontSize="2xl" fontWeight="bold" color="gray.700">
          Tokens
        </Text>
        <Avatar name="EOtech" />
      </Flex>

      {/* Stats */}
      <Grid templateColumns="repeat(5, 1fr)" gap={4} mb={6}>
        <GridItem bg="gray.50" p={4} borderRadius="md" boxShadow="sm">
          <Text fontSize="md" color="gray.600">Total No. of users</Text>
          <Text fontSize="xl" fontWeight="bold" color="gray.800">
            83,457
          </Text>
        </GridItem>
        <GridItem bg="gray.50" p={4} borderRadius="md" boxShadow="sm">
          <Text fontSize="md" color="gray.600">Total No. of sold Tokens</Text>
          <Text fontSize="xl" fontWeight="bold" color="gray.800">
            21,457
          </Text>
        </GridItem>
        <GridItem bg="gray.50" p={4} borderRadius="md" boxShadow="sm">
          <Text fontSize="md" color="gray.600">Total No. of active Tokens</Text>
          <Text fontSize="xl" fontWeight="bold" color="gray.800">
            31,457
          </Text>
        </GridItem>
        <GridItem bg="gray.50" p={4} borderRadius="md" boxShadow="sm">
          <Text fontSize="md" color="gray.600">Total No. of used Tokens</Text>
          <Text fontSize="xl" fontWeight="bold" color="gray.800">
            23,419
          </Text>
        </GridItem>
        <GridItem bg="gray.50" p={4} borderRadius="md" boxShadow="sm">
          <Text fontSize="md" color="gray.600">Total amount Realized</Text>
          <Text fontSize="xl" fontWeight="bold" color="gray.800">
            234,190
          </Text>
        </GridItem>
      </Grid>

      {/* Tickets Table */}
      <Card border="2px solid #e0e0e0">

        <CardBody p={4}>
          <Table variant="simple" size="sm" border="1px solid" borderColor="gray.200">
            <Thead bg="gray.100">
              <Tr>
                <Th>Row</Th>
                <Th>ID</Th>
                <Th>Requested By</Th>
                <Th>Subject</Th>
                <Th>Assignee</Th>
                <Th>Priority</Th>
                <Th>Status</Th>
                <Th>Create Date</Th>
                <Th>Due Date</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {paginatedinitialTickets.map((ticket, index) => (
                <Tr key={ticket.id} _hover={{ bg: 'gray.50' }}>
                  {/* Row Number */}
                  <Td color="green.500">{index + 1 + page * rowsPerPage}</Td>
                  <Td>{ticket.id}</Td>
                  <Td>{ticket.name}</Td>
                  <Td>{ticket.subject}</Td>
                  <Td>
                    <Avatar size="sm" name={ticket.assignee} />
                  </Td>
                  <Td>
                    <Badge
                      colorScheme={
                        ticket.priority === 'High'
                          ? 'red'
                          : ticket.priority === 'Medium'
                          ? 'yellow'
                          : 'green'
                      }
                    >
                      {ticket.priority}
                    </Badge>
                  </Td>
                  <Td>
                    <Badge colorScheme={ticket.status === 'Open' ? 'green' : 'red'}>
                      {ticket.status}
                    </Badge>
                  </Td>
                  <Td>{ticket.createDate}</Td>
                  <Td>{ticket.dueDate}</Td>
                  <Td>
                    <IconButton
                      aria-label="Edit"
                      icon={<FiEdit />}
                      size="sm"
                      mr={2}
                      colorScheme={'green'}
                    />
                    <IconButton
                      aria-label="Delete"
                      icon={<FiTrash2 />}
                      size="sm"
                      colorScheme={'red'}
                    />
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

      
      
          
          
        
      
    </Box>
  );
};

export default AdminHome;
