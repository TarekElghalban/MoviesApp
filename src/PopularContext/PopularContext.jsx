
import { createContext, useState, useEffect } from 'react';
import axios from 'axios'




export let PopularContext = createContext();
export default function PopularContextProvider(props){
let [popularMovies , setPopularMovies] = useState([])
let [populartv , setPopularTv] = useState([])
let [popularpeople , setPopularPeople] = useState([])

async function getPopular(mediaType , callback){
let {data} = await axios.get(`https://api.themoviedb.org/3/${mediaType}/popular?api_key=6bee48066f15b1753ebac22ffe2e233a&language=en-US&page=1`)
callback(data.results)
}


    return <PopularContext.Provider value={{getPopular ,  setPopularMovies ,  popularMovies  ,setPopularTv ,populartv , popularpeople , setPopularPeople }}>
        {props.children}
    </PopularContext.Provider>


}