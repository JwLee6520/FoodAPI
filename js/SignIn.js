// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Your web app's Firebase configuration

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
const auth = getAuth(app); // Initialize the auth object with the app instance

// Add event listener for form submission
document.getElementById("form").addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.getElementById("signUpEmail").value;
  const password = document.getElementById("signUpPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  if (!email || !password) {
    alert("이메일과 비밀번호를 입력해주세요.");
    return;
  }
  if (password !== confirmPassword) {
    alert("비밀번호가 일치하지 않습니다.");
    return;
  }


  // Check if email domain is correct
  const emailAddress = email.split("@")[1];

  if (emailAddress !== "sdh.hs.kr") {
    alert("학교 이메일 주소를 사용하세요.");
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("회원가입 성공:", user);
    window.location = "../html/login.html";
  } catch (error) {
    console.error("회원가입 실패:", error.message);
  }
});
