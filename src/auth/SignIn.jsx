import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import { auth } from "../main";
import { signInWithEmailAndPassword } from "firebase/auth/cordova";
import { useNavigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import AppLayout from "../ui/AppLayout";
import Background from "../../public/images/background.jpg";
import "./SignIn.css"; // Import the CSS file/

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const queryClient = new QueryClient();

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/add", { replace: true });
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to sign in. Please check your email and password.");
      });
  };

  return (
    <AppLayout>
      <QueryClientProvider client={queryClient}>
        <div className="home" style={{ backgroundImage: `url(${Background})` }}>
          <div className="sign-in-page">
            <form onSubmit={signIn}>
              <h1 className="logIn">Enter Your Id and Password</h1>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button type="submit">Log In</Button>
            </form>
          </div>
        </div>
      </QueryClientProvider>
    </AppLayout>
  );
}

export default SignIn;
