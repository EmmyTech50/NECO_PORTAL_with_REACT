import React from 'react'
import { ArrowLeftIcon, ArrowRightIcon, ChevronDownIcon, Search2Icon } from '@chakra-ui/icons'
import { Box, Button, Card, CardBody, CardFooter, CardHeader, 
         FormControl, Grid, GridItem, HStack, Heading, Image, 
         Input, InputGroup, InputRightElement, Menu, MenuButton, 
         MenuItem, MenuList, Select, Stack, Text 
        } 
from '@chakra-ui/react'
import Logo from '../../assets/neco_logo.svg'
import Dashboard from '../../assets/dashboard.svg'
import MyT from '../../assets/mytoken.svg'
import CheckR from '../../assets/checkresult.svg'
import ResultH from '../../assets/resulthistory.svg'
import Transaction from '../../assets/transaction.svg'
import Profile from '../../assets/profile.svg'

function ResultHistory() {
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
                    
                        <HStack py={4}>
                        <Image src={Dashboard} bg='white'/>
                        <Text color='white'> Dashboard </Text>
                        </HStack>

                        <HStack py={4}>
                        <Image src={MyT} bg='white'/>
                        <Text color='white'> MyToken</Text>
                        </HStack>

                        <HStack py={4}>
                        <Image src={CheckR} bg='white'/>
                        <Text color='white'> Check Result </Text>
                        </HStack>

                        <HStack py={4}>
                        <Image src={ResultH} bg='white'/>
                        <Text color='white'> Result History </Text>
                        </HStack>

                        <HStack py={4}>
                        <Image src={Transaction} bg='white'/>
                        <Text color='white'> Transaction </Text>
                        </HStack>

                        <HStack py={4} >
                        <Image src={Profile} bg='white' />
                        <Text color='white'> Profile </Text>
                        </HStack>

                    </Stack>

                </Box>

            </GridItem>


            <GridItem h='100vh' width='100%' colSpan='4' overflowY='scroll' overflowX='hidden'>
                <HStack height='50' bg='lavender' w='100%' display='flex' px='4' justifyContent='space-between' alignItems='center'>
                    <Text>RESULT PORTAL</Text>

                    <Menu>
                    <MenuButton bgColor='lavender' as={Button} rightIcon={<ChevronDownIcon />}>
                        Onogwu Emmanuel<br/>
                        emmagospelnews@gmail.com
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Profile</MenuItem>
                        <MenuItem>Log Out</MenuItem>
                        
                    </MenuList>
                    </Menu>
                </HStack>

                <Box mt='10'>
                <Heading as={'h6'} size={'m'} px={4}> Result History </Heading>
                </Box>

                

                <Box px={'4'}>
                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} mt={'10'}>
                        <FormControl borderRadius='5px' w='400px' bgColor={'#e0e0e0;'}>
                                <InputGroup>
                                    <InputRightElement pointerEvents='none' display={'flex'} justifyContent={'center'} alignItems={'center'} >
                                    <Search2Icon color='black'/>
                                    </InputRightElement>
                                    <Input type='tel' placeholder='Search by Name or Registration Number' size={'lg'} />
                                </InputGroup>
                        </FormControl>

                        <Select placeholder='All' w='100px' bgColor={'#e0e0e0;'}>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>

                        <Box borderRadius={'5px'} bgColor={'#51b55f'}>
                            <Button colorScheme='#51b55f'>
                                Purchase Token
                            </Button>
                        </Box>
                    </Box>

                    <Box mt={'10'}>

                        <Card border='2px solid #e0e0e0;'>
                            <CardHeader display={'flex'} justifyContent={'space-between'} alignItems={'center'}borderBottom={'2px solid #ccc'} bgColor={'#fff;'}>
                                <Heading as={'h6'} size={'sm'}> Candidate </Heading>
                                <Heading as={'h6'} size={'sm'}> Name </Heading>
                                <Heading as={'h6'} size={'sm'}> Exams </Heading>
                                <Heading as={'h6'} size={'sm'}> Token </Heading>
                                <Heading as={'h6'} size={'sm'}> Views </Heading>
                                <Heading as={'h6'} size={'sm'}> Action </Heading>
                            </CardHeader>

                            <CardBody bgColor={'#e5e7eb;'}>
                                <Text textAlign={'center'} h={'100'} mt={'10'}> No Records found </Text>

                            </CardBody>

                            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} bg={'#e0e0e0;'}>
                                <ArrowLeftIcon mx={'4'}/>
                                <ArrowRightIcon mx={'4'}/>
                            </Box>
                        

                            <Box position={'relative'} right='-650px'>
                                <CardFooter display={'flex'} alignItems={'center'}>
                                    <Select variant='filled' placeholder='10 Rows' size={'lg'} w={'50'} mx={'5'} >
                                        <option value='option2'>20 Rows</option>
                                        <option value='option3'>30 Rows</option>
                                    </Select>

                                    <Text mr={'2'}>
                                        Page 1 of 10
                                    </Text>

                                    <Box display={'flex'} >
                                        <Box h='40px' w='40px' borderRadius='50%' bgColor={'#51b55f'} display={'flex'} justifyContent={'center'} alignItems={'center'} mr={'1'}> <ArrowLeftIcon color='white' /> </Box>
                                        <Box h='40px' w='40px' borderRadius='50%' bgColor={'#51b55f'} display={'flex'} justifyContent={'center'} alignItems={'center'} ml={'1'}> <ArrowRightIcon color='white'/></Box>
                                    </Box>
                                </CardFooter>
                            </Box>

                        </Card>
                    </Box>
                </Box>    
                
                
                
                

            </GridItem>










        </Grid>

    </Box>
  )
}

export default ResultHistory