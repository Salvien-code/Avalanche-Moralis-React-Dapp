import type { NextPage } from 'next'
import React, { useEffect } from 'react'
import { useMoralis, MoralisProvider } from 'react-moralis'

// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'




const Vote: NextPage = () => {
  const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();

  useEffect(() => {
  if (isAuthenticated) {
      // add your logic here
  }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

    const login = async () => {
      if (!isAuthenticated) {

        await authenticate({signingMessage: "Log in using Moralis" })
          .then(function (user) {
            console.log("logged in user:", user);
            console.log(user!.get("ethAddress"));
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }

    const logOut = async () => {
      await logout();
      console.log("logged out");
    }

  return (
    <div>
      <MoralisProvider serverUrl="https://xxxxx/server" appId="YOUR_APP_ID">
        <div>
          <h1>Moralis Hello World!</h1>
          <button onClick={login}>Moralis Metamask Login</button>
          <button onClick={logOut} disabled={isAuthenticating}>Logout</button>
        </div>
      </MoralisProvider>

    </div>
  );
}


// const Vote: NextPage = () => {
//   return (
//     <div className={styles.container}>
//       <Head>
//       <title>Welcome to the Voting Section</title>
//         <meta name="description" content="Time to make your choice" />

//       </Head>

//     </div>
//   )
// }

export default Vote
