import React from 'react';
import data from '../data/sea.json';
import Layout from "../layout";
import InsideNav from '../components/InsideNav'

class Sea extends React.Component {
     formatHourCards = () => {  
    return data.map((fish, i) => 

    <div style={{width: "260px", padding: "5px", background: (() => {
      switch (fish.availability.rarity) {
        case "Common":   return 'green';
        case "Uncommon": return 'darkgreen';
        case "Rare": return 'purple';
        case "Ultra-rare": return 'red';
    default:      return "green";
      }
    })(), margin: "2px", borderRadius: "7px"}} className="card fish" key={i}>
    <div style={{backgroundColor: "#EFEEE7", margin: "5px", padding: "10px"}}>
    <div style={{display: "flex", justifyContent: "space-between", height:"4em "}}>
     <h3 style={{textTransform: "capitalize", color: "black"}}>{fish.name["name-USen"]}</h3>
    
     </div>
     <div style={{background: "#5F9CD3", textAlign: "center"}}>
     <img  width="60%" src={fish["icon_uri"]} alt="hi" />
     </div>
     <div style={{textAlign: "left", height: "140px"}}>
     <p>Location: {fish.availability.location}</p>
     <p>Size: {fish.shadow}</p>
     <p>Time: {fish.availability.time || "All Day"}</p>
     <p>NH {fish.availability["month-northern"] || "All Year"}</p>
     <p>SH: {fish.availability["month-southern"]  || "All Year"}</p>
     </div>
     </div>
     <div style={{display: "flex", justifyContent: "space-between"}}>
     <p>{fish.availability.rarity}</p>
     <p>{fish.price}</p>
     </div>
   
     </div>
     )
    }
     
  
  render() {
    return (
<Layout>
      <div>
        <InsideNav/>
      <h1>Sea Creatures</h1>
      
<div style={{padding: "20px 10%", display: "flex", flexWrap: "wrap", justifyContent: "center"}}>

{this.formatHourCards()}
   </div>
   </div>
   </Layout>
    );
   
  }
}
    
  

export default Sea;