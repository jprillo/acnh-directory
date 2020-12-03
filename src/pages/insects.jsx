import React from 'react';
import Layout from "../layout";
import InsideNav from '../components/InsideNav'

import data from '../data/insect.json'

class Insects extends React.Component {

  constructor(props){
    super(props);
      this.state = {
          rarityInput: "All",
          locationInput: "All",
          monthInput: 0,
          locationInput: "All",
            sortInput: "none",
          filteredData: data,

      };
      
      this.handleNhmonth = this.handleNhmonth.bind(this);
      this.handleRarity = this.handleRarity.bind(this);
      this.handlePersonality = this.handlePersonality.bind(this);
      this.handleSort = this.handleSort.bind(this);
      this.handleLocation = this.handleLocation.bind(this);      
      
      this.zodiac = this.zodiac.bind(this);
   
    

    }



handleRarity(event) { 
  this.setState({
    rarityInput: event.target.value,    
  }) 
}
handleNhmonth(event) { 
    this.setState({
      monthInput: event.target.value,    
    })
}
handleSort(event) { 
    
  this.setState({sortInput: event.target.value,})
}
handleLocation(event) {
  this.setState({
    locationInput: event.target.value,
    
  })
 
 
}


handlePersonality(event) {
  this.setState({
    personalityInput: event.target.value,
  });
}



    
zodiac(date){ 
  var newDate = date.replace('/', ' ').split(' ');
  var month = parseInt(newDate[1]);
  var day = parseInt(newDate[0]);      
  var zodiac =['', 'Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn']; 
  var last_day =['', 19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20, 19]; 
 
  return (day > last_day[month]) ? zodiac[month*1 + 1] : zodiac[month]; 
 }

     
  
  render() {
 
  const  formatHourCards = () => {    

   let filtered = this.state.filteredData;
    if (this.state.rarityInput === "All"){
      filtered = this.state.filteredData;
    } else {
      filtered = this.state.filteredData.filter(r => r.availability.rarity === this.state.rarityInput);
    }

    let m = filtered;

    let hmm =parseInt(this.state.monthInput);  
    if (hmm === 0){
        m = filtered;
      } else {
       
        m = m.filter(r => r.availability["month-array-northern"].includes(hmm));
       
      }
      let test = m;
      switch (this.state.sortInput) {
        case "none":
          test =test.sort((a, b) => (a.id > b.id) ? 1 : -1); ;
          break;
        case "highPrice":
          test = test.sort((a, b) => (a.price > b.price) ? 1 : -1);
          break;
        case "lowPrice":
           test = test.sort((a, b) => (a.price < b.price) ? 1 : -1);
          break;
          case "alpha":
            test = test.sort((a, b) => (a.name["name-USen"] < b.name["name-USen"]) ? 1 : -1);
           break;
      
      }
     
     let location = test;

    if (this.state.locationInput === "All"){
        location = test;
      } else {
       
        location = test.filter(l => l.availability.location.replace(/ *\([^)]*\) */g, "") === this.state.locationInput);
       
      }



    

      
      return location.map((fish, i) =>     
     

      <div style={{width: "260px", padding: "5px", background: (() => {
        switch (fish.availability.rarity) {
          case "Common":   return 'lightblue';
          case "Uncommon": return 'aqua';
          case "Rare": return 'purple';
          case "Ultra-rare": return 'red';
      default:      return "green";
        }
      })(), margin: "2px", borderRadius: "7px"}} className="card fish" key={i}>
      <div style={{backgroundColor: "#EFEEE7", margin: "5px", padding: "10px"}}>
      <div style={{display: "flex", justifyContent: "space-between", height: "4em"}}>
       <h3 style={{textTransform: "capitalize", color: "black"}}>{fish.name["name-USen"]}</h3>
      
       </div>
       <div style={{background: "#5F9CD3", textAlign: "center"}}>
       <img  width="60%" src={fish["icon_uri"]} alt="hi" />
       </div>
       <div style={{textAlign: "left", height: "140px"}}>
       <p>Location: {fish.availability.location}</p>
       <p>Time of Day: {fish.availability.time || "All Day"}</p>
     <p>TIme of Year</p>
     <p>North: {fish.availability["month-northern"] || "All Year"}</p>
     <p>South: {fish.availability["month-southern"]  || "All Year"}</p>
      </div>
       </div>
       <div style={{display: "flex", justifyContent: "space-between"}}>
       <p>{fish.availability.rarity}</p>
       <p>{fish.price}</p>
       </div>
     
       </div>
 
       )
      }

const monthInput = () => {   
let months = ["All", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
return months.map((month, i) => 
  <option value={i}>{month}</option> 

)
}





     
    return (
<Layout style={{textAlign: "center"}}>
      <div>
      <InsideNav/>
      <h1>Fish</h1>
     <form style={{textAlign: "center"}}>

<label for="rarity">Rarity:</label>
<select id="rarity" name="rarity"   onInput={this.handleRarity}>
  <option value="All">All</option>
  <option value="Common">Common</option>
  <option value="Uncommon">Uncommon</option>  
  <option value="Rare">Rare</option>
  <option value="Ultra-rare">Ultra-rare</option>

</select> 


<label for="location">Location:</label>
<select id="location" name="location"   onInput={this.handleLocation}>
  <option value="All">All</option>
  <option value="Flying">Flying</option>
  <option value="On trees">Trees</option>  
  <option value="Flying near hybrid flowers">Hybrid flowers</option>
  <option value="On tree stumps">Stumps</option>
  <option value="On rotten food">Rotten food</option>
  <option value="On villagers">Villagers</option>
  <option value="On ponds and rivers">Ponds and rivers</option>  
  <option value="Near trash">Trash</option>
  <option value="On the ground">Ground</option>
  <option value="On flowers">Flowers</option>
  <option value="On beach rocks">Beach rocks</option>  
  <option value="On rocks when raining">On rocks(when raining)</option>
  <option value="Hitting rocks">Hit rocks</option>
</select> 

<label for="sort">Sort by Price:</label>
<select id="sort" name="sort"   onInput={this.handleSort}>
<option value="none"></option>
  <option value="highPrice">Price (low - high)</option>
  <option value="lowPrice">price (high - low)</option>
</select> 



<label for="Month">Month:</label>
<select id="nh-month" name="nh-month"   onInput={this.handleNhmonth}>
{monthInput()}

</select> 



       </form> 
<div style={{padding: "20px 10%", display: "flex", flexWrap: "wrap", justifyContent: "center"}}>

{formatHourCards()}
   </div>
   </div>
   </Layout>
    );
   
  }
}
    
  

export default Insects;