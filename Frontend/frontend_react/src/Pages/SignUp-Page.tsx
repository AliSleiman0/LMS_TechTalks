import "../Pages-Styles/SignUp-Page.css";
const SignUpPage: React.FC = () => {
  return (
    <div className="Signup-Container">
      <div className="Signup-main">
        <h1 className="Signup-h1">Sign Up</h1>
        <form className="Signup-form ">
          <input type="text" name="fullname" placeholder="Full Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />

          <h5>Select Role:</h5>
          <label>
            <input type="radio" name="accountType" value="personal" required />
            Instructor
          </label>
          <label>
            <input type="radio" name="accountType" value="business" required />
            Student
          </label>
          <button className="Signup-button" type="submit">
            Sign Up
          </button>
        </form>

        <div className="login-message">
          <p>
            Already have an account?{" "}
            <a href="/signin" className="login-link">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
