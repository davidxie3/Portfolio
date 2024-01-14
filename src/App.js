import Home from "./home"
import About from "./about"
import { createBrowserRouter, Router, Route, Routes,RouterProvider} from 'react-router-dom';

// const router = createBrowserRouter([
//   { 
//     path: '/portfolio',
//     element: <Home />,
//   }, {
//     path: '/about',
//     element: <About />,
//   }
// ]) 

function App() {
  return (
    // <RouterProvider router={router} />
      <Routes>
        <Route path="/portfolio" element= {<Home />}/>
        <Route path="/about" element= {<About />}/>
      </Routes>
  );
}

export default App;
