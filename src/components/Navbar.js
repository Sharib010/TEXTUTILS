import React, { useState } from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
export default function Navbar(props) {
  
  // const [darkStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white"
  // });
  // const [switchText, setSwitchText] = useState("Dark Mode")

  // const changeMode = ()=> {
  //   if (darkStyle.color === "black") {
  //     setMyStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //       border: '1px solid white'
  //     })
  //     setSwitchText("Light Mode")
  //   }
  //   else {
  //     setMyStyle({
  //       color: "black",
  //       backgroundColor: "white"
  //     })
  //     setSwitchText("Dark Mode")
  //   }
  // };
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="navbar-brand" href="#">Home</a>
          </li>
          {/* <li className="nav-item">
            <a className="navbar-brand" href="/about">{props.aboutText}</a>
          </li> */}
        </ul>
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} mx-5`}>
          <input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
          <label htmlFor="" >Dark mode</label>
        </div>
        {/* <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string
}

Navbar.defaultProps = {
  title: "set title here ",
  aboutText: "set Text here"
};
