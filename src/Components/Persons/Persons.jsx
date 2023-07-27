// 

import React from 'react'
import { useContext } from 'react'
import { TrendingContext } from './../../TrendingContext/TrendingContext';
import { Link } from 'react-router-dom';
import { PopularContext } from './../../PopularContext/PopularContext';
import { useEffect } from 'react';
export default function Tv() {
  let { getPopular , popularpeople , setPopularPeople} = useContext(PopularContext)
let {trendingPeople} = useContext(TrendingContext);


useEffect(()=> {
 
  getPopular('person' , setPopularPeople )
},[])

  return<>
  <h2 className='text-center mt-lg-5 h1'>People To Watch</h2>
  <div className="brdr w-50 m-auto mt-lg-5 mb-lg-5"></div>
  <div className="row">

  
{trendingPeople.map((item , index)=> <div key={index} className="col-md-3 mt-lg-5">
<div className='position-relative'>
<Link to={`/peoplemediadetails/${item.id}/${item.media_type}`}>
 <img src={`https://image.tmdb.org/t/p/w500/`+item.profile_path} className='w-100' alt="" />
  <h5 className='text-center mt-3'>{item.name}</h5>
  </Link>
<p className='vote position-absolute top-0 end-0 p-1'>{item.popularity.toFixed(0)}</p>
</div>
</div>)}










 
{popularpeople.map((item , index)=> <div key={index} className="col-md-3 mt-lg-5">
<div className='position-relative'>
<Link to={`/peoplemediadetails/${item.id}/${item.media_type}`}>
 <img src={`https://image.tmdb.org/t/p/w500/`+item.profile_path} className='w-100' alt="" />
  <h5 className='text-center mt-3'>{item.name}</h5>
  </Link>
<p className='vote position-absolute top-0 end-0 p-1'>{item.popularity.toFixed(0)}</p>
</div>
</div>)}




</div>
  
  
  
  </>
}