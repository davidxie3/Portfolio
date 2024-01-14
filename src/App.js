import Home from "./pages/home"
import About from "./pages/about"
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
      <Routes>
        <Route path="/portfolio" element= {<Home />}/>
        <Route path="/about" element= {<About />}/>
      </Routes>
  );
}

export default App;
