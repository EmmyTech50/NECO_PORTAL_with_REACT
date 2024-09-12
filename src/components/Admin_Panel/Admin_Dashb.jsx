// App.jsx
import React from 'react';
import { BiBarChartAlt } from "react-icons/bi";
import { BiGridAlt } from "react-icons/bi";
import { BiLogOut } from "react-icons/bi";
import { BiLogoBaidu } from "react-icons/bi";
import { MdCurrencyExchange } from "react-icons/md";
import { MdOutlineGeneratingTokens } from "react-icons/md";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Text,
  IconButton,
  Avatar,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
  useDisclosure,
} from '@chakra-ui/react';
import { FiMenu, FiEdit, FiTrash2, FiChevronLeft } from 'react-icons/fi'; // Import required icons

function Admin_Dashb() {
  // Handle the sidebar toggle
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex>
      {/* Sidebar */}
      <Box
        w={isOpen ? '250px' : '60px'} // Sidebar width when open or closed
        h="100vh" // Set height to fill the viewport
        transition="width 0.3s"
        overflow="hidden"
        bg="#07bc0c88"
        color="white"
        position="fixed" // Keep the sidebar fixed on the left side
        display="flex"
        flexDirection="column"
        alignItems="center"
        p={4}
      >
        {/* Toggle Icon inside the sidebar */}
        <IconButton
          aria-label="Toggle Sidebar"
          icon={isOpen ? <FiChevronLeft /> : <FiMenu />}
          onClick={onToggle}
          mb={4}
          alignSelf={isOpen ? 'flex-end' : 'center'}
        />

        {/* Sidebar Content */}
        {isOpen && (
          <Flex direction="column" gap={4} mt={4} w="full">
            <Text fontSize="xl" mb={4} textAlign="center">
              Admin Dashboard
            </Text>
            <Flex alignItems="center" gap={4} cursor="pointer">
            <BiGridAlt />
            <Text>Dashboard</Text>
            </Flex>

            <Flex alignItems="center" gap={4} cursor="pointer">
            <BiLogoBaidu /><Text>Manage Users</Text>
            </Flex>
            
            <Flex alignItems="center" gap={4} cursor="pointer">
            <MdOutlineGeneratingTokens /><Text>Manage Tokens</Text>
            </Flex>

            <Flex alignItems="center" gap={4} cursor="pointer">
            <MdCurrencyExchange /><Text>Transactions</Text>
            </Flex>

            <Flex alignItems="center" gap={4} cursor="pointer">
            <BiBarChartAlt /><Text>Statistic</Text>
            </Flex>

            <Flex alignItems="center" gap={4} cursor="pointer">
            <BiLogOut /><Text>Log-out</Text>
            </Flex>
          </Flex>
        )}
      </Box>

      {/* Main Content */}
      <Box
        flex="1"
        ml={isOpen ? '250px' : '60px'} // Adjust main content margin based on sidebar state
        p={4}
        transition="margin-left 0.3s"
      >
        {/* Header */}
        <Flex justify="space-between" mb={4} alignItems="center">
          <Text fontSize="2xl" fontWeight="bold">
            Tickets
          </Text>
          <Avatar name="Kevin Henry" />
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
            {[
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
              // More rows can be added here
            ].map((ticket) => (
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
                        : 'green'
                    }
                  >
                    {ticket.priority}
                  </Badge>
                </Td>
                <Td>
                  <Badge
                    colorScheme={ticket.status === 'Open' ? 'green' : 'red'}
                  >
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
                  <IconButton
                    aria-label="Delete"
                    icon={<FiTrash2 />}
                    size="sm"
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Flex>
  );
}

export default Admin_Dashb;
