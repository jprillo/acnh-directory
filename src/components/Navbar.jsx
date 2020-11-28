import React, { useState } from "react";
import {Link} from "gatsby"

import villager from '../img/villager.png';
import fish from '../img/fish.png';
import fossil from '../img/diver.png';

const Navbar = () => {

    const [isActive, toggleNavbar] = useState(false);
   
    
    const toggleTrueFalse = () => toggleNavbar(!isActive);
    
   
    return (
        <div className="nav-container"> 
        <div>
        <img className="villager"  onClick={toggleTrueFalse} src={villager} alt="villager"/>
          </div>             
         <div className={` menu ${isActive ? 'open' : ''}`}>              
         <Link  to="/villagers" alt="alt"><img  src={fish} alt="fish"/></Link>
             <Link to="/fish" alt="alt"><img  src={fossil} alt="fish"/></Link>
             <Link  to="/fossils" alt="alt"><img  src={fish} alt="fish"/></Link>
             <Link to="/bugs" alt="alt"><img  src={fossil} alt="fish"/></Link>
             <Link  to="/seacreatures" alt="alt"><img  src={fish} alt="fish"/></Link>
             <Link to="#" alt="alt"><img  src={fossil} alt="fish"/></Link>          
           </div> 
        
        </div>
    );
};

export default Navbar;