import logo from './images/logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/Navbar/nav-bar.js'
import theme from "./theme"

function App() {
  return (
    <ChakraProvider theme={theme}>   
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1 className="text-3xl font-bold underline">
            Second Try!
        </h1>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </ChakraProvider>
  );
}

export default App;
