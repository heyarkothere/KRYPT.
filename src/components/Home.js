import React from "react";
import "./Home.css"
import {  useNavigate } from "react-router-dom";


function Homepage(){
    const navigate= useNavigate()
    return(
        <div className="home">
            <h1>KRYPT</h1>
            <h2>CIPHER METHODS</h2>
            <button className="btn-1" onClick={()=>{navigate("/caesar")}}>Caesar Cipher</button>
            <button className="btn-2">PlayFair Cipher</button>
        </div>
    );
}

export default Homepage