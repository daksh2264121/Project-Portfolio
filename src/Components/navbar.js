import React from 'react'
import logo from "../weblogo.png"
const navbar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    
        <div className="container">
            
            <a className="navbar-brand" href="#"><img className ="logo" src={logo} alt="logo" /></a>
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon">
                
                </span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About ME</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Experience</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contacts</a>
                    </li>
                </ul>
            </div>
        </div>
</nav>
    )
}

export default navbar
