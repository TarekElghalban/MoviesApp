
import { createContext, useEffect, useState } from 'react';
import axios from 'axios'


export let TrendingContext = createContext();
export default function TrendingContextProvider(props){
let [trendingMovies , setTrendingMovies] = useState([]);
let [trendingTv , setTrendingTv] = useState([]);
let [trendingPeople , setTrendingPeople] = useState([]);

async function getTrending(media_type , callback){
let {data} = await axios.get(`https://api.themoviedb.org/3/trending/${media_type}/week?api_key=6bee48066f15b1753ebac22ffe2e233a`)
callback(data.results)
};

useEffect(()=> {
    getTrending("movie" , setTrendingMovies )
    getTrending("tv" , setTrendingTv )
    getTrending("person" , setTrendingPeople )
},[]);

    return <TrendingContext.Provider value={{trendingMovies , trendingTv,trendingPeople}}>
        {props.children}
    </TrendingContext.Provider>
}