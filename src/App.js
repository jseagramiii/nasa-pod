import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Router} from '@reach/router'
import './App.css';
import Nav from './Nav'
import Apod from './Apod'
import Rover from './Rover'


const App = () => {
  const apiKey = process.env.REACT_APP_API_KEY
  const [apod, setApod] = useState({})
  const [rover, setRover] = useState({})

  const getApod = async () => {
    let res = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
   
    setApod(res.data)
  }

  const getRover = async () => {
    let res = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/ rovers/curiosity/photos?earth_date=${today()}&api_key=${apiKey}`)

    setRover(res.data)
  }
  console.log(rover)

  useEffect(() => {
    getApod()
    getRover()
  },[])

  const today = () => {
    let today = new Date(),
        month = '' + (today.getMonth() + 1),
        day = '' + today.getDate(),
        year = today.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
} 

  return (
    <div className='app'>
      <Nav  />
      <Router>
        <Apod path='/' apod={apod} />
        <Rover path='rover' rover={rover} />
      </Router>
    </div>
    
  );
}

export default App;
