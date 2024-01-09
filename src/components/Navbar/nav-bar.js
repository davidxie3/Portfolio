import { ButtonGroup, Image, Flex } from "@chakra-ui/react";
import React from "react";
import NavButton from "./nav-buttons.js";
import logo from "../../images/logo.svg"; // Adjust the import path

const NAVBAR_height = 70;

export default function NavBar() {
  return (
    <Flex h={NAVBAR_height} align="center" p="5" w="100%">
      <Flex align="center" w='100%'>
        <Image src={logo} h="20" alt="logo" />
        <ButtonGroup>
          <NavButton name="Profile" />
          <NavButton name="About" />
          <NavButton name="Contact" />
        </ButtonGroup>
      </Flex>
    </Flex>
  );
}
