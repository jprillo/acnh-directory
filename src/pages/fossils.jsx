import React from 'react';
import data from '../data/fossils.json'

class Fossil extends React.Component {
     formatHourCards = () => {  
    return data.map((fish, i) => 

    <div style={{width: "260px", padding: "5px", background:"grey", margin: "2px", borderRadius: "7px"}} className="card fish" key={i}>
    <div style={{backgroundColor: "#EFEEE7", margin: "5px", padding: "10px"}}>
    <div style={{display: "flex", justifyContent: "space-between"}}>
     <h3 style={{textTransform: "capitalize", color: "black"}}>{fish.name["name-USen"]}</h3>
    
     </div>
     <div style={{background: "#5F9CD3", textAlign: "center"}}>
     <img  width="60%" src={fish["image_uri"]} alt="hi" />
     </div>
     <div style={{textAlign: "left", }}>
     
     </div>
     </div>
     <div style={{display: "flex", justifyContent: "space-between"}}>
    
     <p>{fish.price}</p>
     </div>
   
     </div>
     )
    }
     
  
  render() {
    return (

      <div>
      <h1>Fossils</h1>
      
<div style={{padding: "20px 10%", display: "flex", flexWrap: "wrap", justifyContent: "center"}}>

{this.formatHourCards()}
   </div>
   </div>
    );
   
  }
}
    
  

export default Fossil;