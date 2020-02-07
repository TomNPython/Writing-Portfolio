import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
         <nav className='navbar navbar-dark navbar-expand-md'>
            <Link to='/' className='navbar-brand'>Portfolio</Link>
            <div className='collapse navbar-collapse'>
                <ul className='navbar-nav ml-auto'>
                    <li className='navbar-item'>
                        <Link to ='/' className='nav-link'>Home</Link>
                    </li>
                    <li className='navbar-item'>
                        <Link to ='/writing' className='nav-link'>Writing</Link>
                    </li>
                    <li className='navbar-item'>
                        <Link to ='/contact' className='nav-link'>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
