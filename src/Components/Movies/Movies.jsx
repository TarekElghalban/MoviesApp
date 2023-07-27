


import React from 'react'
import { useContext } from 'react'
import { TrendingContext } from './../../TrendingContext/TrendingContext';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { PopularContext } from './../../PopularContext/PopularContext';
import { TopRatedContext } from '../../TopRatedContext/TopRatedContext';


export default function Movies() {


  let {getTopRated , topRatedMovies , setTopRatedMovies} = useContext(TopRatedContext)
  let {getPopular ,  setPopularMovies ,  popularMovies} = useContext(PopularContext)
let {trendingMovies } = useContext(TrendingContext);
useEffect(()=> {
  getPopular('movie' , setPopularMovies );
  getTopRated('movie' , setTopRatedMovies)
},[])

  return<>
  <h2 className='text-center mt-lg-5 h1'>MOvies To Watch</h2>
  <div className="brdr w-50 m-auto mt-lg-5 mb-lg-5"></div>

  <div className="row">
  {trendingMovies.map((item , index)=> <div key={index} className="col-md-3 mt-lg-5">
<div className='position-relative'>
<Link to={`/moviesmediadetails/${item.id}/${item.media_type}`}>

 <img src={`https://image.tmdb.org/t/p/w500/`+item.poster_path} className='w-100' alt="" />
  <h5 className='text-center mt-3'>{item.title}</h5>
  </Link>

<p className='vote position-absolute top-0 end-0 p-1'>{item.vote_average.toFixed(1)}</p>
</div>
</div>)}












{popularMovies.map((item , index)=> <div key={index} className="col-md-3 mt-lg-5">
<div className='position-relative'>
<Link to={`/moviesmediadetails/${item.id}/${item.media_type}`}>

 <img src={`https://image.tmdb.org/t/p/w500/`+item.poster_path} className='w-100' alt="" />
  <h5 className='text-center mt-3'>{item.title}</h5>
  </Link>

<p className='vote position-absolute top-0 end-0 p-1'>{item.vote_average.toFixed(1)}</p>
</div>
</div>)}







{topRatedMovies.map((item , index)=> <div key={index} className="col-md-3 mt-lg-5">
<div className='position-relative'>
<Link to={`/moviesmediadetails/${item.id}/${item.media_type}`}>

 <img src={`https://image.tmdb.org/t/p/w500/`+item.poster_path} className='w-100' alt="" />
  <h5 className='text-center mt-3'>{item.title}</h5>
  </Link>

<p className='vote position-absolute top-0 end-0 p-1'>{item.vote_average.toFixed(1)}</p>
</div>
</div>)}






  </div>
  
  

  

  
  
  </>
}
