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
} from '@chakra-ui/react';
import { FiEdit, FiTrash2, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // For green pagination icons

const AdminHome = () => {
  const tickets = [
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
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Paginate data
  const paginatedTickets = tickets.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  // Handle page change
  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  // Handle rows per page change
  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to first page
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
      <Box boxShadow="sm" borderRadius="md" overflow="hidden" bg="white">
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
            {paginatedTickets.map((ticket, index) => (
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
      </Box>

      {/* Pagination Controls with Green Icons */}
      <Flex mt={4} justifyContent="space-between" alignItems="center">
        {/* Rows per page selection */}
        <Select value={rowsPerPage} onChange={handleRowsPerPageChange} width="120px">
          <option value={5}>5 rows</option>
          <option value={10}>10 rows</option>
          <option value={25}>25 rows</option>
        </Select>

        {/* Page navigation */}
        <Flex alignItems="center">
          <IconButton
            aria-label="Previous page"
            icon={<Icon as={FaChevronLeft} />}
            isDisabled={page === 0}
            onClick={() => handleChangePage(page - 1)}
            mr={2}
            colorScheme="green"
          />
          <Text>
            Page {page + 1} of {Math.ceil(tickets.length / rowsPerPage)}
          </Text>
          <IconButton
            aria-label="Next page"
            icon={<Icon as={FaChevronRight} />}
            isDisabled={page >= Math.ceil(tickets.length / rowsPerPage) - 1}
            onClick={() => handleChangePage(page + 1)}
            ml={2}
            colorScheme="green"
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default AdminHome;
