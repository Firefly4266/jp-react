import React from 'react';
/* #1 the <NavLink> and <Link> tags are part of the react-router-dom. use them 
 instead of the <a> tag and they act like preventDefault() does in a form. */
import {NavLink, Link, withRouter } from 'react-router-dom'; // #1

/* #2 pass the props to the navbar. the props have the history object with the push 
  method attached to it. use the push to "push" (redirect) us to a different page */

const Navbar = (props)=>{ // #2 
    setTimeout(()=>{
        props.history.push('/')
    }, 5000);
    return(
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a href='' className="brand-logo">Spa Application</a>
                <ul className='right'>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
} 

/* withRouter is a Higher Order Component (HOC) that will wrap the navbar with router 
information like props. This HOC comes with the react-router-dom */
export default withRouter(Navbar)