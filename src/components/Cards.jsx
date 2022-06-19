import React from 'react'
import styled from 'styled-components';
import styles from './styles.module.css';
import { useNavigate } from "react-router-dom";



const Li=styled.p`
font-size:14px;
color:grey;
margin-top:-10px;
`;
const Pic=styled.img`
 width:100%;
`;
const Part=styled.div`
text-align:start;
padding:10px;
box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
background-color:white;
`;

const Cards = (props) => {
  const navigate= useNavigate()
  return (

    <Part>
        <Pic src={props.url} alt="" />
        <h6>₹{props.price}</h6>
        <Li className={styles.Li}>{props.title}</Li>
        <button style={{background:"rgb(15, 236, 252)",color:"white",borderRadius:'5px',
        border:'0px',
        }}
        onClick={()=>navigate('/payement')}
        >Buy Now</button>

    </Part>
  )
}

export default Cards