

import React from 'react'

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { MediaDetailsContext } from '../../MediaDetailsContext/MediaDetailsContext';

export default function MoviesMediaDetails() {


  let {mediatype , id} = useParams();
  let {getMediaDetails  ,moviesmediaDetails , setMoviesMediaDetails} = useContext(MediaDetailsContext);
  
  useEffect(()=> {
    getMediaDetails('movie' , id , setMoviesMediaDetails )
  } , [])

  return <>

<div className="row mt-lg-5">

  <div className="col-md-5">
    {moviesmediaDetails.poster_path?<img src={`https://image.tmdb.org/t/p/w500/`+ moviesmediaDetails.poster_path} className='w-100' alt="" />
:<img src={`https://image.tmdb.org/t/p/w500/`+ moviesmediaDetails.profile_path} className='w-100' alt="" />
} </div>
  <div className="col-md-6 offset-1">
  {moviesmediaDetails.title?    <h3 className='mt-5'>Name : <span className='text-muted h3'>{moviesmediaDetails.title}</span></h3>
:    <h3 className='mt-5'>Name : <span className='text-muted h3'>{moviesmediaDetails.name}</span></h3>
}
{moviesmediaDetails.backdrop_path?    <img src={`https://image.tmdb.org/t/p/w500/`+moviesmediaDetails.backdrop_path} className='w-100 mt-5' alt="" />
:        <h3 className='mt-5'>Place Of Birth : <span className='text-muted h3'>{moviesmediaDetails.place_of_birth}</span></h3>
}
{moviesmediaDetails.overview?    <h3 className='mt-5'>overview : <span className='text-muted h3'>{moviesmediaDetails.overview}</span></h3>
:    <h3 className='mt-5'>Birthday : <span className='text-muted h3'>{moviesmediaDetails.birthday}</span></h3>
}
{moviesmediaDetails.birthday?  <h3 className='mt-5'>Personal Details : <span className='text-muted h3'>{moviesmediaDetails.biography}</span></h3>
:''}


  </div>
  </div>  

  </>
}


