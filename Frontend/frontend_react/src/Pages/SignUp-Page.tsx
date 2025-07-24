import "../Pages-Styles/SignUp-Page.css"
const SignUpPage: React.FC = () => {
 
  return (
    <div className="Signup-Container">
   <div className="Signup-main">
    <h1 className="Signup-h1">Sign Up</h1>
    <form className="Signup-form ">
        <input type="text" name="firstname" placeholder="First Name" required />
                <input type="text" name="lastname" placeholder="Last Name" required />

        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <button className="Signup-button" type="submit">Sign Up</button>
    </form>
    <div className="login-message">
        <p>Already have an account? <a href="/signin" className="login-link">Sign In</a></p>
    </div>
</div>
</div>
  );
};

export default SignUpPage;