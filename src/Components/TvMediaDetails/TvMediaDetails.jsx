import React from 'react'

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { MediaDetailsContext } from '../../MediaDetailsContext/MediaDetailsContext';

export default function TvMediaDetails() {
let {mediatype , id} = useParams();
let {getMediaDetails  , tvmediaDetails , setTvMediaDetails} = useContext(MediaDetailsContext);

useEffect(()=> {
  getMediaDetails('tv' , id , setTvMediaDetails )
  
} , [])
  return <>

<div className="row mt-lg-5">

  <div className="col-md-5">
    {tvmediaDetails.poster_path?<img src={`https://image.tmdb.org/t/p/w500/`+ tvmediaDetails.poster_path} className='w-100' alt="" />
:<img src={`https://image.tmdb.org/t/p/w500/`+ tvmediaDetails.profile_path} className='w-100' alt="" />
} </div>
  <div className="col-md-6 offset-1">
  {tvmediaDetails.title?    <h3 className='mt-5'>Name : <span className='text-muted h3'>{tvmediaDetails.title}</span></h3>
:    <h3 className='mt-5'>Name : <span className='text-muted h3'>{tvmediaDetails.name}</span></h3>
}
{tvmediaDetails.backdrop_path?    <img src={`https://image.tmdb.org/t/p/w500/`+tvmediaDetails.backdrop_path} className='w-100 mt-5' alt="" />
:        <h3 className='mt-5'>Place Of Birth : <span className='text-muted h3'>{tvmediaDetails.place_of_birth}</span></h3>
}
{tvmediaDetails.overview?    <h3 className='mt-5'>overview : <span className='text-muted h3'>{tvmediaDetails.overview}</span></h3>
:    <h3 className='mt-5'>Birthday : <span className='text-muted h3'>{tvmediaDetails.birthday}</span></h3>
}
{tvmediaDetails.birthday?  <h3 className='mt-5'>Personal Details : <span className='text-muted h3'>{tvmediaDetails.biography}</span></h3>
:''}


  </div>
  </div>  
  
  </>
}
