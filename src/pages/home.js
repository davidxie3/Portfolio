import React from 'react';
import logo from "../images/logo.svg";
import { Flex, VStack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion"

export default function home(){
  return (
    <Flex
      alignItems="center"
      justify="center"
      h="calc(100vh - 70px)"
    >
      <VStack>
        <Text fontSize={{ base: '40px', md: '50px', lg: '60px' }}
              lineHeight='100%'
              fontFamily='ClashDisplay Medium'
        >
          David Xie
        </Text>
        <Text fontSize={{ base: '40px', md: '50px', lg: '60px' }}
              lineHeight='100%'
              fontFamily='ClashDisplay Medium'
        >
          UX Design &
        </Text>
        <Text fontSize={{ base: '40px', md: '50px', lg: '60px' }}
              lineHeight='100%'
              fontFamily='ClashDisplay Medium'
        >
          Web Devloper
        </Text>
      </VStack>

        {/* <VStack align="center" spacing="4">
        <motion.img
          src={logo}
          className="App-logo"
          alt="logo"
          animate={{ rotate: 360 }} // Rotate 360 degrees
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          style={{ width: "250px", height: "250px" }} // Rotate with a duration of 2 seconds, repeat infinitely, and use a linear easing function
        />
          <Text fontFamily='FKDisplay Regular'>Site Under Construction!</Text>
        </VStack> */}
      </Flex>
  );
};
