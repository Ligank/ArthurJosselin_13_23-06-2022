import Header from '../components/header.js'
import Footer from '../components/footer.js'
import React, { useEffect } from 'react';
import '../styles/sign-in.css';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, userSelector, clearState } from '../features/UserSlice';
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { handleSubmit } = useForm();
  const { isSuccess, isError, } = useSelector(
    userSelector
  );
  const onSubmit = () => {
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    const data = {
      email, password
    };
    dispatch(loginUser(data));
  };

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      dispatch(clearState());
    }
    if (isSuccess) {
      dispatch(clearState());
      navigate('/profile');
    }
  }, [navigate, dispatch, isError, isSuccess]);

  return (
    <div className="sign">
      <Header 
        sign= 'false'>
    </Header>
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form id='myForm' onSubmit={handleSubmit(onSubmit)}>
            <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input type="email" id="email" name='email' />
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name='password'/>
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


export default LoginPage;