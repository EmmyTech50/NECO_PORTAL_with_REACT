import React, { useEffect } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import Logo from '../../assets/neco_logo.svg';
import { ChevronDownIcon } from '@chakra-ui/icons';
import Dashboard from '../../assets/dashboard.svg';
import MyT from '../../assets/mytoken.svg';
import Profile from '../../../iconFolder/profile.svg';
import CheckR from '../../assets/checkresult.svg';
import ResultH from '../../assets/resulthistory.svg';
import Transaction from '../../assets/transaction.svg';

function DashboardHome() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const loc = useLocation();


useEffect( ()=>{
  if(loc.pathname == "/app"){
    navigate("/app/home");
}
},[loc]);

  const Logout = () => {
    navigate('/');
  };

  return (
    <Box>
      <Grid
        h="100vh"
        templateRows={{ base: 'auto 1fr', md: '1fr' }}
        templateColumns={{ base: '1fr', md: 'repeat(5, 1fr)' }}
        width="100%"
      >
        {/* Sidebar */}
        <GridItem
          h={{ base: 'auto', md: '100vh' }}
          bg="#51b55f"
          px={{ base: 2, md: 4 }}
          py={{ base: 4, md: 0 }}
        >
          <Stack spacing={{ base: 3, md: 5 }}>
            <Box py={4} display="flex" justifyContent="center">
              <Image src={Logo} boxSize="50px" />
            </Box>

            {[
              { label: 'Dashboard', link: '/app/home', icon: Dashboard },
              { label: 'MyToken', link: '/app/my-token', icon: MyT },
              { label: 'Check Result', link: '#', icon: CheckR, onClick: onOpen },
              { label: 'Result History', link: '/app/result_history', icon: ResultH },
              { label: 'Transaction', link: '/app/transaction', icon: Transaction },
              { label: 'Profile', link: '/app/profile', icon: Profile },
            ].map((item, index) => (
              <HStack py={2} key={index} onClick={item.onClick}>
                <Link to={item.link}>
                  <Image src={item.icon} boxSize="20px" />
                </Link>
                <Link to={item.link} color="white">
                  {item.label}
                </Link>
              </HStack>
            ))}
          </Stack>
        </GridItem>

        {/* Main Content */}
        <GridItem colSpan={{ base: 1, md: 4 }} h="100vh">
          <HStack
            height="50px"
            bg="lavender"
            w="100%"
            px={4}
            justifyContent="space-between"
            alignItems="center"
          >
            <Text fontSize="lg" fontWeight="bold">
              RESULT PORTAL
            </Text>
            <Menu>
              <MenuButton as={Button} bg="lavender" rightIcon={<ChevronDownIcon />}>
                Onogwu Emmanuel
                <br />
                emmagospelnews@gmail.com
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <Link to="/app/profile">Profile</Link>
                </MenuItem>
                <MenuItem onClick={Logout}>Logout</MenuItem>
              </MenuList>
            </Menu>
          </HStack>

               {/* show the other pages */}
               <Outlet />
        </GridItem>
      </Grid>

      {/* Check Result Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Heading as="h4" size="md">
              Check Result
            </Heading>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Text fontSize="sm">
                Each token can be used with only one result for a specific number of views.
              </Text>
              <FormControl mt={4}>
                <FormLabel>Token Number</FormLabel>
                <Input type="number" placeholder="Token e.g., 0000 0000 0000" variant="filled" />
                <FormLabel mt={2}>Examination Number</FormLabel>
                <Input type="number" placeholder="Registration Number" variant="filled" />
                <FormLabel mt={2}>Examination Year</FormLabel>
                <Input type="number" placeholder="Examination Year" variant="filled" />
                <FormLabel mt={2}>Examination Type</FormLabel>
                <Input type="text" placeholder="Examination Type" variant="filled" />
              </FormControl>
            </Box>
          </ModalBody>
          <ModalFooter>
            <HStack w="100%">
              <Button w="50%" colorScheme="gray" onClick={onClose}>
                Cancel
              </Button>
              <Button w="50%" bg="#51b55f" color="white">
                Check Result
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default DashboardHome;
