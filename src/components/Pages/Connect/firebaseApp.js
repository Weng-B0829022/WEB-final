import React from "react";
import firebase from "firebase";
import config from "./config.dev";

function FirebaseRead() {
  var app = "";
  if (!firebase.apps.length) {
    app = firebase.initializeApp(config);
  } else {
    app = firebase.app();
  }
  const database = app.database();

  function Readdata() {
    const path = "/TEST";
    database.ref(path).once("value", e => {
      const data = e.val();
      console.log(data);
      return data;
    });
  };
  
  return (
      <Readdata/>
  )
}

export default FirebaseRead
