import React from 'react'
import { Link } from '@reach/router'

const Nav = () => {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <Link to='/'>Home </Link>
        </li>
        <li>
          <Link to='/About'>About </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
