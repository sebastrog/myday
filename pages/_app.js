import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';

import '../styles/globals.css'
import "../public/sass/styles.scss"

const firebaseConfig = {
	apiKey: "AIzaSyCNliu2KUMmDNYWZDNVSpkrYJJegARGRG0",
	authDomain: "todolist-26d0a.firebaseapp.com",
	projectId: "todolist-26d0a",
	storageBucket: "todolist-26d0a.appspot.com",
	messagingSenderId: "137008882990",
	appId: "1:137008882990:web:a1100968557df444ccc6bf"
};

const app = initializeApp(firebaseConfig);

const MyApp = ({ Component, pageProps }) => {

  const [user, setUser] = useState([])

  const handleUserIn = (user) => {
    setUser(user)
  }

 /*  useEffect(() => {
    console.log({user})
  }, [user]) */

  return <Component {...pageProps} app={app} user={user}  handleUserIn={handleUserIn} />
}

export default MyApp

