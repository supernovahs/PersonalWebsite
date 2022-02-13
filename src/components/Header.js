import React from 'react'
import "../header.css"
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-success">
  <div class="container-fluid">
    <Link class="navbar-brand"  to="/">Supernovahs.eth</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/about">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="/projects">Projects</Link>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>
  )
}
