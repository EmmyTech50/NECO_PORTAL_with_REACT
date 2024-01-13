import React from 'react'
import { Grid, GridItem, Box, Heading, 
  Stack,Text,  HStack, VStack, 
  FormControl, Input, Button, Link,InputRightElement,InputGroup,SimpleGrid, FormLabel, FormErrorMessage
} from '@chakra-ui/react'

import {ViewIcon} from '@chakra-ui/icons'
import {ViewOffIcon} from '@chakra-ui/icons'

import Leftpart from './common/Leftpart';

function Create_account() {

    // for select
    const Years = Array.from({ length: 2023 - 2000 + 1 }, (_, index) => 2000 + index);

    // for password
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    // for user inputs
    const [fname, setFname]   = React.useState('');
    const [mdname, setMdName] = React.useState('');
    const [lname, setLname]   = React.useState('');
    const [email, setEmail]   = React.useState('');
    const [phone, setPhone]       = React.useState('');
    const [password, setPassword] = React.useState('');
    const [comfirm_pass, setComfirmPassword] = React.useState('');

    const isError = '';

    return (
        <Grid
          h='100vh'
          templateRows='repeat(1, 1fr)'
          templateColumns='repeat(5, 1fr)'
          gap={1/2}
        > 
        <Leftpart/>
        <GridItem colSpan={3} bg='#fff'  h='100vh' >
        <Stack 
          display='flex'
          justifyContent='center' 
          alignItems='center'
          w = '100%' 
        > 
         <Box   h='90vh' w ='55%' margin='auto' mt='5vh'>
               <VStack spacing={3}> 
                    <Heading mr='51'>Create a new account</Heading>                        
                    <Heading as='h5' size='sm' mr='31'>Create an account by filling the information below</Heading>                       
    
                    <SimpleGrid columns={2} spacing={3}>

                       
                        <FormControl isInvalid={isError}  >
                          <FormLabel>First Name</FormLabel>
                            <Input type='text' value={fname} onChange={ (e)=> setFname(e.target.value) } w='100%' variant='filled' placeholder='First Name' />
                            {!isError ? (
                             ''
                            ) : (
                              <FormErrorMessage>First Name is required.</FormErrorMessage>
                            )}
                        </FormControl>
                        
                        

                         
                        <FormControl isInvalid={isError}>
                          <FormLabel>Middle Name</FormLabel>
                            <Input type='text' value={mdname} onChange={ (e)=> setMdName(e.target.value)} w='100%' variant='filled' placeholder='Middle Name' />
                            {!isError ? (
                              ''
                            ) : (
                              <FormErrorMessage>Middle name is required.</FormErrorMessage>
                            )}
                        </FormControl>
                        

                       
                        <FormControl isInvalid={isError} >
                          <FormLabel>Last Name</FormLabel>
                            <Input type='email' value={lname} onChange={ (e)=> setLname(e.target.value)} w='100%' variant='filled' placeholder='Last Name' />
                            {!isError ? (
                             ''
                            ) : (
                              <FormErrorMessage>Last Name is required.</FormErrorMessage>
                            )}
                        </FormControl>
                        

                        
                        <FormControl isInvalid={isError}  >
                          <FormLabel>Email</FormLabel>
                            <Input type='email' value={email} onChange={ (e)=> setEmail(e.target.value)} w='100%' variant='filled' placeholder='emmagospelnews@gmail.com' />
                            {!isError ? (
                              ''
                            ) : (
                              <FormErrorMessage>Email is required.</FormErrorMessage>
                            )}
                        </FormControl>
                        

                        
                        <FormControl isInvalid={isError}  >
                          <FormLabel>Phone Number</FormLabel>
                            <Input type='number' value={phone} onChange={ (e)=> setPhone(e.target.value)} w='100%' variant='filled' placeholder='080--' />
                            {!isError ? (
                              ''
                            ) : (
                              <FormErrorMessage>Phnone number is required.</FormErrorMessage>
                            )}
                        </FormControl>
                        

                        
                        <FormControl >
                            <label htmlFor="">Password</label>
                            <InputGroup size='md'>
                                <Input
                                  variant='filled'
                                  type={show ? 'text' : 'password'}
                                  placeholder='Enter password'
                                  value={password}
                                  onChange={ (e)=> setPassword(e.target.value)}
                                />
                                <InputRightElement width='4.5rem'>
                                  <Button h='1.75rem' size='sm' onClick={handleClick}>
                                    {show ? <ViewIcon/> : <ViewOffIcon/>}
                                  </Button>
                                </InputRightElement>
                            </InputGroup>

                        </FormControl> 
                        

                        <FormControl >
                            <label htmlFor="">Confirm Password</label>
                            <InputGroup size='md'>
                                <Input
                                  variant='filled'
                                  type={show ? 'text' : 'password'}
                                  placeholder='Confirm password'
                                  value={comfirm_pass}
                                  onChange={ (e)=> setComfirmPassword(e.target.value)}
                                />
                                <InputRightElement width='4.5rem'>
                                  <Button h='1.75rem' size='sm' onClick={handleClick}>
                                    {show ? <ViewIcon/> : <ViewOffIcon/>}
                                  </Button>
                                </InputRightElement>
                            </InputGroup>

                        </FormControl> 
                       
                    </SimpleGrid>
    
    
                   
                       <Button bg='#07bc0c88' w= '100%'> Create Account </Button>
                  
    
                   
                       <Button border='2px' borderColor='blue'  w= '100%'> 
                          <Link href='/create-account' color="blue">  Check Result Here </Link>
                       </Button>
                   
    
                  <HStack>
                      <Text  mr="20" >Don't have an account?</Text>
                      <Link href='/login' color='#07bc0c88' fontSize='md' mr="30">  Login Here  </Link>
                  </HStack> 
    
              </VStack>
    
            
        </Box>
              
    
        </Stack>
        </GridItem> 
    
        </Grid>
      )
}

export default Create_account