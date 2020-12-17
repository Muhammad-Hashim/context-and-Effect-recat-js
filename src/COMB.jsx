import React, { createContext } from  'react';
import { hashim } from './COMA.JSX';
  
const  MU=createContext()

const COMB=()=>{
  
     return(
         <>
              <MU.Provider value={"Muhammad"}>
            
              </MU.Provider>
         </>
     )
}


export default COMB;
export  {MU};