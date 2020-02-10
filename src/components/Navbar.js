import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
         <nav className='navbar navbar-dark navbar-expand-md'>
            <Link to='/' className='navbar-brand'>Thomas Nicholson</Link>
            <div className='collapse navbar-collapse'>
                <ul className='navbar-nav ml-auto'>
                    <li className='navbar-item'>
                        <Link to ='/webdev' className='nav-link'>Web Developer</Link>
                    </li>
                    <span className='nav-link'>|</span>
                    <li className='navbar-item'>
                        <Link to ='/writing' className='nav-link'>Freelance Writer</Link>
                    </li>
                    <span className='nav-link'>|</span>
                    <li className='navbar-item'>
                        <Link to ='/photography' className='nav-link'>Amateur Photographer</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
