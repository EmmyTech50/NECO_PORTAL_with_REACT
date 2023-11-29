import React from 'react'
import { GridItem, Image, Box, Heading, 
  Stack,Text, UnorderedList, ListItem, 
  HStack,
} from '@chakra-ui/react'

import Logo from '../../assets/neco_logo.svg' 
import { ChatIcon } from '@chakra-ui/icons'

function Leftpart() {
  return (
    <GridItem colSpan={2} bg='#07bc0c88'  h='100vh' >
    <Stack boxSize='sm' style={{ margin:35 }}>
      <Box boxSize='sm'> 
        <Image src={Logo} boxSize='100px' alt='Neco Logo' />
        <Heading mt={10} as='h2' size='xl' color='#fff'>NECO RESULTS</Heading>
      </Box>

      <Box boxSize='sm' color='#fff'>
        <Text>How it works</Text>
        <UnorderedList>
          <ListItem>Select your examination year and examination type.</ListItem>
          <ListItem>Enter your Token.</ListItem>
          <ListItem>Enter your Registration number.</ListItem>
          <ListItem>Click on the "Check my result" button.</ListItem>
        </UnorderedList>
      </Box>

      
      <Box mt={40}>
          <HStack spacing={4}> 
             <Box bg='#fff' 
                    borderRadius='50%' w={30} h={30} 
                    display='flex'
                    justifyContent='center' 
                    alignItems='center'
              >
                <ChatIcon fill='green' color='green'/> 
             </Box>
            <Text color='#fff'>Support mail support@neco.gov.ng</Text>
          </HStack>
      </Box>


    </Stack>

  </GridItem>
  )
}

export default Leftpart