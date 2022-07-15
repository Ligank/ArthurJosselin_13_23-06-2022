import logo from '../assets/argentBankLogo.png'
import { Link } from 'react-router-dom'
import {fetchUsers} from "../service/getData";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faSignOut } from '@fortawesome/free-solid-svg-icons'
import '../styles/header.css';

function Header({sign}) {

    const [isSign, setIsSign] = useState(false);
    const [name, setName] = useState([])

    useEffect(() => {
        signCheck()
        fetchInformationUser()
      },)

    function signCheck() {
        if (sign === 'false') {
            setIsSign(false);
        } else if (sign === 'true') {
            setIsSign(true)
        }
    }

    async function fetchInformationUser () {
        const nameUser = await fetchUsers()
        setName(nameUser)
      }

    return <nav className="main-nav">
                <Link to='/' className='main-nav-logo'>
                <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo"/>
                <h1 className="sr-only">Argent Bank</h1>
                </Link>
                {!isSign && <div>
                <Link to='/sign-in' className='main-nav-item'>
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </Link>
                </div>}
                {isSign && <div className='singnOut_Header'>
                    <Link to='/user' className='main-nav-item'>
                        <FontAwesomeIcon icon={faUserCircle} className='icon'/>
                        {name.firstName}
                    </Link>
                    <Link to='/' className='main-nav-item'>
                        <FontAwesomeIcon icon={faSignOut} className='icon'/>
                        Sign Out
                    </Link>
                </div>}
            </nav>
                  
}

export default Header