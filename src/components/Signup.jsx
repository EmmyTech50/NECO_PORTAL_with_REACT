import React from 'react'
import { Grid, GridItem, Box, Heading, 
  Stack,Text,  HStack, VStack, 
  Select, FormControl, Input, Button, Link
} from '@chakra-ui/react'
import Leftpart from './common/Leftpart';

function Signup() {
  const Years = Array.from({ length: 2023 - 2000 + 1 }, (_, index) => 2000 + index);
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
                <Heading>Check Result</Heading>                        
                 <Select variant='filled' placeholder='Examination Year'>
                    {  Years.map( (val, index) =>( <option value={val} key={index}> {val}</option>) )  }
                </Select>

                <Select variant='filled'>
                  <option disabled={true}>Examination Type</option>
                  <option value="ssce_int">SSCE INTERNAL</option>
                  <option value="ssce_ext">SSCE EXTERNAL</option>
                  <option value="bece">BECE</option>
                  <option value="ncee">NCEE</option>
                  <option value="gifted">GIFTED</option>
               </Select>

               <FormControl > 
                  <Input type='text' placeholder ="Token Eg (0000 0000 0000)" variant='filled'/> 
              </FormControl>

               <FormControl> 
                  <Input type='text' placeholder ="Registration Number" variant='filled' /> 
              </FormControl>

               <FormControl> 
                   <Button colorScheme='green' w= '100%'> Check Result </Button>
              </FormControl>
                  <Text> or </Text>
                  <Text fontSize={12.5}> Don’t have a token to check your result? Purchase token with the button below</Text>
               <FormControl> 
                   <Button colorScheme='blue' w= '100%'> 
                      <Link href='/login' color="white.600">  Purchase Token </Link>
                   </Button>
              </FormControl>

              <HStack>
                  <Text>Already have an account?</Text>
                  <Link href='/login' color="blue.600"> Login here  </Link>
              </HStack> 

              <VStack>
                  <Link href='/Create_account' color="green.600"> Create Account  </Link>
              </VStack>

          </VStack>

        
    </Box>
          

    </Stack>
    </GridItem> 

    </Grid>
  )
}

export default Signup