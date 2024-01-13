import logo from "./images/logo.svg";
import "./App.css";
import { Flex, VStack, Text } from "@chakra-ui/react";

function App() {
  return (
    <Flex
      alignItems="center"
      justify="center"
      // direction={{ base: "column", md: "row" }}
      h="calc(100vh - 70px)"
      // paddingX={{ base: "70", md: "0" }}
    >
    
        <VStack align="center" spacing="4">
          <img src={logo} className="App-logo" alt="logo" />
          <Text fontFamily="FKDisplay Regular"> Site Under Construction!</Text>
        </VStack>
      </Flex>
  );
}

export default App;
