import Header from '../components/header.js'
import Footer from '../components/footer.js'
import Account from '../components/account.js'
import {accounts} from '../data/account.js'
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { userSelector, fetchUserBytoken, clearState, updateName } from "../features/UserSlice"
import { useNavigate } from 'react-router-dom';
import '../styles/user.css';


const User = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [editNameState, setEditName] = useState(false);
  const { firstName, lastName, token, isError } = useSelector(userSelector);

  useEffect(() => {
    dispatch(fetchUserBytoken({ token: token }))
  }, [dispatch])

  useEffect(() => {
    if (isError) {
      dispatch(clearState())
      navigate("/login")
    }
  }, [dispatch, navigate, isError])

/**
 * retrieves the first and last name, checks if they are not empty or if they contain forbidden characters, then sends a put request to update the database.
 */
  function changeName() {
    let firstName = document.querySelector(".firstName").value;
    let lastName = document.querySelector(".lastName").value;
    if (firstName === "" || lastName === "" || /[!@#$%^&*()_+=[\]{};:"\\|,.<>/?[0-9]]*$/.test(firstName) || /[!@#$%^&*()_+=[\]{};:"\\|,.<>/?[0-9]]*$/.test(lastName)) {
      alert("Names cannot be empty, contain numbers or special characters")
    } else {
      dispatch(updateName({ token: token, firstName: firstName, lastName: lastName }))
    }
  }

  return (
    <div className="user">
        <Header 
            sign= 'true'>
        </Header>
        <main className="main user user_account">
        {!editNameState && <div className="header">
            <h1 className='title_user'>Welcome back<br />{firstName} {lastName} !</h1>
            <button className="edit-button" onClick={() => {setEditName(true)}}>Edit Name</button>
          </div>}
          {editNameState && <div className="header">
          <h1 className='title_user'>Welcome back</h1>
          <form action='' method='get' className='form_edit_name'>
              <div className='names'>
                <input type='text' className='edit_name firstName' defaultValue={firstName} required ></input>
                <input type='text' className='edit_name lastName' defaultValue={lastName} required></input>
              </div>
              <div className='button_names'>
                <input type="button" value="Save" className='button_submit_names' onClick={changeName}></input>
                <input type="button" value="Cancel" className='button_submit_names' onClick={() => {setEditName(false)}}></input>
              </div>
            </form>
          </div>}
          <h2 className="sr-only">Accounts</h2>
          {accounts.map((account) => (
              <Account 
                key={`${account.id}`}
                title={account.title}
                amount={account.amount}
                description={account.description}>
              </Account>
              ))}
        </main>
        <Footer/>
    </div>
  );
}

  export default User