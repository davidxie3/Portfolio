import logo from "./images/logo.svg";
import "./App.css";
import { Flex, VStack } from "@chakra-ui/react";

function App() {
  return (
    <Flex
      align="center"
      direction={{ base: "column", md: "row" }}
      h="calc(100vh - 50px)"
      justify="center"
      paddingX={{ base: "50", md: "0" }}
    >

      <VStack>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Site Under Construction!</h1>
      </VStack>
    </Flex>
  );
}

export default App;
