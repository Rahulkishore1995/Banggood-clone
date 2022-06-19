import React from "react";
import Home from "../components/Home";
import { SignIn } from "../components/SignIn";
import { SignUp } from "../components/SignUp";
import { Payement } from "../components/Payement";
import {Route,Routes} from 'react-router-dom';




export const RouterPage = () => {
  return (
    <div>
        
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/payement" element={<Payement/>}/>
      </Routes>

    </div>
  );
};
