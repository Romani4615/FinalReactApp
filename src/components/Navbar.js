import React, { Component } from 'react';
import "../App.css"
import { Link } from 'react-router-dom';
export default class Navbar extends Component {
    render() {
        return (
            <div id="Navbar">
                <div id="Navbar" className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid" id="Navbar">
                        <Link className="navbar-brand" to="/"></Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        <div className="collapse navbar-collapse" id="Navbar">
                            <ul className="navbar-nav">
                                <li id="Navbar" className="nav-item">
                                    <Link className="nav-link active" id="Navbar" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item" id="Navbar">
                                    <Link className="nav-link" id="Navbar" to="/about">About</Link>
                                </li>
                                <li className="nav-item" id="Navbar">
                                    <Link className="nav-link" id="Navbar" to="/users">Users</Link>
                                </li>
                                <li className="nav-item" id="Navbar">
                                    <Link className="nav-link" id="Navbar" to="/posts">Posts</Link>
                                </li>
                            </ul>
                            <ul className="navbar-nav ms-auto" id="Navbar">
                                {this.props.isLoggedIn ? (
                                    <li className="nav-item" id="Navbar">
                                        <Link id="Navbar" className="nav" to="/" onClick={this.props.logOut}>Logout</Link>
                                    </li>
                                ) : (
                                    <li className="nav-item" id="Navbar">
                                        <Link id="Navbar" className="nav" to="/login">Login</Link>
                                    </li>
                                )
                                }

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}