import React, { useState } from 'react';
import {
    FaHome,
    FaBars,
    FaUserAlt,
    FaGraduationCap,
    FaLightbulb,
    FaShapes

}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo.png";


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon:<FaHome/>
        },
        {
            path:"/about",
            name:"About",
            icon:<FaUserAlt/>
        },
        {
            path:"/education",
            name:"Education",
            icon:<FaGraduationCap/>
        },
        {
            path:"/skills",
            name:"Skills",
            icon:<FaLightbulb/>
        },
        {
            path:"/portfolio",
            name:"Portfolio",
            icon:<FaShapes/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <div style={{display: isOpen ? "block" : "none"}} className="logo"><img src={logo} alt="logo" /></div>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
                   
               </div>

               <div className="divider"> </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;