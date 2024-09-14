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
import { Link, Outlet } from 'react-router-dom';

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

            
            <Flex alignItems="center" gap={4} cursor="pointer" as={Link} to='/Admin/AdminHome'>
              <BiGridAlt /><Text>Dashboard</Text>
            </Flex>  
            

            <Flex alignItems="center" gap={4} cursor="pointer" as={Link} to='/Admin/Users'>
              <BiLogoBaidu /><Text>Manage Users</Text>
            </Flex>
            
            <Flex alignItems="center" gap={4} cursor="pointer" as={Link} to='/Admin/Tokens'>
            <MdOutlineGeneratingTokens /><Text>Manage Tokens</Text>
            </Flex>

            <Flex alignItems="center" gap={4} cursor="pointer" as={Link} to='/Admin/Transaction'>
            <MdCurrencyExchange /><Text>Transactions</Text>
            </Flex>

            <Flex alignItems="center" gap={4} cursor="pointer" as={Link} to='/Admin/Manage_Admin'>
            <BiBarChartAlt /><Text>Manage Admin</Text>
            </Flex>

            <Flex alignItems="center" gap={4} cursor="pointer" as={Link} to='/LoginPage'>
            <BiLogOut /><Text>Log-out</Text>
            </Flex>
          </Flex>
        )}
      </Box>

      {/* This is where the chldren links will display */}
      <Box
          flex="1"
            ml={isOpen ? '250px' : '60px'} // Adjust main content margin based on sidebar state
            p={4}
            transition="margin-left 0.3s"
        > 
       <Outlet/>

    </Box>

      
    </Flex>
  );
}

export default Admin_Dashb;
