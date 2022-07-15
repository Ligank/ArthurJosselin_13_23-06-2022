import Header from '../components/header.js'
import Footer from '../components/footer.js'
import Account from '../components/account.js'
import {fetchUsers} from "../service/getData";
import {fetchUsersInfo} from "../service/getData";
import React, { useState, useEffect } from "react";
import '../styles/user.css';

function User() {

  const [name, setName] = useState([])
  const [accountUserInfo, setAccountUser] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [editNameState, setEditName] = useState(false);

  useEffect(() => {
    fetchInformationUser()
  }, [])

  async function fetchInformationUser () {
    const nameUser = await fetchUsers()
    setName(nameUser)
    const accountUser = await fetchUsersInfo()
    setAccountUser(accountUser)
    setIsLoading(false);
  }

  function openEdit() {
    if (editNameState === false) {
      setEditName(true);
    } else {
      setEditName(false);
    }
}

let firstName = name.firstName;
let lastName = name.lastName;

function changeName() {
  firstName = document.querySelector('.firstName').value;
  lastName = document.querySelector('.lastName').value;
  setEditName(false);
}

    return (
      <div className="user">
       <Header 
          sign= 'true'>
      </Header>
    {!isLoading && <main className="main user user_account">
    {!editNameState && <div className="header">
        <h1 className='title_user'>Welcome back<br />{firstName} {lastName} !</h1>
        <button className="edit-button" onClick={openEdit}>Edit Name</button>
      </div>}
      {editNameState && <div className="header">
      <h1 className='title_user'>Welcome back</h1>
      <form action='' method='get' className='form_edit_name'>
          <div className='names'>
            <input type='text' className='edit_name firstName' placeholder={firstName} required></input>
            <input type='text' className='edit_name lastName' placeholder={lastName} required></input>
          </div>
          <div className='button_names'>
            <input type="button" value="Save" className='button_submit_names' onClick={changeName}></input>
            <input type="button" value="Cancel" className='button_submit_names' onClick={openEdit}></input>
          </div>
        </form>
      </div>}
      <h2 className="sr-only">Accounts</h2>
      <Account 
          key={`${accountUserInfo.argentBankChecking}`}
          title= 'Argent Bank Checking (x8349)'
          amount= {accountUserInfo.argentBankChecking}
          description= 'Available Balance'>
      </Account>
      <Account 
          key={`${accountUserInfo.argentBankSavings}`}
          title= 'Argent Bank Savings (x6712)'
          amount= {accountUserInfo.argentBankSavings}
          description= 'Available Balance'>
      </Account>
      <Account 
          key={`${accountUserInfo.argentBankCreditCard}`}
          title= 'Argent Bank Credit Card (x8349)'
          amount= {accountUserInfo.argentBankCreditCard}
          description= 'Current Balance'>
      </Account>
    </main>}
      <Footer/>
      </div>
    );
  }

  export default User