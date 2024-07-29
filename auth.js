import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0JV7ylP9FhjK0lyim4VzdR3UJV3pzlQY",
  authDomain: "auth-6611d.firebaseapp.com",
  databaseURL: "https://auth-6611d-default-rtdb.firebaseio.com",
  projectId: "auth-6611d",
  storageBucket: "auth-6611d.appspot.com",
  messagingSenderId: "244695094374",
  appId: "1:244695094374:web:1342b3f112a1baa36249a7"
};
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);


 document.getElementById("reg-btn").addEventListener('click',function(){
 document.getElementById("register-div").style.display="inline";
 document.getElementById("login-div").style.display="none";

});

document.getElementById("log-btn").addEventListener('click',function(){
    document.getElementById("register-div").style.display="none";
    document.getElementById("login-div").style.display="inline";
   });

   document.getElementById("login-btn").addEventListener('click', function(){
     const  loginEmail= document.getElementById("login-email").value;
     const  loginPassword= document.getElementById("login-password").value;

   signInWithEmailAndPassword(auth, loginEmail,loginPassword)
  .then((userCredential) => {
    const user = userCredential.user;
    document.getElementById("result-box").style.display="inline";
    document.getElementById("login-div").style.display="none";
    document.getElementById("result").innerHTML="Welcome Back<br>"+loginEmail+"Was Login Successfully";
    // document.getElementById("start_btn").style.display="inline";

    window.location.href = "index.html";
  })

  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById("result-box").style.display="inline";
    document.getElementById("login-div").style.display="none";
    document.getElementById("result").innerHTML="Sorry !<br>"+errorMessage;
    // document.getElementById("start_btn").style.display="none";
  });
  });

  document.getElementById("register-btn").addEventListener('click',function(){
    const  registerEmail= document.getElementById("register-email").value;
    const  registerPassword= document.getElementById("register-password").value;
   

    createUserWithEmailAndPassword(auth, registerEmail,registerPassword)
 .then((userCredential) => {
   const user = userCredential.user;
   document.getElementById("result-box").style.display="inline";
   document.getElementById("register-div").style.display="none";
   document.getElementById("result").innerHTML="Welcome <br>"+registerEmail+"Was Registered Successfully";
//    document.getElementById("start_btn").style.display="inline";
   window.location.href = "index.html";

 })
 .catch((error) => {
   const errorCode = error.code;
   const errorMessage = error.message;
   document.getElementById("result-box").style.display="inline";
   document.getElementById("register-div").style.display="none";
   document.getElementById("result").innerHTML="Sorry !<br>"+errorMessage;
//    document.getElementById("start_btn").style.display="none";

 });
 });