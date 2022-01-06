import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <div>
             <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style = {{color: props.mode==='light'?'black':'white'}}>{props.name}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#" style = {{color: props.mode==='light'?'black':'white'}}>Home</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/about" style = {{color: props.mode==='light'?'black':'white'}}>About</a>
            </li> */}
         
          </ul>
          {/* <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
   
          <div className="btn-group mx-3" role="group" aria-label="Basic mixed styles example">
  <button type="button" className="btn btn-outline-danger" onClick= {props.RedClick}>red</button>
  <button type="button" className="btn btn-outline-primary" onClick = {props.blueClick}>blue</button>
  <button type="button" className="btn btn-outline-success" onClick = {props.greenClick}>green</button>
</div>
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick = {props.clickme} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
        </div>
      </div>
    </nav> 
        </div>
    )
}

Navbar.propTypes = {
  name: PropTypes.string
}
Navbar.defaultProps = {
  name: 'stranger'
}
