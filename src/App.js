import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';
import Apod from './Apod'


const App = () => {
  const apiKey = process.env.REACT_APP_API_KEY
  const [apod, setApod] = useState({})

  const getApod = async () => {
    const res = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
    setApod(res.data)
  }

  useEffect(() => {
    getApod()
  },[])

  return (
      <div className='app'>
        <Apod apod={apod}/>
      </div>
    );
}

export default App;
