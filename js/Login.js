 // Firebase SDK imports
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
 import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

 // Firebase configuration
 const firebaseConfig = {
     apiKey: "AIzaSyDSPRl5KCFbjKnPSV2Txmod5PD4iI8nZjQ",
     authDomain: "login-cfb2a.firebaseapp.com",
     projectId: "login-cfb2a",
     storageBucket: "login-cfb2a.appspot.com",
     messagingSenderId: "448182228538",
     appId: "1:448182228538:web:eab7fb16afb17133878703",
     measurementId: "G-SYG83SFM66",
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const auth = getAuth(app);

 // Form submission event listener
 document.getElementById("form").addEventListener("submit", async (event) => {
     event.preventDefault();

     const emailElement = document.getElementById("signUpEmail");
     const passwordElement = document.getElementById("signUpPassword");

     if (!emailElement || !passwordElement) {
         alert("이메일과 비밀번호 입력란이 존재하지 않습니다.");
         return;
     }

     const email = emailElement.value;
     const password = passwordElement.value;

     if (!email || !password) {
         alert("이메일과 비밀번호를 입력해주세요.");
         return;
     }

     try {
         const userCredential = await signInWithEmailAndPassword(auth, email, password);
         const user = userCredential.user;
         console.log("로그인 성공:", user);
         window.location = "../main.html";
     } catch (error) {
         console.error("로그인 실패:", error.message);
         alert("로그인 실패: 아이디 혹은 비밀번호가 잘못되었습니다.");
     }
 });