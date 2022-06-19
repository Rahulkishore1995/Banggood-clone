import React from 'react';
import styles from './styles.module.css';
import Carausal from './Carausal';
import {HiOutlineCurrencyDollar,HiOutlineGift} from 'react-icons/hi';
import {RiMedalLine} from 'react-icons/ri';
import {GiReturnArrow} from 'react-icons/gi';
import {Button} from 'react-bootstrap';
import profile from '../profile.png';
import Sidebar from './Sidebar';
import flash from '../flash.png';
import {Link} from 'react-router-dom'
import HomeNavbar from './HomeNavbar';
import Footer from './Footer';
import {HotItem} from './HotItem';
import {AllCards} from './AllCards';


const Home = () => {
  return (
 
    <>
           <HomeNavbar/>
    <div className={styles.Slides}>
        <div className={styles.splash}>
        <Sidebar/>
        </div>
        <div className={styles.slideShow}>
            <Carausal/>
        </div>
        <div className={styles.flash}>
        <img style={{width:"100%",height:"100%"}}src={flash} alt="" />   
        </div>



        <div className={styles.user}>

         <div className={styles.Profile}>

             <img src={profile} alt="" style={{height:"70%",width:"100%"}}/>
             <h5 >Welcome To Banggood</h5>
             <div>
              <Link to = '/SignIn'><Button className={styles.click} >Sign In</Button></Link>
              <Link to = '/SignUp'><Button className={styles.click}>Sign Up</Button></Link>

             </div>
         </div>
         <div className={styles.List}>
             {/* <h6 className={styles.welcome}>Customer Service Policy</h6>  */}
        <ul className={styles.Ul}>
            <li><HiOutlineCurrencyDollar style={{fontSize:"25px",marginRight:"5px"}}/>Payment Security</li>
            <li><HiOutlineGift style={{fontSize:"25px",marginRight:"5px"}}/>Delivery Guarantee</li>
            <li><RiMedalLine style={{fontSize:"25px",marginRight:"5px"}}/>Quality Guarantee</li>
            <li><GiReturnArrow style={{fontSize:"25px",marginRight:"5px"}}/>No Reason Returns</li>
        </ul>
            

         </div>



        </div>
    </div>
    {/* <Home/> */}
       <HotItem/>
       <AllCards/>
    <Footer/>
    </>
  )
}

export default Home;


















