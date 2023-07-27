
import { createContext } from 'react';
import { useState , useEffect } from 'react';
import axios from 'axios';


export  let PaginationContext = createContext();
export default function PaginationContextProvider(props){

const [images , setImages] = useState([])

async function fetchData (){
let {data} = await axios.get(`https://jsonplaceholder.typicode.com/photos`)
setImages(data)
console.log(data);
}

useEffect(()=> {
    fetchData ()
} , [])

    return <PaginationContext.Provider value={{ images }}>
        {props.children}
    </PaginationContext.Provider>
 }