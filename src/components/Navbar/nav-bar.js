import { ButtonGroup, Image, Flex} from "@chakra-ui/react";
import React from "react";
import NavButton from "./nav-buttons.js";
import logo from "../../images/logo.svg"; // Adjust the import path

const NAVBAR_height = 50;

export default function NavBar() {
  return (
    <Flex h ={NAVBAR_height}>
      <Image src={logo} alt="logo" />
      <ButtonGroup>
        <NavButton name="Profile" />
        <NavButton name="About" />
        <NavButton name="Contact" />
      </ButtonGroup>
    </Flex>
  );
}
