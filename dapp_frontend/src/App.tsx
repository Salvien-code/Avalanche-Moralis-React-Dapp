import "./App.css";

import React from "react";
import { useMoralis } from "react-moralis";

export default function App() {
  const {
    authenticate,
    isAuthenticated,
    isAuthenticating,
    user,
    account,
    logout
  } = useMoralis();

  const login = async () => {
    if (!isAuthenticated) {
      await authenticate({ signingMessage: "Log in using Moralis" })
        .then(function (user) {
          console.log("logged in user:", user);
          console.log(user!.get("ethAddress"));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const logOut = async () => {
    await logout();
    console.log("logged out");
  };

  return (
    <div>
      <h2>Moralis Hello World! 🚀</h2>
      <button onClick={login}>🦊 Moralis Metamask Login</button>
      <button onClick={logOut} disabled={isAuthenticating}>
        Logout
      </button>
    </div>
  );
}
