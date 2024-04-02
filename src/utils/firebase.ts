// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDvsxysmo9kkF09yXHhO8KzGnTfsq80eiI",
	authDomain: "chapas-qr.firebaseapp.com",
	projectId: "chapas-qr",
	storageBucket: "chapas-qr.appspot.com",
	messagingSenderId: "255705660590",
	appId: "1:255705660590:web:f64fc7afcf87cef8dec13f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
