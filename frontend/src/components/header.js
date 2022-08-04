import PropTypes from 'prop-types'
import logo from '../assets/argentBankLogo.png'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faSignOut } from '@fortawesome/free-solid-svg-icons'
import '../styles/header.css';
import { useDispatch } from 'react-redux';
import { clearState } from '../features/UserSlice';

function Header({sign}) {

    const dispatch = useDispatch();
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

    let name = localStorage.firstName

    const onLogOut = () => {
        localStorage.removeItem("token")
        dispatch(clearState());
      }

    return <nav className="main-nav">
                <Link to='/' className='main-nav-logo'>
                <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo"/>
                <h1 className="sr-only">Argent Bank</h1>
                </Link>
                {!isSign && <div>
                    <Link to='/login' className='main-nav-item'>
                        <FontAwesomeIcon icon={faUserCircle} className='icon'/>
                        Sign In
                    </Link>
                </div>}
                {isSign && <div className='singnOut_Header'>
                    <Link to='/user' className='main-nav-item'>
                        <FontAwesomeIcon icon={faUserCircle} className='icon'/>
                        {name}
                    </Link>
                    <Link to='/' className='main-nav-item' onClick={onLogOut}>
                        <FontAwesomeIcon icon={faSignOut} className='icon'/>
                        Sign Out
                    </Link>
                </div>}
            </nav>
}

Header.propTypes = {
    sign: PropTypes.string.isRequired,
  }

export default Header