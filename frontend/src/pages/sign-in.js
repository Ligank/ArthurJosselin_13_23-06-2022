import Header from '../components/header.js'
import Footer from '../components/footer.js'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { loginUserAction } from '../actions/authenticationActions';
import '../styles/sign-in.css';

class SignIn extends Component {
  onHandleLogin = (event) => {
    event.preventDefault();

    let email = event.target.email.value;
    let password = event.target.password.value;

    const data = {
      email, password
    };

    this.props.dispatch(loginUserAction(data));
  }

  render() {
    let isSuccess, message;

    if (this.props.response.login.hasOwnProperty('response')) {
      isSuccess = this.props.response.login.response.success;
      message = this.props.response.login.response.message;
      if (isSuccess) {
        localStorage.removeItem('token');
        localStorage.setItem('token', this.props.response.login.response.token);
      }
    }

    return (
      <div className="sign">
        <Header 
          sign= 'false'>
      </Header>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          {!isSuccess ? <div>{message}</div> : <Navigate to='/profile/1' />}
          <form id='myForm' onSubmit={this.onHandleLogin}>
              <div className="input-wrapper">
                  <label htmlFor="username">Username</label>
                  <input type="email" id="email" name='email' />
              </div>
              <div className="input-wrapper">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" name='password' />
              </div>
              <div className="input-remember">
                  <input type="checkbox" id="remember-me" /><label htmlFor="remember-me"
                      >Remember me</label>
              </div>
                  <button className="sign-in-button">Sign In</button>
            </form>
        </section>
      </main>
      <Footer/>
      <script></script>
      </div>
    );
  }
}

const mapStateToProps = (response) => ({response});

export default connect(mapStateToProps)(SignIn);