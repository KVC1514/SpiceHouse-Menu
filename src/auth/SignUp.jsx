import { useState } from "react";
import { Button } from "semantic-ui-react";
import { auth } from "../main";
import { createUserWithEmailAndPassword } from "firebase/auth/cordova";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((useCredential) => {
        console.log(useCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="sign-in-container">
      <form onSubmit={signUp}>
        <h1>Regester Now</h1>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPasword(e.target.value)}
        ></input>
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
}

export default SignUp;
