import React from "react";
import './exercise2.css';

class Exr2 extends React.Component{
   constructor(props) {  

      super(props);

      this.state = {

         currentValue: props.thisNum

      };
   }
 

   render() {
   const handlerClick1 = () => {

      this.setState({currentValue: this.state.currentValue + Number(this.props.num1)});  
   };

   const handlerClick2 = () => {

      this.setState({currentValue: this.state.currentValue + Number(this.props.num2)});  
   };

   const handlerClick3 = () => {

      this.setState({currentValue: this.state.currentValue + Number(this.props.num3)});  
   };
  return(

       <>
      
      <h1  >{this.state.currentValue}</h1>
    <button onClick={handlerClick1}>{this.props.num1}</button>
    <button onClick={handlerClick2}>{this.props.num2}</button>
    <button onClick={handlerClick3}>{this.props.num3}</button>
    
     </>
     );
  }
}


  
 
export default Exr2;