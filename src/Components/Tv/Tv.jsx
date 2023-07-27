// import React from 'react'
// import { useContext } from 'react'
// import { MediaContext } from './../../Context/ContextStore';
// import MediaItems from '../MediaItems/MediaItems';




// export default function Tv() {


//   let {trendingtv , tv ,topRatedtv , upcomibntv} = useContext(MediaContext)

//   return <>
  
//   <div className="row mt-lg-5 gy-4">
// <div className="col-md-4">
//     <div className="brdr w-25"></div>
//   <h3 className='h2 mt-lg-5'>Top Trending TvShows</h3>
//   <p className='text-muted h4 mb-lg-5 mt-3'>To Watch Right Now</p>
//   <div className="brdr w-100 ">
//   </div>
// </div>



// {trendingtv.map((item,index)=> <MediaItems item={item} key={index} /> )}
// {tv.map((item,index)=> <MediaItems item={item} key={index} /> )}
// {topRatedtv.map((item,index)=> <MediaItems item={item} key={index} /> )}
// {upcomibntv.map((item,index)=> <MediaItems item={item} key={index} /> )}




//   </div>
  
  
  
  
//   </>
// }

import React from 'react'
import { useContext } from 'react'
import { TrendingContext } from './../../TrendingContext/TrendingContext';
import { Link } from 'react-router-dom';
import { PopularContext } from './../../PopularContext/PopularContext';
import { useEffect } from 'react';
import { TopRatedContext } from './../../TopRatedContext/TopRatedContext';
export default function Tv() {
  let {getTopRated ,topRatedTv , setTopRatedTv} = useContext(TopRatedContext)
  let { getPopular,setPopularTv ,populartv} = useContext(PopularContext)
let {trendingTv} = useContext(TrendingContext);

useEffect(()=> {
  getPopular('tv' , setPopularTv );
  getTopRated('tv' , setTopRatedTv);
},[])
  return<>
  <h2 className='text-center mt-lg-5 h1'>Tv Shows To Watch</h2>
  <div className="brdr w-50 m-auto mt-lg-5 mb-lg-5"></div>

  <div className="row">

  {trendingTv.map((item , index)=> <div key={index} className="col-md-3 mt-lg-5">
<div className='position-relative'>
<Link to={`/tvmediadetails/${item.id} /'tv'`}>

 <img src={`https://image.tmdb.org/t/p/w500/`+item.poster_path} className='w-100' alt="" />
  <h5 className='text-center mt-3'>{item.name}</h5>
  </Link>

<p className='vote position-absolute top-0 end-0 p-1'>{item.vote_average.toFixed(1)}</p>
</div>
</div>)}













{populartv.map((item , index)=> <div key={index} className="col-md-3 mt-lg-5">
<div className='position-relative'>
<Link to={`/tvmediadetails/${item.id}/${item.media_type}`}>

 <img src={`https://image.tmdb.org/t/p/w500/`+item.poster_path} className='w-100' alt="" />
  <h5 className='text-center mt-3'>{item.name}</h5>
  </Link>

<p className='vote position-absolute top-0 end-0 p-1'>{item.vote_average.toFixed(1)}</p>
</div>
</div>)}













{topRatedTv.map((item , index)=> <div key={index} className="col-md-3 mt-lg-5">
<div className='position-relative'>
<Link to={`/tvmediadetails/${item.id}/${item.media_type}`}>

 <img src={`https://image.tmdb.org/t/p/w500/`+item.poster_path} className='w-100' alt="" />
  <h5 className='text-center mt-3'>{item.name}</h5>
  </Link>

<p className='vote position-absolute top-0 end-0 p-1'>{item.vote_average.toFixed(1)}</p>
</div>
</div>)}





  </div>
  
  
  
  </>
}