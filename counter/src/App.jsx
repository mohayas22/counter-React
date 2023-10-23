import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

   const [counter , setCounter ] = useState(0)

  //let counter = 15;

  const addValue  = () =>{
    if(counter !==20 ){
      //counter  = counter+1;
      setCounter(counter + 1);
      console.log("value added" , counter );
    }
    else{
      alert("value cannot be greater than 20.")
    }
  }
  const removeValue = () =>{
    
    if(counter !==0){
      setCounter(counter-1);
      console.log("value deleted" , counter);
    }
    else{
      alert("value cannnot be negative")
    }
  }

  return (
    <>
    <h1 className='Title'>Bhai ka Counter</h1>
    <h2>counter value : {counter}</h2>

    <button
    onClick={addValue}>add Value </button>
    <br />

    <button
    onClick={removeValue}>remove value</button>
   
      
    </>
  )
}

export default App
