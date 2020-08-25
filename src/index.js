import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import * as firebase from "firebase";
// import "firebase/firestore";

// var firebaseConfig = {
//   apiKey: "AIzaSyAvP3KGfVxKYhCuh3wqymQk6Q_VJwTR7KA",
//   authDomain: "ecommerce-f3c03.firebaseapp.com",
//   databaseURL: "https://ecommerce-f3c03.firebaseio.com",
//   projectId: "ecommerce-f3c03",
//   storageBucket: "ecommerce-f3c03.appspot.com",
//   messagingSenderId: "581806217618",
//   appId: "1:581806217618:web:386951a692c7d33811094b",
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// const storage = firebase.storage();

// export default storage;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);