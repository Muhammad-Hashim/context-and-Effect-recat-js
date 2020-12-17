import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './App.css';
import { hashim } from './COMA.JSX';
import { MU } from './COMB';
import React ,{ useContext, useEffect, useState } from 'react';


function App() {
  const  fa =useContext(MU);
  const   [num, setnum] =useState(0);
  const   [nums, setnums] =useState(0);
  useEffect(()=>{
    alert("i am the click on the button")
    document.title=`you click  me ${num} time`;
  },[  ] )
  return (  
    <>
       <h1>my name is {fa} Hashim</h1>
        <button onClick={()=>{setnum(num+1)}}>click here {num}</button>
        <button onClick={()=>{setnums(nums+1)}}>click here {nums}</button>
       </>
  
  );
}

export default App;
