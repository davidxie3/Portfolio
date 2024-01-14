import React from 'react';
import logo from "./images/logo.svg";
import { Flex, VStack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion"

export default function home(){
  return (
    <Flex
      alignItems="center"
      justify="center"
      h="calc(100vh - 70px)"
    >
        <VStack align="center" spacing="4">
        <motion.img
          src={logo}
          className="App-logo"
          alt="logo"
          animate={{ rotate: 360 }} // Rotate 360 degrees
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          style={{ width: "250px", height: "250px" }} // Rotate with a duration of 2 seconds, repeat infinitely, and use a linear easing function
        />
          <Text fontFamily="FKDisplay Regular"> Site Under Construction!</Text>
        </VStack>
      </Flex>
  );
};
