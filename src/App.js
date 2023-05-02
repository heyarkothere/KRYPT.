// import React from 'react';
// import './App.css';
import LoginForm from "./components/loginform";
import Homepage from "./components/Home"
import Caesar from "./components/Caesar";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import AuthDetails from "./components/AuthDetails";

function App() {
  return (
    <div className="page">
      <Routes>
         
        <Route exact path="/" element={ <LoginForm />}/>
        <Route exac path="/signup" element={<Signup />}/>
        <Route exac path="/auth" element={<AuthDetails />}/>
        <Route exact path="/Homepage" element={<Homepage />}/>
        <Route exact path="/caesar" element={<Caesar />}/>
       
       </Routes> 
    </div>
  );
}

export default App;
