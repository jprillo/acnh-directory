
import React, { useState } from "react";
import {Link} from "gatsby"

const InsideNav = () => {

    const [isActive, toggleNavbar] = useState(false);

    
    const toggleTrueFalse = () => toggleNavbar(!isActive);
   
   
    return (
        <div style={{position: "absolute", zIndex: "1000"}} className={` navagation-wrap col-12 ${isActive ? 'mobile-wrap' : ''}`}>
            <div id="main-nav-wrap">
                <div className="logo-wrap">
                    <a href="/">
                        <span className="formal" >Botanical</span><span className="primary-color"> Backyard</span> </a>
                </div>
                <div >
                    <div className={` responsive-nav ${isActive ? 'mobile-nav' : ''}`}>
                        <ul className="nav">

                            <li><Link className="hack" to="/">Home</Link></li>
                            <li><Link to="/villagers/" className="hack">Villager</Link></li>
                            <li><Link to="/seacreatures/" className="hack">Seacreatures</Link></li>
                            <li><Link to="/fish/" className="hack">Fish</Link></li>
                            <li><Link to="/bugs/" className="hack">Bugs</Link></li>
                        </ul>
                    </div>

                </div>



                <div id="hamburger-wrap">
                    <div className={` burger-open ${isActive ? 'burger-close' : ''}`}

                        data-target='nav-menu'
                        
                        onClick={toggleTrueFalse}
                        aria-hidden={true}>
                        <span className="line line01"></span>
                        <span className="line line02"></span>
                        <span className="line line03"></span>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default InsideNav;