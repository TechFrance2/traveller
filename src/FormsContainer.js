import React from 'react'
import FormsComponent from './FormsComponent'

class FormsContainer extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        firstName: " ", 
        lastName: " ",
        age: " ",
        gender: " ", 
        destination: " ",
        isKosher: false,
        isLowSodium: false, 
        isGlutenFree: false,
        isDairyFree: false, 
        isVegan: false 
      }
  this.handleChange = this.handleChange.bind(this)
    }
  handleChange(event) {
    const {name, value, type, checked} = event.target
      type === "checkbox" ? 
        this.setState({[name]: checked}) : this.setState({[name]: value})
    
  }
   render() {
     return (
     <FormsComponent 
     handleChange = {this.handleChange}
     data= {this.state}
     />
     )
   }
  }
  export default FormsContainer
