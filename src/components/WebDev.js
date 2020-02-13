import React from 'react'
import CodeImg from '../assets/Code.jpg'
import OfficeImg from '../assets/Office.jpg'

export default function WebDev() {
    return (
        <div id='webdev-page' className='container text-center'>
            <div className="banner">
                <h1>Web Development Projects</h1>
                <p className='col-centered d-none d-md-block'>I began studying web development in early 2018. Since then, I have spent much of my free time learning
                    several languages and frameworks. I began by focusing on Front End development, but have recently branched
                    out into creating Full Stack projects as well.
                </p>
                <h4>Full Stack Projects | API Based Projects | Front End Projects</h4>
            </div>
            <h2 className='project-header'>Full Stack Projects</h2>
            <div className="row justify-content-around">
                <div className='col-lg-5 text-center project'>
                    <img src={CodeImg} 
                    alt="" className="project-image"/>
                    <div className="">
                        <h3 className="">TV Series Tracker</h3>
                        <div className="">
                            <p>Track a user's watched TV series, along with reviews and ratings.</p>
                            <p>Made Using: <em>MongoDB | Express | React | NodeJS </em></p>
                        </div>
                        <a href="#" className="btn btn-primary p-1 m-1">See Demo</a>
                        <a href="https://github.com/TomNPython/MernTV" className="btn btn-primary p-1 m-1">See Github</a>
                    </div>
                </div>
                <div className='col-lg-5 text-center project'>
                    <img src={OfficeImg} 
                    alt="" className="project-image"/>
                    <div className="">
                        <h3 className="">Event Reviewer</h3>
                        <div className="">
                            <p>Create, Read, Update, and Delete reviews for recent sporting events.</p>
                            <p>Made Using: <em>React | PostgresQL </em></p>
                        </div>
                        <a href="#" className="btn btn-primary p-1 m-1">See Demo</a>
                        <a href="https://github.com/TomNPython/Event-Reviewer" className="btn btn-primary p-1 m-1">See Github</a>
                    </div>
                </div>
            </div>
            <h2 className='project-header'>Front End Projects</h2>
            <div className="row justify-content-around">
            <div className='col-lg-3 text-center project'>
                    <img src={CodeImg} 
                    alt="" className="project-image"/>
                    <div className="">
                        <h3 className="">Guess The Picture</h3>
                        <div className="">
                            <p>A simple game where the user looks at a blurred image and uses clues to work out the answer.</p>
                            <p>Made Using: <em>JavaScript </em></p>
                        </div>
                        <a href="#" className="btn btn-primary p-1 m-1">See Demo</a>
                        <a href="" className="btn btn-primary p-1 m-1">See Github</a>
                    </div>
                </div>
                <div className='col-lg-3 text-center project'>
                    <img src={CodeImg} 
                    alt="" className="project-image"/>
                    <div className="">
                        <h3 className="">Myriorama</h3>
                        <div className="">
                            <p>Inspired by the eponymous chapter in Phillip Pullman's 'The Secret Commonwealth', this
                                allow the use to create a mosaic of images to tell a story.</p>
                            <p>Made Using: <em>JavaScript </em></p>
                        </div>
                        <a href="#" className="btn btn-primary p-1 m-1">See Demo</a>
                        <a href="" className="btn btn-primary p-1 m-1">See Github</a>
                    </div>
                </div>
                <div className='col-lg-3 text-center project'>
                    <img src={CodeImg} 
                    alt="" className="project-image"/>
                    <div className="">
                        <h3 className="">Pronunciation Practice</h3>
                        <div className="">
                            <p>Uses the user's camera to record a series of images of them attempting to correctly pronounce
                                and English language tongue twister.</p>
                            <p>Made Using: <em>JavaScript | WebRTC</em></p>
                        </div>
                        <a href="#" className="btn btn-primary p-1 m-1">See Demo</a>
                        <a href="" className="btn btn-primary p-1 m-1">See Github</a>
                    </div>
                </div>
                <div className='col-lg-3 text-center project'>
                    <img src={CodeImg} 
                    alt="" className="project-image"/>
                    <div className="">
                        <h3 className="">Heatmap</h3>
                        <div className="">
                            <p>Shows heatmaps for all the work I have been doing, both coding and writing, for the months
                                October-December 2019. Also allows users to enter their own data to create a new heatmap</p>
                            <p>Made Using: <em>JavaScript | Anychart (Heatmaps module) </em></p>
                        </div>
                        <a href="#" className="btn btn-primary p-1 m-1">See Demo</a>
                        <a href="" className="btn btn-primary p-1 m-1">See Github</a>
                    </div>
                </div>
                <div className='col-lg-3 text-center project'>
                    <img src={CodeImg} 
                    alt="" className="project-image"/>
                    <div className="">
                        <h3 className="">AmericaniZer</h3>
                        <div className="">
                            <p>Novelty app for converting UK English into US English. The user enters a word or sentence
                                and the app translates it.
                            </p>
                            <p>Made Using: <em>JavaScript </em></p>
                        </div>
                        <a href="#" className="btn btn-primary p-1 m-1">See Demo</a>
                        <a href="" className="btn btn-primary p-1 m-1">See Github</a>
                    </div>
                </div>
            </div>
            <h2 className='project-header'>API Based Projects</h2>
            <div className="row justify-content-around">
            <div className='col-lg-3 text-center project'>
                    <img src={CodeImg} 
                    alt="" className="project-image"/>
                    <div className="">
                        <h3 className="">SWAPI Compare</h3>
                        <div className="">
                            <p>Uses the Star Wars API to compare any character to Luke Skywalker on various metrics.</p>
                            <p>Made Using: <em>JavaScript | SWAPI </em></p>
                        </div>
                        <a href="#" className="btn btn-primary p-1 m-1">See Demo</a>
                        <a href="" className="btn btn-primary p-1 m-1">See Github</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Full Stack - PostgresQL and MongoDB Projects
// Front End - most others (Guess Picture, WebRTC, Heatmap, Myriorama, AmericaniZer)
// APIs - SWAPI, TopScorers, PollutionTracker
// add new components for each in new folder? links on writing page to further specific pages?
// change display - move dif project types to own component, display each component as addition to page after links