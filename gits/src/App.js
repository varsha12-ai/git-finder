import React from 'react' 
import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
function App() {
  return (
  //   <h1 className="text-3xl font-bold underline">
  //   Hello world!
  // </h1>
  <Router> 
  
    <Navbar />
    <div className="container">
      
      <Routes>
        <Route exact path='/' component={<Home />} />
        <Route exact path='/About' element={<About />} />
        <Route exact path='/NotFound' element={<NotFound />} />
        <Route component={NotFound} />
        </Routes>
    </div>
  
</Router>
  );
}

export default App;
