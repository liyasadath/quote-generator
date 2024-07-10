import React from 'react'
import './navbar.css'

export default function Navbar() {
    return (
        <div><nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
             
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                               <div className='navhome'> <Link className='nav-link'to={'/'}>Home</Link></div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                              <div className='navcard'>  <Link className='nav-link' to={"/card"}>Card</Link> </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <Link className='nav-link' to={"/bookmark"}>Bookmark</Link> 
                            </a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
        </div>
    )
}
