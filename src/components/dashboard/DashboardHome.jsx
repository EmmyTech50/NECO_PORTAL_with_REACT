import React from 'react'
import { Box, Button, FormControl, FormLabel, 
         Grid, GridItem, HStack, Heading, Image, Input, 
         Menu, MenuButton, MenuItem, MenuList, Modal, ModalBody, 
         ModalCloseButton, ModalContent, ModalFooter, ModalHeader, 
         ModalOverlay,  Stack, Text, useDisclosure 
        } 
from '@chakra-ui/react'
import { Outlet,  Link , useNavigate} from "react-router-dom";
import Logo from '../../assets/neco_logo.svg'
import {ChevronDownIcon} from '@chakra-ui/icons'
import Dashboard from '../../assets/dashboard.svg'
import MyT from '../../assets/mytoken.svg'
import Profile from '../../assets/Profile.svg'
import CheckR from '../../assets/checkresult.svg'
import ResultH from '../../assets/resulthistory.svg'
import Transaction from '../../assets/transaction.svg'










function DashboardHome() {

  const { isOpen, onOpen, onClose } = useDisclosure()

  const navigate = useNavigate();

  const Logout = ()=>{  navigate('/') }

  return (
   

    <Box>

      <Grid
        h='100vh'
        templateRows='repeat(1, 1fr)'
        templateColumns='repeat(5, 1fr)'
          width='100%'
      > 
            <GridItem h='100vh' bg='#51b55f' px='4'>
               
              <Box>
              

                <Stack >
                  <Box py={4}>
                    <Image src={Logo} />
                  </Box>
                
                  <HStack py={4} >
                    <Link to='/app/home' bg='white' >  <Image src={Dashboard}/> </Link>
                    <Link to='/app/home' color={'white'}>  Dashboard </Link>
                  </HStack>


                  <HStack py={4}>
                    <Link to='/app/my-token' color={'white'}> <Image src={MyT} bg='white'/> </Link>
                    <Link to='/app/my-token' color={'white'}> MyToken </Link>
                    
                  </HStack>

                  <HStack py={4}>
                    <Image src={CheckR} bg='white'/>
                    <Link onClick={onOpen} color={'white'}>Check Result</Link>
                    <Modal isOpen={isOpen} onClose={onClose}>
                      <ModalOverlay />
                      <ModalContent>
                          <ModalHeader>
                            <Heading as='h4' size='md'>Check Result</Heading>
                          </ModalHeader>
                          <ModalCloseButton />
                          <ModalBody>
                            <Box>
                              <Text fontSize='15px'>Each token can be used with only one result for a specific <br/>
                                    number of views
                              </Text>
                              <FormControl mt='10px'>
                                <FormLabel>Token Number</FormLabel>
                                <Input type='Number' placeholder='Token eg(0000 0000 0000)' variant='filled'/>
                                <FormLabel>Examination Number</FormLabel>
                                <Input type='Number' placeholder='Registration Number' variant='filled'/>
                                <FormLabel>Examination Year</FormLabel>
                                <Input type='Number' placeholder='Examination Year' variant='filled'/>
                                <FormLabel>Examination Type</FormLabel>
                                <Input type='Text' placeholder='Examination Type' variant='filled'/>
                              </FormControl>
                            </Box>
                            
                          </ModalBody>

                          <ModalFooter>
                            <Stack>
                              <HStack>
                                <Box w='100%'>
                                  <Button w='100%' outlineColor='#51b55f' color='#51b55f' onClick={onClose}>
                                    Cancel
                                  </Button>
                                </Box>

                                <Box w='100%'>
                                  <Button w='100%' bg='#51b55f' color='#fff'>Check Result</Button>
                                </Box>
                              </HStack>
                            </Stack>
                          
                          
                          </ModalFooter>
                      </ModalContent>
                    </Modal>
                  </HStack>

                  <HStack py={4}>
                    <Link to='/app/result_history' color={'white'}> <Image src={ResultH} bg='white'/> </Link>
                    <Link to='/app/result_history' color={'white'}> Result History </Link>
                  </HStack>

                  <HStack py={4}>
                    <Link to='/app/transaction' color={'white'}> <Image src={Transaction} bg='white'/> </Link>
                    <Link to='/app/transaction' color={'white'}> Transaction </Link>
                  </HStack>

                  <HStack py={4} >
                    <Link to='/app/profile' color={'white'}> <Image src={Profile} bg='white' /> </Link>
                    <Link to='/app/profile' color={'white'}> Profile </Link>
                  </HStack>

                </Stack>

              </Box> 

              

            </GridItem>
          
            <GridItem h='100vh' width='100%' colSpan='4'>
              <HStack height='50' bg='lavender' w='100%' display='flex' px='4' justifyContent='space-between' alignItems='center'>
                  <Text>RESULT PORTAL</Text> 
                  <Menu>
                    <MenuButton bgColor='lavender' as={Button} rightIcon={<ChevronDownIcon />}>
                      Onogwu Emmanuel<br/>
                      emmagospelnews@gmail.com
                    </MenuButton>
                    <MenuList>
                      <MenuItem>
                         <Link to='/app/profile' color={'white'}>Profile</Link> 
                      </MenuItem>
                      <MenuItem onClick={Logout}> Logout </MenuItem>
                      
                    </MenuList>
                  </Menu>
              </HStack>

              {/* this is where all the body items will load in */}
              <Outlet></Outlet>

            </GridItem>
           










      </Grid>

    </Box>

    
            

   
  
    
  )
}

export default DashboardHome