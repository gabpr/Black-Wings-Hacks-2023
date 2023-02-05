// import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Form from './pages/Form';
import Home from './pages/Home';
import Prompts from './pages/Prompts';
import Questions from './pages/Questions';
import UserProfile from './pages/UserProfile';

const App = () => {
  return (
    <div className="App">
  
  {/* added routes here because the tutorial showed 
  that but we can keep routes.js*/}


      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/home" element={<Home />} />
        <Route path="/questions" element ={<Questions />} />
        <Route path="/dailyprompt" element={<Prompts />} />
        <Route path="/profile" element={<UserProfile />} />
        
      </Routes>
   </div>
  );
};

export default App;
