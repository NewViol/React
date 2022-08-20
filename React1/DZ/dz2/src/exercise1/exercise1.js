
import React from "react";
import './exercise1.css';

class DopRandom extends React.Component {

   constructor(props) {  

         super(props);    

         this.state = {

            currentValue: this.props.thisNum  

         };

   }   

   render() {

      const handlerClick = () => {
        if(Number(this.props.num1)>Number(this.props.num2)){
          this.setState({currentValue: Math.floor(Math.random() * (Number(this.props.num1) - Number(this.props.num2))) + Number(this.props.num2)});
      }
      else if(Number(this.props.num2)>Number(this.props.num1)){
          
        this.setState({currentValue: Math.floor(Math.random() * (Number(this.props.num2) - Number(this.props.num1))) + Number(this.props.num1)});
      }
      else{
        this.setState({currentValue: Number(this.props.num1)});
      }
      };

      return (
        <>
        <form onSubmit={this.props.handlerSubmit}>
         <p>Введите диапазоны</p>
        <input className="inputText"type="number"value={this.props.num1} onChange={this.props.handlerChange1}></input>
         <input className="inputText"type="number"value={this.props.num2} onChange={this.props.handlerChange2}></input>
        <h1>{this.state.currentValue}</h1>
      <button type='submit' onClick={handlerClick}>Generate</button>
      </form>
      </>
      );

   }

}
export default DopRandom;