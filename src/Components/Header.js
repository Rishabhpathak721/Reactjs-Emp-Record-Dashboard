import React from 'react';
import Logo from "../logo.png"

const Header = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
            <img className='logo' src={Logo} alt="logo" width="30pc" height="30px"/>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className='d-flex'>
                        <a class="nav-link" href="#">USER NAME</a>
                        <a class="nav-link" href="#">LOGOUT</a>
                    </div>
                </div>
                </nav>
    </div>
  )
}

export default Header