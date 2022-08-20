import './app.css';
import DopRandom from '../exercise1';
import Exr2 from '../exercise2';
import { useState } from 'react';

function App () {
  const handlerChange1=(e)=>{
    setNum1(e.target.value);
  }
  const handlerChange2=(e)=>{
    setNum2(e.target.value);
  }
 
  
  const handlerSubmit=(e)=>{
    e.preventDefault();
  }
  
  

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num, setNum] = useState(0);

      return (

         <>
         
         <h3>Exercise 1</h3>
        <DopRandom num1={num1} num2={num2} thisNum={1} handlerChange2={handlerChange2} handlerChange1={handlerChange1} handlerSubmit={handlerSubmit}/>
        
        <div>  
        </div>
        <h3>Exercise 2</h3>
        <Exr2 thisNum={0} num1={'+15'} num2={'-15'} num3={'+35'}/>
         </>

      );

   

}

export default App;