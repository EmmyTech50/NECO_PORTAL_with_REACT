import React from 'react'
import styled from '@emotion/styled'
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Center, Grid, GridItem, HStack, Heading, Image, Link, Menu, MenuButton, MenuItem, MenuList, SimpleGrid, Stack, Text, VStack  } from '@chakra-ui/react'
import Logo from '../../assets/neco_logo.svg'
import { ChevronDownIcon } from '@chakra-ui/icons'
import Dashboard from '../../assets/dashboard.svg'
import MyT from '../../assets/mytoken.svg'
import Profile from '../../assets/Profile.svg'
import CommonIcon from '../../../src/assets/commonicon.svg'
import CardIcon1 from '../../../src/assets/cardIcon1.svg'
import CardIcon2 from '../../../src/assets/cardIcon2.svg'
import CardIcon3 from '../../../src/assets/cardIcon3.svg'
import CardIcon4 from '../../../src/assets/cardIcon4.svg'
import CheckR from '../../assets/checkresult.svg'
import ResultH from '../../assets/resulthistory.svg'
import Transaction from '../../assets/transaction.svg'








function DashboardHome() {
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
                    <Link href='/' color={'white'}>  <Image src={Dashboard} bg='white'/> </Link>
                    <Link href='/' color={'white'}>  Dashboard </Link>
                  </HStack>

                  <HStack py={4}>
                    <Link href='/my-token' color={'white'}> <Image src={MyT} bg='white'/> </Link>
                    <Link href='/my-token' color={'white'}> MyToken </Link>
                    
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
                    <Link href='/profile' color={'white'}> <Image src={Profile} bg='white' /> </Link>
                    <Link href='/profile' color={'white'}> Profile </Link>
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
                <Heading as={'h6'} size={'m'} px={4}> DASHBOARD </Heading>
              </Box>

              <Box mt={'10'}>
                <Heading as={'h6'} size={'sm'} textAlign={'Center'}> Hi, onogwu Okwori - Welcome to NECO Results </Heading>
                <Text textAlign={'center'} > Here you can check NECO results by acquiring tokens for single or multiple <br/>
                        results. The buttons below show a few things you can do right away </Text>
              </Box>

              <SimpleGrid columns={4} spacingX='30px' spacingY='20px' px='4' mt='25px'>
                <Box bgColor='lavender' height='100px' display='flex' justifyContent='space-between' alignItems='center'>
                 
                    <Box ml='4' height='50px' w='50px' borderRadius={'5'} display={'flex'} justifyContent={'center'} alignItems={'center'} bgColor={'red'}>
                      <Image src={CommonIcon} />
                    </Box>

                    <VStack mr='4'>
                      <Text>Purchased Token</Text>
                      <Text>0</Text>
                    </VStack>
                  

                </Box>

                <Box bgColor='lavender' height='100px' display='flex' justifyContent='space-between' alignItems='center'>
                 
                  <Box ml='4' height='50px' w='50px' borderRadius={'5'} display={'flex'} justifyContent={'center'} alignItems={'center'} bgColor={'green'}>
                    <Image src={CommonIcon}/>
                  </Box>

                    <VStack mr='4'>
                      <Text>Available Token</Text>
                      <Text>0</Text>
                    </VStack>
                  

                </Box>

                <Box bgColor='lavender'height='100px' display='flex' justifyContent='space-between' alignItems='center'>
                 
                  <Box ml='4' height='50px' w='50px' borderRadius={'5'} display={'flex'} justifyContent={'center'} alignItems={'center'} bgColor={'blue'}>
                    <Image src={CommonIcon} />
                  </Box>  

                 <VStack mr='4'>
                   <Text>Active Token</Text>
                   <Text>0</Text>
                 </VStack>
               

                </Box>

                <Box bgColor='lavender' height='100px' display='flex' justifyContent='space-between' alignItems='center'>
                 
                  <Box ml='4' height='50px' w='50px' borderRadius={'5'} display={'flex'} justifyContent={'center'} alignItems={'center'} bgColor={'red'}>
                    <Image src={CommonIcon} />
                  </Box>

                 <VStack mr='4'>
                   <Text>Exhausted Token</Text>
                   <Text>0</Text>
                 </VStack>
               

                </Box>
              </SimpleGrid>

              <SimpleGrid spacing={7} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' px='4' mt='5'>

                <Card display={'flex'} alignItems={'center'} justifyContent={'center'} bgColor='lavender' h={'280'} w={'100'}>
                  <CardHeader >
                    <Image src={CardIcon1}/>
                  </CardHeader>

                  <CardBody>
                    <Heading as={'h6'} size={'sm'} textAlign='center' >Pay for Result Token</Heading>
                    <Text textAlign='center' fontSize={'10'} fontWeight={'500'} lineHeight={'2'}>Token is required to view results, <br/>
                       purchase one or more</Text>
                  </CardBody>

                  <CardFooter >
                    <Button bgColor={'green'} color='white' h={'10'} w={'100'}>Purchased Token</Button>
                  </CardFooter>
                </Card>

                <Card display={'flex'} alignItems={'center'} justifyContent={'center'} bgColor='lavender' h={'280'} w={'100'}>
                  <CardHeader >
                    <Image src={CardIcon2}/>
                  </CardHeader>

                  <CardBody>
                    <Heading as={'h6'} size={'sm'} textAlign='center' >Pay for Result Token</Heading>
                    <Text textAlign='center' fontSize={'10'} fontWeight={'500'} lineHeight={'2'} >Token is required to view results, <br/>
                       purchase one or more</Text>
                  </CardBody>

                  <CardFooter >
                    <Button outlineColor={'green'} color='green' h={'10'} w={'100'}>View Transactions</Button>
                  </CardFooter>
                </Card>

                <Card display={'flex'} alignItems={'center'} justifyContent={'center'} bgColor='lavender' h={'280'} w={'100'}>
                  <CardHeader >
                    <Image src={CardIcon3}/>
                  </CardHeader>

                  <CardBody>
                    <Heading as={'h6'} size={'sm'} textAlign='center' >Pay for Result Token</Heading>
                    <Text textAlign='center' fontSize={'10'} fontWeight={'500'} lineHeight={'2'} >Token is required to view results, <br/>
                       purchase one or more</Text>
                  </CardBody>

                  <CardFooter >
                    <Button outlineColor={'green'} color='green' h={'10'} w={'100'}>View Result</Button>
                  </CardFooter>
                </Card>

                <Card display={'flex'} alignItems={'center'} justifyContent={'center'} bgColor='lavender' h={'280'} w={'100'}>
                  <CardHeader >
                    <Image src={CardIcon4}/>
                  </CardHeader>

                  <CardBody>
                    <Heading as={'h6'} size={'sm'} textAlign='center' >Pay for Result Token</Heading>
                    <Text textAlign='center' fontSize={'10'} fontWeight={'500'} lineHeight={'2'} >Token is required to view results, <br/>
                       purchase one or more</Text>
                  </CardBody>

                  <CardFooter >
                    <Button outlineColor={'green'} color='green' h={'10'} w={'100'}>View Token</Button>
                  </CardFooter>
                </Card>
              </SimpleGrid>

            </GridItem>










      </Grid>

    </Box>


    
  )
}

export default DashboardHome