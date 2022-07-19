import Header from '../components/header.js'
import Footer from '../components/footer.js'
import { useNavigate } from 'react-router-dom'
import '../styles/sign-in.css';

function SignIn() {

    const navigate = useNavigate()

    function handleSubmit(event) {
      if (document.getElementById('username').value.trim() === "") {
        event.preventDefault();
      } else if (document.getElementById('password').value.trim() === "") {
        event.preventDefault();
      } else {
        
        navigate('/profile/1')
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
          <form id='myForm' onSubmit={handleSubmit}>
              <div className="input-wrapper">
                  <label htmlFor="username">Username</label>
                  <input type="text" id="username" />
              </div>
              <div className="input-wrapper">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" />
              </div>
              <div className="input-remember">
                  <input type="checkbox" id="remember-me" /><label htmlFor="remember-me"
                      >Remember me</label>
              </div>
                  <button type='submit' className="sign-in-button">Sign In</button>
            </form>
        </section>
      </main>
      <Footer/>
      <script></script>
      </div>
    );
  }

  export default SignIn