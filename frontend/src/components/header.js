import logo from '../assets/argentBankLogo.png'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from "react";

function Header({sign}) {

    const [isSign, setIsSign] = useState(false);

    useEffect(() => {
        signCheck()
      },)

    function signCheck() {
        if (sign === 'false') {
            setIsSign(false);
        } else if (sign === 'true') {
            setIsSign(true)
        }
    }

    return <nav className="main-nav">
                <Link to='/' className='main-nav-logo'>
                <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo"/>
                <h1 className="sr-only">Argent Bank</h1>
                </Link>
                {!isSign  && <div>
                <Link to='/sign-in' className='main-nav-item'>
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </Link>
                </div>}
                {isSign && <div>
                    <Link to='/user' className='main-nav-item'>
                        <i className="fa fa-user-circle"></i>
                        Tony
                    </Link>
                    <Link to='/' className='main-nav-item'>
                        <i className="fa fa-sign-out"></i>
                        Sign Out
                    </Link>
                </div>}
            </nav>
                  
}

export default Header