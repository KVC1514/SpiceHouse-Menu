import { useState } from "react";
import { Button } from "semantic-ui-react";
import { auth } from "../main";
import { signInWithEmailAndPassword } from "firebase/auth/cordova";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((useCredential) => {
        console.log(useCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="sign-in-container">
      <form onSubmit={signIn}>
        <h1>Log In</h1>
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
        <Button type="submit">Log In</Button>
      </form>
    </div>
  );
}

export default SignIn;
