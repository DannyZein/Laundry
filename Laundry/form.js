import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";

import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyCw34srKwYOq9FnbqW2FrPbuKoHxJAQ51M",
  authDomain: "project3-f790d.firebaseapp.com",
  projectId: "project3-f790d",
  storageBucket: "project3-f790d.appspot.com",
  messagingSenderId: "791298351981",
  appId: "1:791298351981:web:2cd082d1f190af44f6b064"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const regsiterbtn = document.getElementById('regsiterbtn');
  const loginbtn = document.getElementById('loginbtn');

  document.addEventListener('DOMContentLoaded', function () {
    regsiterbtn.addEventListener('click', swapper, false);
    let registerName = document.getElementById('registerName').value;
    let registerEmail = document.getElementById('registerEmail').value;
    let registerPassword = document.getElementById('registerPassword').value;

    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      }),
      then(() =>{
        alert("Login Success, Welcome "+ data["registerName"]);
      })
        .catch((error) =>{
          alert(error);
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

      });
  }); 
  
  
  