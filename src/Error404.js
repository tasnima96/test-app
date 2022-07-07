import React from 'react'
import { NavLink } from 'react-router-dom'

const Error404 = () => {
  return (
    <>
    <div id='not-found'>
        <div className='not-found'>
            <div className='error-404'>
                <h1>404</h1>
            </div>
            <div className='error-msg'>
            <h2>WE ARE SORRY. PAGE NOT FOUND!</h2>
            <p>THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED, HAD ITS NAME CHANGED OR ITS CURRENTLY UNAVAILABLE.</p>
            <NavLink to='/' className='btn home-btn'>Back to Home Page</NavLink>
            </div>
        </div>
    </div>
    </>
  )
} 

export default Error404