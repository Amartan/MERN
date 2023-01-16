import React from "react"
import { Routes, Route } from "react-router-dom";

export default function Head (){
    return (
        <div>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="../pic/2.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
                    </a>
                    <ul className="nav">
                        <li className="nav-item">
                            <a className = "nav-link" href="#"/>Our story</li>
                        <li className="nav-item">
                            <a className = "nav-link" href="#"/>Membership</li>
                        <li className="nav-item">
                            <a className = "nav-link" href="#"/>Write</li>
                        <li className="nav-item">
                            <a className = "nav-link" href="#"/>Sign in</li>
                        <li className="nav-item">
                            <button>Get started</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
