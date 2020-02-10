import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div class='container'>
            <div className="row h-50">
                <div className="col-6 top-left home">
                    <Link to='/'>
                        <div className="inside">
                            <h2>Home</h2>   
                            <p>Welcome to my portfolio. Click on any of the links to view my work.</p>
                        </div>
                    </Link>
                </div>
                <div className="col-6 top-right home">
                    <Link to='/writing'>
                        <div className="inside">
                            <h2>Writing</h2>
                            <p>Samples of my academic and creative writing.</p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="row h-50">
            <div className="col-6 bottom-left home">
                    <Link to='/webdev'>
                        <div className="inside">
                            <h2>Web Development</h2>
                            <p>A collection of my Web Development projects.</p>
                        </div>
                    </Link>
                </div>
                <div className="col-6 bottom-right home">
                    <Link to='/photography'>
                        <div className="inside">
                            <h2>Photography</h2>
                            <p>A selection of my photography.</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
