import React, {useState} from 'react'
import { Link } from "react-router-dom";
import image from "./newsHead.png"
const NavBar = (props) => {
    return (
        <>
            <img className='my-0 py-0' src={image} style={{width: "20vw", display: "block", marginLeft: "auto",marginRight: "auto"}} alt="" />
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} sticky-top`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">NewsMonkey</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
                        </ul>
                        <div className="form-check form-switch">
                            <input onClick={props.changeMode} className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                            <label className={`form-check-label text-${props.mode==='dark'?"light":"dark"}`} htmlFor="flexSwitchCheckDefault">Enable {props.mode==='dark'?"light":"dark"}</label>
                        </div>
                    </div>
                    
                </div>
            </nav>
        </>
    )

}

export default NavBar
