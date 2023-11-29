import React from 'react'
import { Box, Button, Grid, GridItem, HStack, Heading, Image, Menu, 
         MenuButton, MenuItem, MenuList, Stack, Text } 
from '@chakra-ui/react'
import Logo from '../../assets/neco_logo.svg'
import Dashboard from '../../assets/dashboard.svg'
import MyT from '../../assets/mytoken.svg'
import CheckR from '../../assets/checkresult.svg'
import ResultH from '../../assets/resulthistory.svg'
import Transaction from '../../assets/transaction.svg'
import Profile from '../../assets/profile.svg'
import Commonicon from '../../assets/commonicon.svg'
import CardIcon1 from '../../assets/cardIcon1.svg'
import { ChevronDownIcon } from '@chakra-ui/icons'




function Mytoken() {
  return (
    <Box>

        <Grid
        h='100vh'
        templateRows='repeat(1, 1fr)'
        templateColumns='repeat(5, 1fr)'
            width='100%'
        > 


            <GridItem h='100vh' bg='green' px='4'>
                
                
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


            <GridItem h='100vh' width='100%' colSpan='4'>
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
                <Heading as={'h6'} size={'m'} px={4}> MY TOKEN </Heading>
                </Box>

                <Box mt={'10'}>
                <Heading as={'h6'} size={'sm'} textAlign={'Center'}> Hi, onogwu Okwori - Welcome to NECO Results </Heading>
                <Text textAlign={'center'} > Here you can check NECO results by acquiring tokens for single or multiple <br/>
                        results. The buttons below show a few things you can do right away </Text>
                </Box>

                

            </GridItem>










        </Grid>

  </Box>
  )
}

export default Mytoken