import { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import OAuth from "../components/OAuth";
import { ReactComponent as ArrowIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import VisbilityIcon from "../assets/svg/visibilityIcon.svg";

function SignIn() {
  const [showPassowrd, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (userCredentials.user) {
        navigate("/");
      }
    } catch (error) {
      toast.error("Bad Credentials");
    }
  };

  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome Back!</p>
        </header>
        <main>
          <form onSubmit={onSubmit}>
            <input
              type="email"
              className="emailInput"
              id="email"
              placeholder="Email"
              value={email}
              onChange={onChange}
            />
            <div className="passwordInputDiv">
              <input
                type={showPassowrd ? "text" : "password"}
                className="passwordInput"
                id="password"
                placeholder="Password"
                onChange={onChange}
                value={password}
              />
              <img
                src={VisbilityIcon}
                alt="show password"
                className="showPassword"
                onClick={() => setShowPassword((prevState) => !prevState)}
              />
            </div>
            <Link to="/forgotpassword" className="forgotPasswordLink">
              Forgot Password
            </Link>
            <div className="signInBar">
              <p className="signInText">Sign In</p>
              <button className="signInButton">
                <ArrowIcon fill="#fff" width="34px" height="34px" />
              </button>
            </div>
          </form>
        </main>

        <OAuth />
        <Link to="/signup" className="registerLink">
          Sign Up
        </Link>
      </div>
    </>
  );
}

export default SignIn;
