import React from 'react';
import Layout from "../layout";
import data from '../data/villager.json'
import InsideNav from '../components/InsideNav'

class Villager extends React.Component {

  constructor(props){
    super(props);
      this.state = {
          hobbyInput: "All",
          personalityInput: "All",
          signInput: "All",
          speciesInput: "All",
          genderInput: "All",
          filteredData: data,

      };
      this.handleHobbies = this.handleHobbies.bind(this);
      this.handlePersonality = this.handlePersonality.bind(this);
      this.handleSpecies = this.handleSpecies.bind(this);
      this.handleSigns = this.handleSigns.bind(this);   
      this.handleGender = this.handleGender.bind(this);      

      this.zodiac = this.zodiac.bind(this);
   
    

    }



handleHobbies(event) { 
  this.setState({
    hobbyInput: event.target.value,    
  })

  


 
}
handleSpecies(event) { 
  this.setState({
    speciesInput: event.target.value,    
  })
}
handleSigns(event) {
  this.setState({
    signInput: event.target.value,
    
  })
 
 
}


handleGender(event) {
  this.setState({
    genderInput: event.target.value,
    
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
  var last_day =['', 19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 21, 19]; 
 
  return (day > last_day[month]) ? zodiac[month*1 + 1] : zodiac[month]; 
 }

     
  
  render() {
 
  const  formatHourCards = () => {    

   let filtered = this.state.filteredData;
    if (this.state.hobbyInput === "All"){
      filtered = this.state.filteredData;
    } else {
      filtered = this.state.filteredData.filter(hobby => hobby.hobby === this.state.hobbyInput);
    }

    let per = filtered;
if(this.state.personalityInput === "All"){
per = filtered
} else {
  per = per.filter(h => h.personality === this.state.personalityInput);
}

let species = per;
if(this.state.speciesInput === "All"){
  species = per
} else {
  species = species.filter(s => s.species === this.state.speciesInput);
}

let signs = species
if(this.state.signInput === "All"){
 signs = species
} else {
  signs = signs.filter(s => this.zodiac(s.birthday) === this.state.signInput);
}

let gender = signs
if(this.state.genderInput === "All"){
 gender = signs
 } else {
   gender = signs.filter(g => g.gender === this.state.genderInput);
 }
 



console.log(species)
    
   
      
      return gender.map((fish, i) =>     
     

      <div style={{width: "260px", padding: "5px", background: fish["bubble-color"], margin: "2px", borderRadius: "7px"}} className="card fish" key={i}>
   
      <div style={{display: "flex", justifyContent: "space-between"}}>
        
       <h3 style={{textTransform: "capitalize", color: fish["text-color"]}}>{fish.name["name-USen"]}</h3>
      
       </div>
       <div >
   
       <img  width="100%" src={"../villagers/"+ fish["file-name"] + ".png"} alt="hi" />
       </div>
       <div style={{textAlign: "left", height: "140px"}}>
       
       <p style={{color: fish["text-color"] }}><b>Species:  </b> {fish.species}</p>
       <p style={{color: fish["text-color"] }}><b>Birthday:  </b> {fish["birthday-string"]}</p>
       <p style={{color: fish["text-color"] }}><b>Catch Phrase:  </b>  "{fish["catch-phrase"]}"</p>
       <p style={{color: fish["text-color"] }}><b>Gender:  </b>{fish.gender}</p>
       <p style={{color: fish["text-color"] }}><b>Sign:  </b>{this.zodiac(fish.birthday)}</p>
       
       
       </div>
     
       <div style={{display: "flex", justifyContent: "space-between"}}>
       <p style={{color: fish["text-color"] }}>{fish.hobby}</p>
       <p style={{color: fish["text-color"] }}>{fish.personality}</p>
       </div>
     
       </div>
       )
      }

     
    return (
<Layout>
      <div>
      <InsideNav/>
      <h1>Villagers</h1>
     <form style={{textAlign: "center"}}>
     <label className="label" for="hobby">Hobby:</label>
<select id="hobby" name="hobby"   onInput={this.handleHobbies}>
  <option value="All">All</option>
  <option value="Education">Education</option>
  <option value="Fashion">Fashion</option>  
  <option value="Fitness">Fitness</option>
  <option value="Music">Music</option>
  <option value="Nature">Nature</option>
  <option value="Play">Play</option>
</select> 

<label for="personality">Personality:</label>
<select id="personality" name="personality"  onChange={this.handlePersonality}>
  <option value="All">All</option>
  <option value="Normal">Normal</option>
  <option value="Cranky">Cranky</option>  
  <option value="Jock">Jock</option>
  <option value="Lazy">Lazy</option>
  <option value="Peppy">Peppy</option>
  <option value="Smug">Smug</option>
  <option value="Snooty">Snooty</option>
  <option value="Uchi">Uchi</option>
</select> 

<label for="species">Species:</label>
<select id="species" name="species" onChange={this.handleSpecies}>
  <option value="All">All</option>
  <option value="Anteater">Anteater</option>
  <option value="Alligator">Alligator</option>
  <option value="Bear">Bear</option>  
  <option value="Bird">Bird</option>
  <option value="Bull">Bull</option>
  <option value="Cat">Cat</option>
  <option value="Cub">Cub</option>
  <option value="Chicken">Chicken</option>
  <option value="Cow">Cow</option> 
  <option value="Deer">Deer</option>  
  <option value="Dog">Dog</option>
  <option value="Duck">Duck</option>
  <option value="Elephant">Elephant</option>
  <option value="Frog">Frog</option>
  <option value="Goat">Goat</option>
  <option value="Gorilla">Gorilla</option>
  <option value="Hamster">Hamster</option>
  <option value="Hippo">Hippo</option>
  <option value="Horse">Horse</option>
  <option value="Koala">Koala</option>  
  <option value="Kangaroo">Kangaroo</option>
  <option value="Lion">Lion</option>
  <option value="Monkey">Monkey</option>
  <option value="Mouse">Mouse</option>
  <option value="Octopus">Octopus</option>
  <option value="Ostrich">Ostrich</option> 
  <option value="Eagle">Eagle</option>  
  <option value="Penguin">Penguin</option>
  <option value="Duck">Duck</option>
  <option value="Pig">Pig</option>
  <option value="Rabbit">Rabbit</option>
  <option value="Rhino">Rhino</option>
  <option value="Sheep">Sheep</option>
  <option value="Squirrel">Squirrel</option>
  <option value="Tiger">Tiger</option>
  <option value="Wolf">Wolf</option>
</select> 

<label for="hobby">Signs:</label>
<select id="signs" name="signs"   onChange={this.handleSigns}>
  <option value="All">All</option>
  <option value="Aquarius">Aquarius</option>
  <option value="Aries">Aries</option>  
  <option value="Cancer">Cancer</option>
  <option value="Capricorn">Capricorn</option>
  <option value="Gemini">Gemini</option>
  <option value="Leo">Leo</option>
  <option value="Libra">Libra</option>
  <option value="Pisces">Pisces</option>
  <option value="Sagittarius">Sagittarius</option>
  <option value="Scorpio">Scorpio</option>
  <option value="Taurus">Taurus</option>
  <option value="Virgo">Virgo</option>
</select> 

<label for="gender">Gender:</label>
<select id="gender" name="gender"   onInput={this.handleGender}>
<option value="All">All</option>
  <option value="Male">Male</option>
  <option value="Female">Female</option>
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
    
  

export default Villager;
