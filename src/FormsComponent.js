import React from 'react'


function FormsComponent(props) {
    return (
     <main>
       <form>
         <input 
         type= "text"
         value= {props.data.value}
        
         name= "firstName"
         placeholder= "First Name"
         onChange= {props.handleChange} />
       <br />
         <input 
         type= "text"
         value= {props.data.value}    
         name= "lastName"
         placeholder= "Last Name"
         onChange= {props.handleChange} 
       /><br />
         <input 
         type= "text"
         value= {props.data.value}
         name= "age"
         placeholder= "Age" 
         onChange= {props.handleChange}
      /><br />

        {/* create radio buttons for gender here */}
        <label>
        <input 
          type= "radio"
          name= "gender"
          value= "male"
          checked= {props.data.gender === "male"}
          onChange = {props.handleChange} /> Male
        </label>

        <label>
        <input 
          type= "radio"
          name= "gender"
          value= "female"
          checked= {props.data.gender === "female"}
          onChange= {props.handleChange} /> Female
        </label>  
        <br />
        {/*create selectbox for location here */}
        <label> Destination: </label>
        <select
          value= {props.data.destination}
          name= "destination"
          onChange= {props.handleChange}>
           <option value= " " >-- Please Choose a Destination --</option> 
           
           <option value= "Hawaii" >Hawaii</option>
           <option value= "Bahamas" >Bahamas</option>
           <option value= "Switzerland">Switzerland</option>
           <option value= "Italy" >Italy</option>
        </select>
       
        <br />
        {/* create checkboxes for dietary restrictions here */}
        <label>Dietary Restrictions:</label>
          <input
          type= "checkbox"
          name= "isKosher"
          value= "kosher"
          checked= {props.data.isKosher}
          onChange= {props.handleChange}/>
          Kosher

          <input
          type= "checkbox"
          name= "isLowSodium"
          value= "lowSodium"
          checked= {props.data.isLowSodium}
          onChange= {props.handleChange}/>
          Low-Sodium

          <input
          type= "checkbox"
          name= "isGlutenFree"
          value= "glutenFree"
          checked= {props.data.isGlutenFree}
          onChange= {props.handleChange}/>
          Gluten-Free

          <input
          type= "checkbox"
          name= "isDairyFree"
          value= "dairyFree"
          checked= {props.data.isDairyFree}
          onChange= {props.handleChange}/>
          Dairy-Free

          <input
          type= "checkbox"
          name= "isVegan"
          value= "vegan"
          checked= {props.data.isVegan}
          onChange= {props.handleChange}/>
          Vegan
                

      <h1> Name: {props.data.firstName} {props.data.lastName} </h1>
      <h1> Age: {props.data.age} </h1>
      <h1>  Gender: {props.data.gender} </h1>
      <p> Travel Destination: {props.data.destination}</p>
      <p> Dietary Restrictions: </p>
      <p> Kosher: {props.data.isKosher ? "Yes" : "No"} </p> 
      <p> Low-Sodium: {props.data.isLowSodium ? "Yes" : "No"} </p>
      <p> Gluten-Free: {props.data.isGlutenFree ? "Yes" : "No"} </p>
      <p> Dairy-Free: {props.data.isDairyFree ? "Yes" : "No"} </p>
      <p> Vegan: {props.data.isVegan ? "Yes" : "No"} </p>

          <button>Submit</button>
       </form>
     </main>
    );

  }
  


export default FormsComponent;

