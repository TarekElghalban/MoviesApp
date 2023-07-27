import React from 'react'
import { useContext } from 'react'
import { TrendingContext } from '../../TrendingContext/TrendingContext'
import { Link } from 'react-router-dom';
export default function Home() {
let {trendingMovies , trendingTv,trendingPeople} = useContext(TrendingContext)
 return<>
  <h2 className='fw-bolder h1 mt-lg-5'>Welcome</h2>
  <h3 className='fw-bolder h2 text-muted mt-4'>Millions of movies, TV shows and people to discover. Explore now.</h3>
  <div className="brdr rounded-circle m-auto mt-lg-5 mb-lg-5"></div>

<div className="row mt-lg-5">
<div className="col-md-4">
  <div className="brdr w-25 mt-lg-5"></div>
<h3 className='h2  mt-lg-5'>Top Trending Movies</h3>
<h3 className='text-muted'>Free To Watch</h3>
<h3 className='text-muted mb-lg-5'>Latest Trailers</h3>
  <div className="brdr w-100 "></div>
</div>

{trendingMovies.map((item , index)=> <div key={index} className="col-md-3 mt-lg-5">
<div className='position-relative'>
 <Link to={`/moviesmediadetails/${item.id}/${item.media_type}`}>
 <img src={`https://image.tmdb.org/t/p/w500/`+item.poster_path} className='w-100' alt="" />
  <h5 className='text-center mt-3'>{item.title}</h5>
  </Link>

<p className='vote position-absolute top-0 end-0 p-1'>{item.vote_average.toFixed(1)}</p>
</div>
</div>

)}

</div>



<div className="row mt-lg-5">
<div className="col-md-4">
  <div className="brdr w-25 mt-lg-5"></div>
<h3 className='h2  mt-lg-5'>Top Trending Tv</h3>
<h3 className='text-muted'>Free To Watch</h3>
<h3 className='text-muted mb-lg-5'>Latest Trailers</h3>
  <div className="brdr w-100 "></div>
</div>

{trendingTv.map((item , index)=> <div key={index} className="col-md-3 mt-lg-5">
<div className='position-relative'>
<Link to={`/tvmediadetails/${item.id}/${item.media_type}`}>

 <img src={`https://image.tmdb.org/t/p/w500/`+item.poster_path} className='w-100' alt="" />
  <h5 className='text-center mt-3'>{item.name}</h5>
  </Link>

<p className='vote position-absolute top-0 end-0 p-1'>{item.vote_average.toFixed(1)}</p>
</div>
</div>)}


</div>









<div className="row mt-lg-5">
<div className="col-md-4">
  <div className="brdr w-25 mt-lg-5"></div>
<h3 className='h2  mt-lg-5'>Top Trending People</h3>
<h3 className='text-muted'>Free To Watch</h3>
<h3 className='text-muted mb-lg-5'>Latest Trailers</h3>
  <div className="brdr w-100 "></div>
</div>

{trendingPeople.map((item , index)=> <div key={index} className="col-md-3 mt-lg-5">
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
