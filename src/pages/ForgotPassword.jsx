import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { ReactComponent as ArrowRight } from "../assets/svg/keyboardArrowRightIcon.svg";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const onChange = (e) => {
    setEmail(e.target.value);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("Link sent to your email");
    } catch (error) {
      toast.error("Could not able to sent reset email");
    }
    setEmail("");
  };

  return (
    <div className="pageContainer">
      <header>
        <p className="pageHeader">Forgot Password</p>
      </header>
      <main>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            className="emailInput"
            id="email"
            placeholder="Email"
            onChange={onChange}
            value={email}
          />
          <Link to="/signin" className="forgotPasswordLink">
            Sign In
          </Link>
          <div className="signInBar">
            <p className="signInText">Send Reset Link</p>
            <button className="signInButton">
              <ArrowRight fill="#ffffff" width="34px" height="34px" />
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default ForgotPassword;
