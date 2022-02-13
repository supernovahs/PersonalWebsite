
import './App.css';
import Header from './components/Header';
import {About} from "./components/About";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from "./components/Projects";
import { Home } from "./components/Home";
import * as React from 'react'

function App() {

  return (
   <>
   {/* <ChakraProvider>
      <Home/>
    </ChakraProvider> */}
  <Router>
   <Header/>
   <Routes>
     <Route exact path= "/" element = {<Home/>} >

     </Route>
     <Route exact path ="/about" element={<About/>}>
        
     </Route>
      <Route exact path ="/projects" element ={<Projects/>}>

      </Route>
   </Routes>
   


  </Router>

   </>
  );
}

export default App;
