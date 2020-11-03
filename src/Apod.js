import React from 'react'

const Apod = ({apod}) => {

    return (
         <div className='apod'>
            <a href='https://nasa.gov'>
            <img style={{width: '20em'}}src='https://www.nasa.gov/sites/default/files/thumbnails/image/s75-31690.jpeg' alt='nasa'></img>
            </a>
            <h2>Astronomy Picture of the Day || {apod.date}</h2>
            <h2><em>{apod.title}</em></h2>
            <img src={apod.url} alt='apod'></img>
            <h6>copyright - <strong>{apod.copyright}</strong></h6>
            <h3>{apod.explanation}</h3>
        </div>
    )
}

export default Apod
