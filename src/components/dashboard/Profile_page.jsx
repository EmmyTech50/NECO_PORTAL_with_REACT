import React from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Box, Button, Grid, GridItem, Heading, 
         Input, InputGroup, InputRightElement, Text 
       } 
from '@chakra-ui/react'

function Profile_page() {

    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
  
  return (
    <Box>

        <Grid
        h='100vh'
        templateRows='repeat(1, 1fr)'
        templateColumns='repeat(1, 1fr)'
            width='100%'
        > 

            <GridItem className='right_container' h='100vh' width='100%'  overflowY='scroll' overflowX='hidden'>

                <Box mt='10'>
                <Heading as={'h6'} size={'m'} px='4'> Profile </Heading>
                </Box>

                

                <Box mx={'4'} mt='40px'>
                   <Box >
                        Profile Information
                   </Box>
                   <Box borderBottom='2px solid lavender' mt='20px'></Box>
                   
                   <Box>
                        
                            <Text>Full Name </Text>
                            <Box w='100%' display='flex' justifyContent='center' alignItems='center' mx='20px'>
                                <Input variant='filled' placeholder='Sur Name ' w='141px' h='50px' mr='5px' ml='4px'/> 
                                <Input variant='filled' placeholder='Middle Name ' w='145px' h='50px' mr='5px'/>   
                                <Input variant='filled' placeholder='Last Name ' w='144px' h='50px' ml='2px' mr='4px'/>  
                            </Box> 
                        
                        <Box borderBottom='2px solid lavender' mt='20px'></Box>    
                                        
                   </Box>
                  

                   <Box>      
                        
                            <Text>Email </Text> 
                            <Box w='100%' display='flex' justifyContent='center' alignItems='center' mx='20px'>
                                <Input variant='filled' placeholder='emmagospelnews@gmail.com ' w='450px' h='50px' mx='10px'/> 
                                
                            </Box> 
                                
                        <Box borderBottom='2px solid lavender' mt='20px'></Box>        
                            
                   </Box>

                   <Box>
                                                  
                        <Text>Phone Number </Text> 
                        <Box w='100%' display='flex' justifyContent='center' alignItems='center' mx='20px'>
                            <Input variant='filled' placeholder='09136852845 ' w='450px' h='50px' mx='10px'/> 
                            
                        </Box>

                        
                        <Heading as={'h6'} size={'md'} mb='5px'>Change Password</Heading>
                        <Text>You can change your password here</Text> 
                        <Box borderBottom='2px solid lavender' mt='20px'></Box> 
                                                        
                   </Box>

                    <Box>  

                        <Text>Current Password </Text> 

                        <Box w='100%' display='flex' justifyContent='center' alignItems='center' mx='20px'>

                            <InputGroup size='md' variant='filled' w='450px' h='50px' mx='10px'>
                                <Input type={show ? 'text' : 'password'} placeholder='Enter password' />
                                <InputRightElement width='4.5rem'>
                                    <Button  size='sm' onClick={handleClick}>
                                    {show ? <ViewOffIcon/> : <ViewIcon/>}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>    
                                    
                        </Box>
                        <Box borderBottom='2px solid lavender' mt='20px'></Box>
                                
                    </Box>

                    <Box>  

                        <Text>New Password </Text> 

                        <Box w='100%' display='flex' justifyContent='center' alignItems='center' mx='20px'>

                            <InputGroup size='md' variant='filled' w='450px' h='50px' mx='10px'>
                                <Input type={show ? 'text' : 'password'} placeholder='Enter password' />
                                <InputRightElement width='4.5rem'>
                                    <Button  size='sm' onClick={handleClick}>
                                    {show ? <ViewOffIcon/> : <ViewIcon/>}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>    
                                    
                        </Box>
                        <Box borderBottom='2px solid lavender' mt='20px'></Box>
        
                    </Box>

                    <Box>  

                        <Text>Confirm Password </Text> 

                        <Box w='100%' display='flex' justifyContent='center' alignItems='center' mx='20px'>

                            <InputGroup size='md' variant='filled' w='450px' h='50px' mx='10px'>
                                <Input type={show ? 'text' : 'password'} placeholder='Enter password' />
                                <InputRightElement width='4.5rem'>
                                    <Button  size='sm' onClick={handleClick}>
                                    {show ? <ViewOffIcon/> : <ViewIcon/>}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>           
                        </Box>

                        <Box w='100%' mx='30px' mt='10px'>
                            <Button bgColor='#51b55f' color='#fff' float='right' w='200px' mr='29.5%'> Save</Button>
                        </Box>
                                
                    </Box>
                    
                </Box>   
               
                
                
                
                

            </GridItem>










        </Grid>

    </Box>
  )
}

export default Profile_page