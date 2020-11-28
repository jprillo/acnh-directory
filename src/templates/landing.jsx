import React from "react";
import { Helmet } from "react-helmet";


import Layout from "../layout";
import { Link } from "gatsby"
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import Navbar from "../components/Navbar";

class Landing extends React.Component {

 
 

  render() {
    
    return (
      <Layout>
        <div>
          <div>
            <Helmet title={config.siteTitle} />
            <SEO />        
          </div>
          <div  className="landing-container">
           <Navbar/>
            
          
hi
            
          </div>
        </div>
      </Layout>
    );
  }
}

export default Landing;
