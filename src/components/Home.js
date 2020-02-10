import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div class='container'>
            <div className="row h-50">
                <div className="col-6 d-inline-block top-left">
                    <Link to='/'>
                        Top Left
                    </Link>
                </div>
                <div className="col-6 d-inline-block">Top Right</div>
            </div>
            <div className="row h-50">
                <div className="col-6 d-inline-block">Bottom Left</div>
                <div className="col-6 d-inline-block">Bottom Right</div>
            </div>
        </div>
    )
}
