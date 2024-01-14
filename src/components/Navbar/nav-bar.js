import { ButtonGroup, Image, Flex, Spacer } from "@chakra-ui/react";
import React from "react";
import NavButton from "./nav-buttons.js";
import logo from "../../images/logo.svg"; // Adjust the import path
import { Link } from "react-router-dom";
const NAVBAR_height = 70;

export default function NavBar() {
  return (
    <Flex h={NAVBAR_height} align="center" p="5" w="100%">
      <Flex align="center" w='100%'>
        <Link to='/portfolio'> <Image src={logo} h="20" alt="logo" /> </Link>
        <Spacer/>
        <ButtonGroup spacing='8' mr='15'>
          <Link to='/about'> <NavButton name="About"/> </Link>
          <NavButton name="Contact" />
        </ButtonGroup>
      </Flex>
    </Flex>
  );
}
