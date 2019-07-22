import { Injectable } from '@angular/core';
// import * as firebase from "firebase/app";
// var firebase = require("firebase/auth");
// require("firebase/auth");
// require("firebase/firestore");
var firebase


@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor() { }

  login(){

  }

  signUp(email, password, name){
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      
      // ...
    });
  }

  logout(){

  }

  resetPassword(){

  }
}
