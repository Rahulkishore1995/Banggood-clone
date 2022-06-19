import React,{useState} from 'react';
import './style.css';


const Sidebar = () => {
    
  return (

    <>
        <div className="dropdown">
      <div className="dropdown-btn"
      
       >Sort By Price
      <span style={{fontWeight:"bold"}}>+</span>
      </div>
        {
        
         <div className="dropdown-content">
                <div className="dropdown-item" 
                
                >Low To High</div> 
                <div className="dropdown-item" 
                
                >High To Low</div>   
          </div> 
          
          } 
    </div>
        <div className="dropdown">
      <div className="dropdown-btn"
      
      >Sort By ratings
      <span style={{fontWeight:"bold"}}>+</span>
      </div>
        {
        
         <div className="dropdown-content">
                <div className="dropdown-item"
                
                 >Low To High</div> 
                <div className="dropdown-item" 
              
                >High To Low</div>   
          </div>
          
           } 
    </div>
    <div>
    <div className="dropdown">
      <div className="dropdown-btn" 
      
      >Filter By Color
      <span style={{fontWeight:"bold"}}>+</span>
      </div>
        {
        
         <div className="dropdown-content">
                <div className="dropdown-item" 
              
                >Black</div> 
                <div className="dropdown-item" 
                
                >Blue</div> 
                <div className="dropdown-item" 
                
                >Colorblocked</div> 
                <div className="dropdown-item"
            
                 >Stripes</div>   
          </div> 
          
          } 
    </div>
    </div>
    <div className="dropdown">
      <div className="dropdown-btn" 
      
      >Filter By Categories
      <span style={{fontWeight:"bold"}}>+</span>
      </div>
        {
        
         <div className="dropdown-content">
                <div className="dropdown-item" 
                
                >Tshirts</div> 
                <div className="dropdown-item"
                
                 >Pants</div> 
                <div className="dropdown-item" 
                
                >Shirts</div>   
          </div>
          
          } 
    </div>
        <div className="dropdown">
      <div className="dropdown-btn" 
      
      >Filter By Brands
      <span style={{fontWeight:"bold"}}>+</span>
      </div>
        {
        
         <div className="dropdown-content">
                <div className="dropdown-item" 
                
                >Reebok</div> 
                <div className="dropdown-item" 
                
                >Nike</div> 
                <div className="dropdown-item" 
                
                >Adidas</div>   
          </div> 
          
          } 
    </div>
    </>
  )
}

export default Sidebar