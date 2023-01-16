import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/home';
import SignUp from './components/pages/SignUp';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <Home /> */}
         <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;