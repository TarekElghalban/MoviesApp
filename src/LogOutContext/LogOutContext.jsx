
import { createContext } from 'react';
import { useContext } from 'react';
import { UserDataContext } from '../UserDataContext/UserDataStore';
import {Navigate}   from 'react-router-dom';

export let LogOutContext = createContext();
export default function LogOutContextProvider(props){
let {setuserData} = useContext(UserDataContext)
function logOut(){
localStorage.removeItem('userToken')
setuserData(null);
<Navigate to='/login' />
}


    return <LogOutContext.Provider value={{logOut}}>
{props.children}
    </LogOutContext.Provider>
};
