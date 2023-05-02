import React, { useState} from "react";
import "./Signup.css"
import {  useNavigate } from "react-router-dom";
import { auth} from "../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth";


const Signup=() => {
    const navigate = useNavigate()
    

    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const popup = () => {
        navigate("/Homepage")}


    const signup=(e)=>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
            console.log(userCredential);
            console.log("signed up");
            
        })
        .catch((error)=>{
            console.log(error);
        })
    }    
   

    return(
        <div className="cover">
            {/* <form onSubmit={signIn}> */}
            <h1>KRYPT</h1>
            <input type="email" value={email} placeholder="username" onChange={(e)=> setEmail(e.target.value)}/>
            <input type="password" value={password} placeholder="password" onChange={(e)=> setPassword(e.target.value)}/>

            <div className="signin-btn"  onClick={signup}>Sign Up</div>

            {/* <p className="text">Or login using</p>

            <div className="alt-login">
                <div className="facebook"></div>
                <div className="google"></div>
            </div> */}

            {/* </form> */}
        </div>
    )
}

export default Signup