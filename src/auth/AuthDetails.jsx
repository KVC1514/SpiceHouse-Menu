import { useEffect, useState } from "react";
import { auth } from "../main";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Button } from "semantic-ui-react";
function AuthDetails() {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      {authUser ? (
        <>
          {" "}
          <p>{`Signed In as ${authUser.email}`}</p>
          <Button onClick={userSignOut}>Sign Out</Button>
        </>
      ) : (
        <p>Signed Out</p>
      )}
    </div>
  );
}

export default AuthDetails;
