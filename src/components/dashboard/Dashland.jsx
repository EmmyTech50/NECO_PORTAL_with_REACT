import React from 'react'
import { Box, Button, Card, CardBody, 
         CardFooter, CardHeader, Heading,
         Image, SimpleGrid, Text, VStack 
       } 
from '@chakra-ui/react'
import CommonIcon from '../../../src/assets/commonicon.svg'
import CardIcon1 from '../../../src/assets/cardIcon1.svg'
import CardIcon2 from '../../../src/assets/cardIcon2.svg'
import CardIcon3 from '../../../src/assets/cardIcon3.svg'
import CardIcon4 from '../../../src/assets/cardIcon4.svg'

function Dashland() {
  return (
    <>
         <Box mt='10'>
          <Heading as={'h6'} size={'m'} px={4}> DASHBOARD </Heading>
        </Box>
          <Box mt={'10'}>
                <Heading as={'h6'} size={'sm'} textAlign={'Center'}> Hi, onogwu Okwori - Welcome to NECO Results 
                </Heading>
                <Text textAlign={'center'} > Here you can check NECO results by acquiring tokens for single or multiple 
                <br/>
                        results. The buttons below show a few things you can do right away </Text>
              </Box>

              <SimpleGrid columns={4} spacingX='30px' spacingY='20px' px='4' mt='25px'>
                <Box height='100px' display='flex' justifyContent='space-between' alignItems='center' 
                boxShadow='xl' p='4' rounded='md' border='1px solid lavender'>
                 
                    <Box  height='50px' w='50px' borderRadius={'5'} display={'flex'} justifyContent={'center'} 
                    alignItems={'center'} bgColor={'#6b7280'}>
                      <Image src={CommonIcon} />
                    </Box>

                    <VStack>
                      <Text color={'#6b7280'} fontSize={'14'} fontWeight={'200'}>Purchased Token</Text>
                      <Text>0</Text>
                    </VStack>
                  

                </Box>

                <Box height='100px' display='flex' justifyContent='space-between' alignItems='center' 
                boxShadow='xl' p='4' rounded='md' border='1px solid lavender'>
                 
                  <Box  height='50px' w='50px' borderRadius={'5'} display={'flex'} justifyContent={'center'}
                   alignItems={'center'} bgColor={'#51b55f'}>
                    <Image src={CommonIcon}/>
                  </Box>

                    <VStack >
                      <Text color={'#51b55f'} fontSize={'14'} fontWeight={'200'}>Available Token</Text>
                      <Text>0</Text>
                    </VStack>
                  

                </Box>

                <Box height='100px' display='flex' justifyContent='space-between' alignItems='center' 
                boxShadow='xl' p='4' rounded='md' border='1px solid lavender'>
                 
                  <Box  height='50px' w='50px' borderRadius={'5'} display={'flex'} justifyContent={'center'}
                   alignItems={'center'} bgColor={'#3b82f6'}>
                    <Image src={CommonIcon} />
                  </Box>  

                 <VStack >
                   <Text color={'#3b82f6'} fontSize={'14'} fontWeight={'200'}>Active Token</Text>
                   <Text>0</Text>
                 </VStack>
               

                </Box>

                <Box height='100px' display='flex' justifyContent='space-between' alignItems='center' boxShadow='xl' p='4' rounded='md' border='1px solid lavender'>
                 
                  <Box  height='50px' w='50px' borderRadius={'5'} display={'flex'} justifyContent={'center'} alignItems={'center'} bgColor={'#ef4444'}>
                    <Image src={CommonIcon} />
                  </Box>

                 <VStack >
                   <Text color={'#ef4444'} fontSize={'14'} fontWeight={'200'}>Exhausted Token</Text>
                   <Text>0</Text>
                 </VStack>
               

                </Box>
              </SimpleGrid>

              <SimpleGrid spacing={7} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' px='4' mt='5'>

                <Card display={'flex'} alignItems={'center'} justifyContent={'center'} boxShadow='xl'  rounded='md' border='1px solid lavender' h='280px' w='240px'>
                  <CardHeader>
                    <Box h='95px' w='95px' borderRadius='50%' bg={'#dcfce7'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                      <Image src={CardIcon1} />
                    </Box>
                  </CardHeader>

                  <CardBody>
                    <Heading as={'h6'} size={'sm'} textAlign='center' >Pay for Result Token</Heading>
                    <Text textAlign='center' fontSize={'10'} fontWeight={'500'} lineHeight={'2'}>Token is required to view results, <br/>
                       purchase one or more</Text>
                  </CardBody>

                  <CardFooter >
                    <Button bgColor={'#51b55f'} color='white' h={'10'} w={'100'}>Purchased Token</Button>
                  </CardFooter>
                </Card>

                <Card display={'flex'} alignItems={'center'} justifyContent={'center'} boxShadow='xl'  rounded='md' border='1px solid lavender' h='280px' w='240px'>
                  <CardHeader >
                    <Box h='95px' w='95px' borderRadius='50%' bg={'#dcfce7'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                      <Image src={CardIcon2}/>
                    </Box>
                  </CardHeader>

                  <CardBody>
                    <Heading as={'h6'} size={'sm'} textAlign='center' >View Transactions</Heading>
                    <Text textAlign='center' fontSize={'10'} fontWeight={'500'} lineHeight={'2'} >Check your transaction history or <br/>
                    request reconcilation</Text>
                  </CardBody>

                  <CardFooter >                  
                      <Button outlineColor={'green'} color='green' h={'10'} w={'100'}>View Transactions</Button>
                  </CardFooter>
                </Card>

                <Card display={'flex'} alignItems={'center'} justifyContent={'center'} boxShadow='xl'  rounded='md' border='1px solid lavender' h='280px' w='240px'>
                  <CardHeader >
                    <Box  h='95px' w='95px' borderRadius='50%' bg={'#dcfce7'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                      <Image src={CardIcon3}/>
                    </Box>
                  </CardHeader>

                  <CardBody>
                    <Heading as={'h6'} size={'sm'} textAlign='center' >View Results</Heading>
                    <Text textAlign='center' fontSize={'10'} fontWeight={'500'} lineHeight={'2'} >Click here to view result </Text>
                  </CardBody>

                  <CardFooter >
                    <Button outlineColor={'green'} color='green' h={'10'} w={'100'}>View Result</Button>
                  </CardFooter>
                </Card>

                <Card display={'flex'} alignItems={'center'} justifyContent={'center'} boxShadow='xl'  rounded='md' border='1px solid lavender' h='280px' w='240px'>
                  <CardHeader >
                    <Box  h='95px' w='95px' borderRadius='50%' bg={'#dcfce7'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                      <Image src={CardIcon4}/>
                    </Box>
                  </CardHeader>

                  <CardBody>
                    <Heading as={'h6'} size={'sm'} textAlign='center' >View purchased token</Heading>
                    <Text textAlign='center' fontSize={'10'} fontWeight={'500'} lineHeight={'2'} >Click here to view purchased <br/>
                    Token</Text>
                  </CardBody>

                  <CardFooter >
                    <Button outlineColor={'green'} color='green' h={'10'} w={'100'}>View Token</Button>
                  </CardFooter>
                </Card>
              </SimpleGrid>

    </>
  )
}

export default Dashland;