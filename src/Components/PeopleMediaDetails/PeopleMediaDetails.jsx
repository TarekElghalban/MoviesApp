import React from 'react'

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { MediaDetailsContext } from '../../MediaDetailsContext/MediaDetailsContext';

export default function PeopleMediaDetails() {
let {mediatype , id} = useParams();
let {getMediaDetails  ,peoplemediaDetails , setPeopleMediaDetails} = useContext(MediaDetailsContext);

useEffect(()=> {
  getMediaDetails('person' , id , setPeopleMediaDetails )
  
} , [])
  return <>

<div className="row mt-lg-5">

  <div className="col-md-5">
    {peoplemediaDetails.poster_path?<img src={`https://image.tmdb.org/t/p/w500/`+ peoplemediaDetails.poster_path} className='w-100' alt="" />
:<img src={`https://image.tmdb.org/t/p/w500/`+ peoplemediaDetails.profile_path} className='w-100' alt="" />
} </div>
  <div className="col-md-6 offset-1">
  {peoplemediaDetails.title?    <h3 className='mt-5'>Name : <span className='text-muted h3'>{peoplemediaDetails.title}</span></h3>
:    <h3 className='mt-5'>Name : <span className='text-muted h3'>{peoplemediaDetails.name}</span></h3>
}
{peoplemediaDetails.backdrop_path?    <img src={`https://image.tmdb.org/t/p/w500/`+peoplemediaDetails.backdrop_path} className='w-100 mt-5' alt="" />
:        <h3 className='mt-5'>Place Of Birth : <span className='text-muted h3'>{peoplemediaDetails.place_of_birth}</span></h3>
}
{peoplemediaDetails.overview?    <h3 className='mt-5'>overview : <span className='text-muted h3'>{peoplemediaDetails.overview}</span></h3>
:    <h3 className='mt-5'>Birthday : <span className='text-muted h3'>{peoplemediaDetails.birthday}</span></h3>
}
{peoplemediaDetails.birthday?  <h3 className='mt-5'>Personal Details : <span className='text-muted h3'>{peoplemediaDetails.biography}</span></h3>
:''}


  </div>
  </div>  
  
  </>
}
