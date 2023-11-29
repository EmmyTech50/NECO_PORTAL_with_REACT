import React from 'react'
import { Grid, GridItem, Box, Heading, 
  Stack,Text,  HStack, VStack, 
  FormControl, Input, Button, Link,InputRightElement,InputGroup, FormLabel, FormHelperText, FormErrorMessage
} from '@chakra-ui/react'
import {ViewIcon} from '@chakra-ui/icons'
import {ViewOffIcon} from '@chakra-ui/icons'

import Leftpart from './common/Leftpart';

function Login() {

  // for email
  const [input, setInput] = React.useState('')
  const handleInputChange = (e) => setInput(e.target.value)
  const isError = input === ''

  // for select
  const Years = Array.from({ length: 2023 - 2000 + 1 }, (_, index) => 2000 + index);

  //  for password
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

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
                <Heading fontSize='2xl'>Login to your account</Heading>                        
                <Heading as='h5' size='sm'>Login with your email address & password.</Heading>                       

                <FormControl isInvalid={isError} mt='5' >
                  <FormLabel>Email</FormLabel>
                    <Input type='email' value={input} onChange={handleInputChange} w='100%' variant='filled' placeholder='emmagospelnews@gmail.com' />
                    {!isError ? (
                      <FormHelperText>
                        Enter the email you'd like to receive the newsletter on.
                      </FormHelperText>
                    ) : (
                      <FormErrorMessage>Email is required.</FormErrorMessage>
                    )}
                </FormControl>


               <FormControl mt='5'>
                  <label htmlFor="">Password</label>
                  <InputGroup size='md'>
                      <Input
                        variant='filled'
                        type={show ? 'text' : 'password'}
                        placeholder='Enter password'
                      
                      />
                      <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                          {show ? <ViewIcon/> : <ViewOffIcon/>}
                        </Button>
                      </InputRightElement>
                  </InputGroup>

              </FormControl>

               <FormControl mt='5'> 
                   <Button bg='#07bc0c88' w= '100%' color={'white'}> Login </Button>
              </FormControl>

              <Link href='/Forgot_Password' color="green" fontSize='md' mr="300"> Forgot Password  </Link>

               <FormControl mt='2'> 
                   <Button border='2px' borderColor='blue'  w= '100%'> 
                      <Link href='/login' color="blue">  Check Result Here </Link>
                   </Button>
               </FormControl>

              <HStack>
                  <Text  mr="20" >Don't have an account?</Text>
                  <Link href='/Create_account' color="green" fontSize='md' mr="30">  Create account here  </Link>
              </HStack> 

          </VStack>

        
    </Box>
          

    </Stack>
    </GridItem> 

    </Grid>
  )
}

export default Login