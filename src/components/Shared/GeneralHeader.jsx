import React from 'react'
import { Link } from 'react-router-dom'
import './Styles/GeneralHeader.css'

const GeneralHeader = () => {
  return (
    <header className='PageHeader'>
        <h1><Link to='/' style={{ textDecoration: 'none',color:'blue',fontWeight:'bold' }} >HotelsApp</Link></h1>
        <nav className='PageHeader__nav'>
            <ul className='PageHeader__lista'>
            <li className='PageHeader__item'>
                <Link to='/reservation' style={{ textDecoration: 'none', color:'black',fontWeight:'bold'}}>Reservation</Link>
            </li>
            <li className='PageHeader__item'>
                <Link to='/register' style={{ textDecoration: 'none',color:'black',fontWeight:'bold' }} >Register</Link>
              </li>
              <li className='PageHeader__item'>
                <Link to='/login' style={{ textDecoration: 'none',color:'black',fontWeight:'bold' }}>Login</Link>
              </li>
            </ul>
        </nav>
    </header>
  )
}

export default GeneralHeader