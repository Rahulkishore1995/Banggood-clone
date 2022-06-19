import React, { useEffect,useContext } from 'react';
import AllProducts from './AllProducts';
import HomeNavabar from './HomeNavbar';
import styled from 'styled-components';
import Slide from './Slide';
import Sidesort from './Sidesort';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { useNavigate } from "react-router-dom";
import Data from '../data.json'


const Header=styled.div`
width:90%;
margin:30px auto;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
display:flex;
gap:40px;
height:510px;
background-color:whitesmoke;

`;
const Part1=styled.div`
flex:2;
overflow:hidden;
padding:0;
`;
const Part2=styled.div`
flex:8;
background-color:whitesmoke;
`;
const Items=styled.div`
width:90%;
margin:30px auto;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
display:flex;
gap:40px;
`;

export const Mens = () => {

 
  return (
    <>
    <div><HomeNavabar/></div>
  
    <Header>
        <Part1>
          <Sidebar/>
        </Part1>
        <Part2>
          <Slide url={"https://imgaz.staticbg.com/banggood/os/202202/20220214202624_157.jpg.webp"}/>
        </Part2>
    </Header>

  <Items>
        <Part1>

        <Sidesort 
       
        /> 
        </Part1>


    <Part2>
      
        <AllProducts props={Data}/>
     
    </Part2>
  </Items>

  <Footer/>

    </>
  )
}

  