import React from 'react'
import {
  Link
} from "react-router-dom";
export default function Navbar() {
  return (
   <>
   <div>
   <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container-fluid">
    <Link className="navbar-brand " to="/" ><b>About News</b></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link"   aria-current="page" >Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  to="/Business" aria-current="page" >Business</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  to="/Entertainment" aria-current="page" >Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  to="/Health"aria-current="page" >Health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  to="/Science"aria-current="page" >Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  to="/Sports" aria-current="page" >Sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Technology" aria-current="page" >Technology</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>







   </div>
   
   
   
   </>
  )
}
