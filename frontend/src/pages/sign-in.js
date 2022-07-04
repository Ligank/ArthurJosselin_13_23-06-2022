import Header from '../components/header.js'
import Footer from '../components/footer.js'
import SignInForm from '../components/signInForm.js'

function SignIn() {
    return (
      <div className="sign">
        <Header 
          sign= 'false'>
      </Header>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <SignInForm/>
        </section>
      </main>
      <Footer/>
      <script></script>
      </div>
    );
  }

  export default SignIn