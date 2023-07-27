import React from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserDataContext } from '../../UserDataContext/UserDataStore';
import { LogOutContext } from '../../LogOutContext/LogOutContext';

export default function Navbar() {

let {userData} = useContext(UserDataContext)
let {logOut} = useContext(LogOutContext)
  return <>

<nav className="navbar   navbar-expand-lg mt-3 border border-info p-2 border-opacity-10  ">
  <div className="container-fluid">
    <h1 className='ms-3 text'>Noxe</h1> 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
   
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
     {userData?<>
      <div className="navbar-nav d-flex align-items-center ">
        <Link className=" ms-4 fw-bolder" aria-current="page" to={`home`}>Home</Link>
        {/* <Link className=" ms-4 fw-bolder" aria-current="page" to={`pagination`}>Pagination</Link> */}
        {/* <Link className=" ms-4 fw-bolder" aria-current="page" to={`posts`}>Posts</Link> */}
        <Link className=" ms-4 fw-bolder" aria-current="page" to={`movies`}>Movies</Link>
        <Link className="ms-4  fw-bolder" aria-current="page" to={`tv`}>Tv Shows</Link>
        <Link className=" ms-4 fw-bolder" aria-current="page" to={`person`} >People</Link>
      </div>
     </>:''}
      
    </div>

  </div>
  <div className="container-fluid">
    <form className="d-flex" role="search">
      <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-info" type="submit">Search</button>
     
      <div className='d-flex align-content-center mt-3'>
     {userData?<>
     <div className='d-flex  ms-lg-5 px-4'>
      <p onClick={logOut} className='ms-4 me-4 pb-2 fw-bolder h5'><Link  to={`/`}>Logout</Link></p>
     <div className='d-flex  w-100  justify-content-between align-items-center mb-3'>
      <i className="fa-brands fa-facebook ms-3 "></i>
    <i className="fa-brands fa-twitter ms-3"></i>
    <i className="fa-brands fa-instagram ms-3"></i>
    <i className="fa-brands fa-spotify ms-3"></i>
    </div>
    </div>
</>:<>
<p className='ms-4 fw-bolder'><Link to={``}>Login</Link></p>
  <p className='ms-4 fw-bolder'><Link to={`register`}>Signup</Link></p>
</>}
     

      </div>
      
    </form>
   
    
  </div>
</nav>


  </>
}
