import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import UserProfile from './components/UserProfile';
import Nav from './components/nav';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/userprofile" element={<UserProfile />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
