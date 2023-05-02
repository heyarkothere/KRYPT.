import React, { useState} from "react";
import "./loginform.css"
import {  useNavigate } from "react-router-dom";
import { auth} from "../firebase"
import { signInWithEmailAndPassword } from "firebase/auth";


const LoginForm=() => {
    const navigate = useNavigate()
    

    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
   


    const logIn=(e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
            console.log("loggedin");
            navigate("/Homepage")
        })
        .catch((error)=>{
            console.log(error);
            console.log("no user")
            
        })
    }    
   

    return(
        <div className="cover">
            {/* <form onSubmit={signIn}> */}
            <h1>KRYPT</h1>
            <input type="email" value={email} placeholder="username" onChange={(e)=> setEmail(e.target.value)}/>
            <input type="password" value={password} placeholder="password" onChange={(e)=> setPassword(e.target.value)}/>

            <div className="login-btn"  onClick={logIn}>Login</div>
            <div className="signup-btn"  onClick={()=>{navigate("/Signup")}}>SignUp</div>
            <p className="text">Or login using</p>

            <div className="alt-login">
                <div className="facebook"></div>
                <div className="google"></div>
            </div>

            
        </div>
    )
}

export default LoginForm