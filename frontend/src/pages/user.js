import Header from '../components/header.js'
import Footer from '../components/footer.js'
import Account from '../components/account.js'
import React, { useState, useEffect } from "react";
import '../styles/user.css';
import { useSelector, useDispatch } from "react-redux"
import { userSelector, fetchUserBytoken, clearState, updateName } from "../features/UserSlice"
import { useNavigate } from 'react-router-dom';


const User = () => {
  const [editNameState, setEditName] = useState(false);
  const navigate = useNavigate();
  const { firstName, lastName, token } = useSelector(userSelector);


  const dispatch = useDispatch()
  const { isError } = useSelector(userSelector)
  useEffect(() => {
    dispatch(fetchUserBytoken({ token: token }))
  }, [dispatch])


  useEffect(() => {
    if (isError) {
      dispatch(clearState())
      navigate("/login")
    }
  }, [dispatch, navigate, isError])

  function openEdit() {
    if (editNameState === false) {
      setEditName(true);
    } else {
      setEditName(false);
    }
  }

  function changeName() {
    let firstName = document.querySelector(".firstName").value;
    let lastName = document.querySelector(".lastName").value;
    dispatch(updateName({ token: localStorage.getItem("token"), firstName: firstName, lastName }))
  }

  return (
    <div className="user">
     <Header 
        sign= 'true'>
    </Header>
  <main className="main user user_account">
  {!editNameState && <div className="header">
      <h1 className='title_user'>Welcome back<br />{firstName} {lastName} !</h1>
      <button className="edit-button" onClick={openEdit}>Edit Name</button>
    </div>}
    {editNameState && <div className="header">
    <h1 className='title_user'>Welcome back</h1>
    <form action='' method='get' className='form_edit_name'>
        <div className='names'>
          <input type='text' className='edit_name firstName' defaultValue={firstName} required></input>
          <input type='text' className='edit_name lastName' defaultValue={lastName} required></input>
        </div>
        <div className='button_names'>
          <input type="button" value="Save" className='button_submit_names' onClick={changeName}></input>
          <input type="button" value="Cancel" className='button_submit_names' onClick={openEdit}></input>
        </div>
      </form>
    </div>}
    <h2 className="sr-only">Accounts</h2>
    <Account 
        key='$2,082.79'
        title= 'Argent Bank Checking (x8349)'
        amount= '$2,082.79'
        description= 'Available Balance'>
    </Account>
    <Account 
        key='$10,928.42'
        title= 'Argent Bank Savings (x6712)'
        amount= '$10,928.42'
        description= 'Available Balance'>
    </Account>
    <Account 
        key='$184.30'
        title= 'Argent Bank Credit Card (x8349)'
        amount= '$184.30'
        description= 'Current Balance'>
    </Account>
  </main>
    <Footer/>
    </div>
  );

}

  export default User