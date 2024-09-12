import React from 'react';
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import CommonIcon from '../../../src/assets/commonicon.svg';
import CardIcon1 from '../../../src/assets/cardIcon1.svg';
import CardIcon2 from '../../../src/assets/cardIcon2.svg';
import CardIcon3 from '../../../src/assets/cardIcon3.svg';
import CardIcon4 from '../../../src/assets/cardIcon4.svg';

function Dashland() {
  return (
    <>
      <Box mt={10}>
        <Heading as="h6" size="md" px={4}>
          DASHBOARD
        </Heading>
      </Box>
      <Box mt={10}>
        <Heading as="h6" size="sm" textAlign="center">
          Hi, onogwu Okwori - Welcome to NECO Results
        </Heading>
        <Text textAlign="center" fontSize="sm">
          Here you can check NECO results by acquiring tokens for single or multiple results.
          <br />
          The buttons below show a few things you can do right away.
        </Text>
      </Box>

      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 4 }}
        spacingX="30px"
        spacingY="20px"
        px={4}
        mt="25px"
      >
        {[
          { color: '#6b7280', label: 'Purchased Token', count: 0 },
          { color: '#51b55f', label: 'Available Token', count: 0 },
          { color: '#3b82f6', label: 'Active Token', count: 0 },
          { color: '#ef4444', label: 'Exhausted Token', count: 0 },
        ].map((item, index) => (
          <Box
            key={index}
            height="100px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            boxShadow="xl"
            p={4}
            rounded="md"
            border="1px solid lavender"
          >
            <Box
              height="50px"
              w="50px"
              borderRadius="5px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              bgColor={item.color}
            >
              <Image src={CommonIcon} />
            </Box>

            <VStack>
              <Text color={item.color} fontSize="14px" fontWeight="200">
                {item.label}
              </Text>
              <Text>{item.count}</Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>

      <SimpleGrid
        spacing={7}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        px={4}
        mt={5}
      >
        {[
          {
            icon: CardIcon1,
            title: 'Pay for Result Token',
            description: 'Token is required to view results, purchase one or more.',
            buttonText: 'Purchased Token',
            buttonColor: '#51b55f',
          },
          {
            icon: CardIcon2,
            title: 'View Transactions',
            description: 'Check your transaction history or request reconciliation.',
            buttonText: 'View Transactions',
            buttonColor: 'green',
          },
          {
            icon: CardIcon3,
            title: 'View Results',
            description: 'Click here to view result.',
            buttonText: 'View Result',
            buttonColor: 'green',
          },
          {
            icon: CardIcon4,
            title: 'View Purchased Token',
            description: 'Click here to view purchased Token.',
            buttonText: 'View Token',
            buttonColor: 'green',
          },
        ].map((card, index) => (
          <Card
            key={index}
            display="flex"
            alignItems="center"
            justifyContent="center"
            boxShadow="xl"
            rounded="md"
            border="1px solid lavender"
            h="280px"
            w="240px"
          >
            <CardHeader>
              <Box
                h="95px"
                w="95px"
                borderRadius="50%"
                bg="#dcfce7"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Image src={card.icon} />
              </Box>
            </CardHeader>

            <CardBody>
              <Heading as="h6" size="sm" textAlign="center">
                {card.title}
              </Heading>
              <Text textAlign="center" fontSize="10px" fontWeight="500" lineHeight="2">
                {card.description}
              </Text>
            </CardBody>

            <CardFooter>
              <Button bgColor={card.buttonColor} color="white" h="10" w="100%">
                {card.buttonText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </>
  );
}

export default Dashland;
