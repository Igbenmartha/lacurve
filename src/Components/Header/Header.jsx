import React, { useState } from "react";
import "./Header.css";
import { FaUserPlus } from "react-icons/fa6";
import { FaDiceFour } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoMenu } from "react-icons/io5";


const Header = () => {
  const [userDrop,setUserDrop] = useState(false)

    const Nav = useNavigate();
    const {cart} = useSelector((state)=> state)

  return (
    <div className="headerMain">
      <div className="headerInner">
        <div className="logo">
        <h1>La Curve</h1>
        </div>
        <div className="logo2">
            <p><NavLink to = '/app/home' style={{color:"white"}}>Home</NavLink></p>
            <p ><NavLink to = '/app/vendor' style={{color:"white"}}>Vendor</NavLink></p>
            <p><NavLink to = '/app/cart' style={{color:"white"}}>Cart{cart.length}</NavLink></p>
        </div>
        <div className="menu">
          <IoMenu color= "white" size= "50px"  onMouseEnter={()=>setUserDrop(true)}/>
          </div>
          {
            userDrop ?
        <div className="dropdown"  onMouseLeave={()=>setUserDrop(false)}>
        <p>  <NavLink to = '/app/home'> Home</NavLink></p>            
        <p>  <NavLink to = '/app/vendor'> Vendor</NavLink></p>            
        <p>  <NavLink to = '/app/cart'> Cart</NavLink></p>            
                    
        </div> : null

          }
        <div className="userprofile">
            <button >Log0ut</button>
      
  
         
        </div>
      </div>
    </div>
  );
};

export default Header;
