import React from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';

function Profile_page() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Box>
      <Grid h="100vh" templateRows="1fr" templateColumns="1fr" width="100%">
        <GridItem className="right_container" h="100vh" width="100%" overflowY="scroll" overflowX="hidden">
          <Box mt={10}>
            <Heading as="h6" size="md" px={4}>
              Profile
            </Heading>
          </Box>

          <Box mx={4} mt="40px">
            <Box mb={4}>
              <Text fontSize="lg" fontWeight="bold">
                Profile Information
              </Text>
            </Box>
            <Box borderBottom="2px solid lavender" mt={4} />

            {/* Full Name Section */}
            <Box mt={4}>
              <Text>Full Name</Text>
              <Box display="flex" flexDirection={{ base: 'column', md: 'row' }} gap={4} mt={2}>
                <Input variant="filled" placeholder="Sur Name" w={{ base: 'full', md: '141px' }} h="50px" />
                <Input variant="filled" placeholder="Middle Name" w={{ base: 'full', md: '145px' }} h="50px" />
                <Input variant="filled" placeholder="Last Name" w={{ base: 'full', md: '144px' }} h="50px" />
              </Box>
              <Box borderBottom="2px solid lavender" mt={4} />
            </Box>

            {/* Email Section */}
            <Box mt={4}>
              <Text>Email</Text>
              <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
                <Input variant="filled" placeholder="emmagospelnews@gmail.com" w={{ base: 'full', md: '450px' }} h="50px" />
              </Box>
              <Box borderBottom="2px solid lavender" mt={4} />
            </Box>

            {/* Phone Number Section */}
            <Box mt={4}>
              <Text>Phone Number</Text>
              <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
                <Input variant="filled" placeholder="09136852845" w={{ base: 'full', md: '450px' }} h="50px" />
              </Box>

              <Heading as="h6" size="md" mt={6} mb={2}>
                Change Password
              </Heading>
              <Text>You can change your password here</Text>
              <Box borderBottom="2px solid lavender" mt={4} />
            </Box>

            {/* Current Password Section */}
            <Box mt={4}>
              <Text>Current Password</Text>
              <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
                <InputGroup size="md" variant="filled" w={{ base: 'full', md: '450px' }}>
                  <Input type={show ? 'text' : 'password'} placeholder="Enter password" />
                  <InputRightElement width="4.5rem">
                    <Button size="sm" onClick={handleClick}>
                      {show ? <ViewOffIcon /> : <ViewIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </Box>
              <Box borderBottom="2px solid lavender" mt={4} />
            </Box>

            {/* New Password Section */}
            <Box mt={4}>
              <Text>New Password</Text>
              <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
                <InputGroup size="md" variant="filled" w={{ base: 'full', md: '450px' }}>
                  <Input type={show ? 'text' : 'password'} placeholder="Enter password" />
                  <InputRightElement width="4.5rem">
                    <Button size="sm" onClick={handleClick}>
                      {show ? <ViewOffIcon /> : <ViewIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </Box>
              <Box borderBottom="2px solid lavender" mt={4} />
            </Box>

            {/* Confirm Password Section */}
            <Box mt={4}>
              <Text>Confirm Password</Text>
              <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
                <InputGroup size="md" variant="filled" w={{ base: 'full', md: '450px' }}>
                  <Input type={show ? 'text' : 'password'} placeholder="Enter password" />
                  <InputRightElement width="4.5rem">
                    <Button size="sm" onClick={handleClick}>
                      {show ? <ViewOffIcon /> : <ViewIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </Box>

              <Box display="flex" justifyContent={{ base: 'center', md: 'flex-end' }} mt={4} pr={{ base: 0, md: 12 }}>
                <Button bgColor="#51b55f" color="#fff" w={{ base: 'full', md: '200px' }}>
                  Save
                </Button>
              </Box>
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Profile_page;
