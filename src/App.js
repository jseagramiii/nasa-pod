import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Router } from '@reach/router'
import './App.css'
import Nav from './Nav'
import Apod from './Apod'
import About from './About'

const App = () => {
  const apiKey = '7SsdparuNWOTb0dg0CbCkPaj1p2ndTtAlFzbfBak'
  const [apod, setApod] = useState({})
  const [date, setDate] = useState(new Date())

  // setDate(today)
  const todayF = () => {
    let today = new Date(),
      month = '' + (today.getMonth() + 1),
      day = '' + today.getDate(),
      year = today.getFullYear()

    if (month.length < 2) {
      month = '0' + month
    }
    if (day.length < 2) {
      day = '0' + day
    }
    return [year, month, day].join('-')
  }

  useEffect(() => {
    const getApod = async () => {
      const res = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`
      )
      setApod(res.data)
    }
    setDate(todayF)
    getApod() // eslint-disable-next-line
  }, [date])

  return (
    <div className='app'>
      <Nav />
      <Router>
        <Apod path='/' apod={apod} />
        <About path='About' />
      </Router>
    </div>
  )
}

export default App
