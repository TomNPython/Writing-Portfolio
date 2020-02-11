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
                            <p className='col-centered d-none d-md-block'>Welcome to my portfolio. On this site you can find links to my work in web development, 
                                writing, and photography. You can also download my CV here, or get in contact here.</p>
                        </div>
                    </Link>
                </div>
                <div className="col-6 top-right home">
                    <Link to='/writing'>
                        <div className="inside">
                            <h2>Writing</h2>
                            <p className='col-centered d-none d-md-block'>Samples of and links to academic and creative writing 
                            published in journals in the UK, Ireland, and Canada.</p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="row h-50">
            <div className="col-6 bottom-left home">
                    <Link to='/webdev'>
                        <div className="inside">
                            <h2>Web Development</h2>
                            <p className='col-centered d-none d-md-block'>A collection of Web Development projects, both Full Stack 
                            and Front End, each of which are hosted on Github.</p>
                        </div>
                    </Link>
                </div>
                <div className="col-6 bottom-right home">
                    <Link to='/photography'>
                        <div className="inside">
                            <h2>Photography</h2>
                            <p className='col-centered d-none d-md-block'>A selection of pictures, taken across Europe and Asia using 
                            Olympus and Nikkon cameras.</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

// FIX BACKGROUND POSITION ON IMAGES!!