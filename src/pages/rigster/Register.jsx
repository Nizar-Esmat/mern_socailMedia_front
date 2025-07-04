import "./Register.css"
export default function Register() {
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">Social Media</h3>
          <span className="registerDesc">Connect with friends and the world around you on Social Media</span>
        </div>
        <div className="registerRight">
          <div className="registerBox">
            <input placeholder="Username" className="registerInput" />
            <input placeholder="Email" className="registerInput" />
            <input placeholder="Password" type="password" className="registerInput" />
            <input placeholder="Confirm Password" type="password" className="registerInput" />
            <button className="registerButton">Sign Up</button>
            <span className="registerTerms">By signing up, you agree to our Terms and Privacy Policy</span>
            <button className="registerLoginButton">Log into Account</button>
          </div>
        </div>
      </div>
    </div>
  )
}
