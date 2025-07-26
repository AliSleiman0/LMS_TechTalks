import '../Pages-Styles/Login-Page.css'
const LoginPage: React.FC = () => {
 

  return (
    <div className="SignIn-container">
   <div className="SignIn-main">
    <h1 className='SignIn-h1'>Sign In</h1>
    <form className='SignIn-SignIn-form' >
        <input type="text" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <button className='SignIn-button' type="submit">Log In</button>
    </form >
    <div className="signup-message">
        <p>If you don't have an account, <a href="/signup" className="signup-link">Sign Up</a></p>
        </div>
    </div>
</div>
  );
};

export default LoginPage;