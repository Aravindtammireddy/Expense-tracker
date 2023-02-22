import React, { useReducer } from "react";
import { createContext } from "react";
import AppReducer from "./AppReducer";
import axios from 'axios';
 const intialstate = {
    transactions : []
}

 export const Globalcontext = createContext(intialstate);

 export const GlobalProvider = ({children}) => {
     const [state,dispatch] = useReducer(AppReducer , intialstate);

     async function gettransactions(){
      try {
         const res = await axios.get('api/v1/transactions');
         dispatch ({
            type : "GET_TRANSACTIONS" ,
            payload: res.data
         })
      }
         catch(er){
            console.log(er);
         } 
     }

     async function delelteTransaction(_id){
      try {
         console.log(_id);
         await axios.delete(`/api/v1/transactions/${_id}`);
         dispatch({
            type : 'DELETE_TRANSACTION',
            payload : _id
         });
        }
         catch(er){   console.log(er);  } 
      }
             

     async function addTransaction(transaction){
      try {
        
         await axios.post(`/api/v1/transactions`,transaction);
         dispatch({
            type : 'ADD_TRANSACTION',
            payload : transaction
         });
        }
         catch(er){   console.log(er);  } 
       
}
    
     return (
        <Globalcontext.Provider value = {{ 
            transactions : state.transactions,
            gettransactions,
            delelteTransaction , 
            addTransaction
            }}>
            {children}
        </Globalcontext.Provider>
     )
 }

