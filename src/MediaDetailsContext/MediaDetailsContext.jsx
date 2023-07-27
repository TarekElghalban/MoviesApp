
import axios from 'axios';
import { createContext, useState } from 'react';




 export let MediaDetailsContext = createContext();
export default function MediaDetailsContextProvider(props){
    let [moviesmediaDetails , setMoviesMediaDetails] = useState([])
    let [tvmediaDetails , setTvMediaDetails] = useState([])
    let [peoplemediaDetails , setPeopleMediaDetails] = useState([])
async function getMediaDetails (mediaType ,id , callback){
let {data} = await axios.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=6bee48066f15b1753ebac22ffe2e233a&language=en-US`)
callback(data);
}


return <MediaDetailsContext.Provider value={{getMediaDetails ,moviesmediaDetails , setMoviesMediaDetails , tvmediaDetails , setTvMediaDetails , peoplemediaDetails , setPeopleMediaDetails   }}>
    {props.children}
</MediaDetailsContext.Provider>
 }