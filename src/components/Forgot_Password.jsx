import React from 'react'
import { Grid, Box, Image, Heading, Text, FormControl, Input , Link ,Button, FormHelperText, FormLabel, FormErrorMessage, Stack, VStack} from '@chakra-ui/react'
import Lock from '../assets/lock.svg'
import {ArrowBackIcon, LockIcon} from '@chakra-ui/icons'

function Forgot_Password() {

  // for email input
  const [input, setInput] = React.useState('')
  const handleInputChange = (e) => setInput(e.target.value)
  const isError = input === ''


  return (
    <Grid display='flex' alignItems='center' justifyContent='center' mt='70'>
        <Box >
            <Stack>

              <VStack>

              <LockIcon/>

              <Heading  as='h4' size='md'>Reset Password</Heading>

              <Text>
                  Enter the email associated with your account and we <br />
                  will send an email with instructions to reset your <br />
                  password.
              </Text>

              </VStack>
            </Stack>
            

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
              <FormControl> 
                   <Button  bg='#07bc0c88'    w='100%'  mt='30'> 
                      <Link href='#' color='white'>  Reset Password </Link>
                   </Button>
               </FormControl>

                <Box   >

                <ArrowBackIcon color='#07bc0c88'/>
                <Link href='/login' color='#07bc0c88'  >Back To Login</Link>
                </Box>

        </Box>
    </Grid>
  )
}

export default Forgot_Password