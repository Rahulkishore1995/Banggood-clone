
import { useState } from "react";
// import Signavbar from "./Signavbar";
import './SignIn.css';
 
import { Apple,Facebook,Google,Twitter} from 'react-bootstrap-icons';
import {Signavbar} from "./Signavbar";
import {SignFooter} from './SignFooter'
import { useNavigate } from "react-router-dom";

 
export const SignIn = ()=>{
  
const navigate= useNavigate()
    return (
        <div>
            <Signavbar/>
            <br /><br />
        <div className = "signup">
            
        <div className='SigninRegister'>
            <div onClick={()=>navigate('/signIn')}>SIGN IN</div>
            <div onClick={()=>navigate('/signUp')}>REGISTER</div>
        </div>
        <br />
        <br />
            <input type="text" name="Email" id="Email" placeholder='Email' />
            <br />
            <br />
           
            <input type="password" name="Password" id="Password" placeholder='Password' />
            <br />
            
            <div>
             
            </div>
            <br />
            <button id= "joinIn" onClick={()=>navigate('/')} >Sign In</button>
            <div style={{marginTop:"5px" ,marginLeft:"-44%",color:"gray",fontSize:'14px'}}>Forgot your password?</div>
            <br />
            <div  style={{fontSize:"17px",fontWeight:"500",color:"gray"}}>Quick Access With</div>
            <br />
            <div id="icon">
             <div> <Apple size={30}/></div>
             <div> < Facebook size={30} color="royalblue"/></div>
             {/* <div>  <Google size={30}/></div> */}
             <img src="https://pbs.twimg.com/profile_images/1455185376876826625/s1AjSxph_400x400.jpg" alt="google" height={30} width={30} />
             <div>  <Twitter size={30} color="#1da1f2"/></div>
            </div>
            
            
        </div>
        <br />
        <br />
        <SignFooter/>
        </div>

    )
}
 