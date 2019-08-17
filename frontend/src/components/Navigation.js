import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "bootstrap/js/src/collapse.js";

export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        Bottled
                </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Notes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/create">Create Note</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/user">Create user</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/user/login">Login user</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
