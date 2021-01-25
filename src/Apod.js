import React from 'react'

const Apod = ({ apod }) => {
  let media
  if (apod.media_type === 'video') {
    media = (
      <iframe title='apod' width='900' height='600' src={apod.url}></iframe>
    )
  } else {
    media = <img src={apod.hdurl} style={{ maxWidth: '60em' }} alt='apod'></img>
  }
  let copyright
  if (apod.copyright) {
    copyright = (
      <p>
        copyright - <strong>{apod.copyright}</strong>
      </p>
    )
  } else {
    copyright = (
      <p style={displayNone}>
        copyright - <strong>{apod.copyright}</strong>
      </p>
    )
  }

  return (
    <div className='apod'>
      <a href='https://nasa.gov'>
        <img
          style={{ width: '20em' }}
          src='https://www.nasa.gov/sites/default/files/thumbnails/image/s75-31690.jpeg'
          alt='nasa'
        ></img>
      </a>
      <h1>Astronomy Image of the Day || {apod.date}</h1>
      <h2>
        <em>{apod.title}</em>
      </h2>
      {media}
      {copyright}
      <h3>
        <strong>Explanation:</strong> {apod.explanation}
      </h3>
    </div>
  )
}

const displayNone = { display: 'none' }

export default Apod
