import React from 'react'
import spin from './spin.gif'

const Loading = () => {
    return (
        <div>
            <img src={spin} alt="loading" style={{display: 'block', margin: '0 auto'}} />
        </div>
    )
}

export default Loading
