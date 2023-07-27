import './App.css';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Movies from './Components/Movies/Movies';
import Tv from './Components/Tv/Tv';
import {  createBrowserRouter,  RouterProvider } from 'react-router-dom';
import Persons from './Components/Persons/Persons';
import Login from './Components/Login/Login';
import Logout from './Components/Logout/Logout';
import UserDataContextProvider from './UserDataContext/UserDataStore';
import Register from './Components/Register/Register';
import LogOutContextProvider from './LogOutContext/LogOutContext';
import TrendingContextProvider from './TrendingContext/TrendingContext';
import MediaDetailsContextProvider from './MediaDetailsContext/MediaDetailsContext';
import PopularContextProvider from './PopularContext/PopularContext';
import TopRatedContextProvider from './TopRatedContext/TopRatedContext';
import TvMediaDetails from './Components/TvMediaDetails/TvMediaDetails';
import PeopleMediaDetails from './Components/PeopleMediaDetails/PeopleMediaDetails';
import MoviesMediaDetails from './Components/MoviesMediaDetails/MoviesMediaDetails';
import PaginationContextProvider from './PaginationContext/PaginationContext';
// import Pagination from './Components/Pagination/Pagination';
// import Posts from './Components/Posts/Posts';




function App() {
let routers = createBrowserRouter([
  {path:'/' , element:<Layout/>, children:[
    {path:'home' , element: <Home/>},
    {path:'movies' , element:<Movies/>},
    {path:'tv' , element:<Tv/>},
    {path:'person' , element:<Persons/>},
    {path:'moviesmediadetails/:id/:mediatype' , element:<MoviesMediaDetails/>},
    {path:'tvmediadetails/:id/:mediatype' , element:<TvMediaDetails/>},
    {path:'peoplemediadetails/:id/:mediatype' , element:<PeopleMediaDetails/>},
    {path:"MoviesApp", element:<Login/>},
    {index:true , element:<Login/>},
    {path:'register' , element:<Register/>},
    {path:'logout' , element:<Logout/>},
  ]
}
])



  return <>
  <UserDataContextProvider>
  <LogOutContextProvider>
    <PaginationContextProvider>
    <TopRatedContextProvider>
    <TrendingContextProvider>
      <MediaDetailsContextProvider>
        <PopularContextProvider>
          <TopRatedContextProvider>
  <RouterProvider router={routers} />
  </TopRatedContextProvider>
  </PopularContextProvider>
  </MediaDetailsContextProvider>
  </TrendingContextProvider>
  </TopRatedContextProvider>
  </PaginationContextProvider>
  </LogOutContextProvider>
  </UserDataContextProvider>
  </>
}

export default App;
