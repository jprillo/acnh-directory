import React, { useState } from "react";
import {Link} from "gatsby"

import villager from '../img/villager.png';
import fish from '../img/fish.png';
import diver from '../img/diver.png';
import bug from '../img/bug.png';
import fossil from '../img/fossil.png';
import home from '../img/house.png';
import villagerIcon from '../img/villager-icon.png';

const Navbar = () => {

    const [isActive, toggleNavbar] = useState(false);
   
    
    const toggleTrueFalse = () => toggleNavbar(!isActive);
    
   
    return (
        <div className="nav-container"> 
        <div>
        <img className="villager"  onClick={toggleTrueFalse} src={villager} alt="villager"/>
          </div>             
         <div className={` menu ${isActive ? 'open' : ''}`}>              
         <Link  to="/villagers" alt="alt"><img  src={villagerIcon} alt="villager"/></Link>
             <Link to="/fish" alt="alt"><img  src={fish} alt="fish"/></Link>
             <Link  to="/fossils" alt="alt"><img  src={fossil} alt="fossil"/></Link>
             <Link to="/bugs" alt="alt"><img  src={bug} alt="bug"/></Link>
             <Link  to="/seacreatures" alt="alt"><img  src={diver} alt="disver"/></Link>
             <Link to="#" alt="home"><img  src={home} alt="house"/></Link>          
           </div> 
        
        </div>
    );
};

export default Navbar;