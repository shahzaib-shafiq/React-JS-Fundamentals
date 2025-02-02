import { useState,useEffect } from 'react'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
function App() {
  const [counter,setCounter]=useState(0);
  
  const addValue=()=>{
    setCounter(counter+1);
    toast("Counter is Added");
  }
  const removeValue=()=>{
    if (counter>0){
      setCounter(counter-1);
    toast("Counter is Removed");
    }
    else{
      toast("Counter is Cannot be less than 0");
    
    }
  }
    return (
      <>
  <h1>Counter</h1>
  <h2>Counter Value:{counter}</h2>
     <ToastContainer />
     
     <button onClick={addValue}>Add</button>
     <br />
  
     <button onClick={removeValue}>Remove</button>
      </>
    )
  }
export default App
