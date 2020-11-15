import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { ThemeContext } from './ultils/themes/ThemeProvider'
import LoggedRoute from './routes/LoggedRoute'
import UnloggedRoute from './routes/UnloggedRoute'
import { useDispatch, useSelector } from 'react-redux'
import { actionLogin } from './actions/user'
import api from './ultils/api'


export default function App (){
  const setThemeName = useContext(ThemeContext);
  const currentUser = useSelector(state => state.user);

  //componentDidMount
  useEffect(() => {    
    async function getProduct(){
      await api.get('/products/get')
        .then(res=>{
          console.log(res);
        }).catch(err=>{
          console.log(err)
        })
    }
    getProduct();
  }, [])

  //componentDidUpdate
  useEffect(() => {
    //console.log(writers)
  }, [setThemeName])

  return currentUser!==null ? 
  <LoggedRoute multiTheme={setThemeName} />:
  <UnloggedRoute multiTheme={setThemeName}/>
}