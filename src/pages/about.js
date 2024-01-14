import { Flex, Text, HStack, Box, VStack } from '@chakra-ui/react';
import React from 'react';

const About = () => {
  return (
    <Flex
      alignItems="center"
      justify="center"
      h="calc(100vh - 70px)"
    >
      <VStack align="flex-start">
        <Flex
          align="flex-start"            // Center content vertically
          justify="center"          // Center content horizontally
          h="50vh"
          w="90vw"
          mt="-25vh"
        >
          <Text
            fontSize={{ base: '40px', md: '50px', lg: '60px' }}
            lineHeight='100%'
            fontFamily='FKDisplay Regular'
          >
            David xie is a UI/Ux Designer and Front-End Developer. His practice spans
            multiple disciplines; implementing a creative
            process that combines insight, strategy, implementation, technology
            and craft. Partnering with inspiring collaborators and innovators;
            he aspires to create future-facing work that makes meaningful impacts
            and is conducive of change.
          </Text>
        </Flex>
{/*         
        <HStack>
          <Box>
            Advancements go here!
          </Box>
        </HStack> */}
      </VStack>
    </Flex>

  );
};

export default About;
