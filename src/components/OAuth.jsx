import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";
import GoogleIcon from "../assets/svg/googleIcon.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function OAuth() {
  const navigate = useNavigate();
  const location = useLocation();

  const OnGoogleClick = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timeStamp: serverTimestamp(),
        });
      }
      navigate("/");
    } catch (error) {
      toast.error("Could not authorize with google");
    }
  };

  return (
    <div className="socialLogin">
      <p>Sign {location.pathname === "/signup" ? "Up" : "In"} with</p>
      <button className="socialIconDiv" onClick={OnGoogleClick}>
        <img src={GoogleIcon} alt="Google" className="socialIconImg" />
      </button>
    </div>
  );
}

export default OAuth;
