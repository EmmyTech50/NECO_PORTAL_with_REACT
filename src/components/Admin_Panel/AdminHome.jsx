import React from 'react';
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
  useDisclosure,
} from '@chakra-ui/react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';



const AdminHome = ( ) => { 
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

  return (
    <Box
      flex="1" 
        p={4}
        transition="margin-left 0.3s"
    >    
    
    <div>
      {/* Header */}
      
      <Flex justify="space-between" mb={4} alignItems="center">
        <Text fontSize="2xl" fontWeight="bold">
          Tokens
        </Text>
        <Avatar name="EOtech" />
      </Flex>

      {/* Stats */}
      <Grid templateColumns="repeat(5, 1fr)" gap={4} mb={4}>
        <GridItem bg="gray.100" p={4} borderRadius="md">
          <Text fontSize="md">Total No. of users</Text>
          <Text fontSize="l" fontWeight="bold">
            83457
          </Text>
        </GridItem>
        <GridItem bg="gray.100" p={4} borderRadius="md">
          <Text fontSize="md">Total No. of sold Tokens</Text>
          <Text fontSize="l" fontWeight="bold">
            21457
          </Text>
        </GridItem>
        <GridItem bg="gray.100" p={4} borderRadius="md">
          <Text fontSize="md">Total No. of active Tokens</Text>
          <Text fontSize="l" fontWeight="bold">
            31457
          </Text>
        </GridItem>
        <GridItem bg="gray.100" p={4} borderRadius="md">
          <Text fontSize="md">Total No. of used Tokens</Text>
          <Text fontSize="l" fontWeight="bold">
            23419
          </Text>
        </GridItem>
        <GridItem bg="gray.100" p={4} borderRadius="md">
          <Text fontSize="md">Total amount Realized</Text>
          <Text fontSize="l" fontWeight="bold">
            23419
          </Text>
        </GridItem>
      </Grid>

      {/* Tickets Table */}
      <Table variant="simple">
        <Thead bg="gray.200">
          <Tr>
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
          {tickets.map((ticket) => (
            <Tr key={ticket.id}>
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
                      : '#07bc0c88'
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
                />
                <IconButton aria-label="Delete" icon={<FiTrash2 />} size="sm" />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>

    </Box>
  );
};

export default AdminHome;
