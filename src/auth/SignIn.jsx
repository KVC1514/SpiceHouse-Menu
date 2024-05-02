import { useState } from "react";
import { Button } from "semantic-ui-react";
import { auth } from "../main";
import { signInWithEmailAndPassword } from "firebase/auth/cordova";
import { useNavigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query"; // Import QueryClientProvider and QueryClient

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const queryClient = new QueryClient(); // Initialize a new QueryClient instance

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/add", { replace: true }); // You can navigate after successful login if needed
        // Clear input fields after successful login
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        console.log(error);
        // Provide user feedback on authentication failure
        alert("Failed to sign in. Please check your email and password.");
      });
  };

  return (
    <QueryClientProvider client={queryClient}>
      {" "}
      {/* Wrap your component tree with QueryClientProvider */}
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
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <Button type="submit">Log In</Button>
        </form>
      </div>
    </QueryClientProvider>
  );
}

export default SignIn;
