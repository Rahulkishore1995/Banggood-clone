import React from 'react';
import styles from './styles.module.css';
import { useNavigate,Link, Navigate } from 'react-router-dom';

const Sidebar = () => {
   
  const navigate= useNavigate()
  return (
    <div>
        <ul className={styles.Ul}>
            <li >Women's Clothing</li>
            <li 
            onClick={()=>navigate("/mens")}
            >Men's Clothing</li>
            <li>Phones & Accessories</li>
            <li>Electronics</li>
            <li>Tools, Industrial & Scientific</li>
            <li>Toys Hobbies and Robot</li>
            <li>Computers & Office</li>
            <li>Automobiles & Motorcycles</li>
            <li>Sports & Outdoor</li>
            <li>Home, Garden & Furniture</li>
            <li>Jewelry & Watches</li>
            <li>Home Appliances</li>
            <li>Shoes & Bags</li>
            <li>Health,Beauty & Hair</li>
            <li>Lights & Lighting</li>
            </ul>
    </div>
  )
}

export default Sidebar