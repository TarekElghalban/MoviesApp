
import { createContext } from 'react';
import { useState } from 'react';
import axios from 'axios'




export let TopRatedContext = createContext();

 export default function TopRatedContextProvider(props){

let [topRatedMovies , setTopRatedMovies] = useState([])
let [topRatedTv , setTopRatedTv] = useState([])
let [topRatedPeople , setTopRatedPeople] = useState([])

async function getTopRated(media_type , callback){
let {data} = await axios.get(`https://api.themoviedb.org/3/${media_type}/top_rated?api_key=6bee48066f15b1753ebac22ffe2e233a&language=en-US&page=1`)
callback(data.results)

}





return <TopRatedContext.Provider value={{getTopRated , topRatedMovies , setTopRatedMovies , topRatedTv , setTopRatedTv}} >
    {props.children}
</TopRatedContext.Provider>

 }