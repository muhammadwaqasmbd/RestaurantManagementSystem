import firebase from "firebase/app";
import jwt from 'jwt-decode'
import { baseUrl } from './baseUrl';
// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import React from "react";
import SweetAlert from "react-bootstrap-sweetalert";

class FirebaseAuthBackend {
  constructor(firebaseConfig) {
    if (firebaseConfig) {
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          sessionStorage.setItem("authUser", JSON.stringify(user));
        } else {
          sessionStorage.removeItem("authUser");
        }
      });
    }
  }

  /**
   * Registers the user with given details
   */
  /*registerUser = (email, password) => {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(
          user => {
            resolve(firebase.auth().currentUser);
          },
          error => {
            reject(this._handleError(error));
          }
        );
    });
  };*/
  registerUser = (company, website, email, username, password) => {
    let bodyData = {
      "username":username,
      "password":password,
      "email":email,
      "company_name":company,
      "website":website
    }
    return fetch(baseUrl+'api/register/', {
      method: 'POST',
      headers: { 
          'X-Requested-With':'application/json',
          'Content-Type':'application/json'
      },
      body: JSON.stringify(bodyData)
    })
    .then(response => {
      console.log("register response: ",response)
        if (response.ok) {
            return response;
        } else {
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            localStorage.removeItem('userId');
            localStorage.removeItem('isStuff');
            localStorage.removeItem('restaurantId');
            localStorage.removeItem('username');
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            this._handleError(error)
          }
        },
        error => {
          this._handleError(error)
        })
    .then(response => response.json())
    .then(response => {
          console.log("response: ",response)
    })
    .catch(error => this._handleError(error))
    };


  /**
   * Login user with given details
   */
  /*loginUser = (email, password) => {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(
          user => {
            resolve(firebase.auth().currentUser);
          },
          error => {
            reject(this._handleError(error));
          }
        );
    });
  };*/

  loginUser = (email, password) => {
    let bodyFormData = new FormData();
    bodyFormData.set("username",email);
    bodyFormData.set("password",password);
    return fetch(baseUrl+'api/token/', {
      method: 'POST',
      headers: { 
          'X-Requested-With':'application/json' 
      },
      body: bodyFormData
    })
    .then(response => {
        if (response.ok) {
          console.log("auth: ",response)
            return response;
        } else {
            localStorage.setItem("loggedIn","false")
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            localStorage.removeItem('userId');
            localStorage.removeItem('isStuff');
            localStorage.removeItem('restaurantId');
            localStorage.removeItem('username');
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            this._handleError(error)
          }
        },
        error => {
        localStorage.setItem("loggedIn","false")
          this._handleError(error)
        })
    .then(response => response.json())
    .then(response => {
          // If login was successful, set the token in local storage
        console.log("accesstoken: ",response.access)
          const access = jwt(response.access);
          console.log("access: ",access)
          const refresh = jwt(response.refresh);
          console.log("refresh: ",refresh)
          localStorage.setItem('access', response.access);
          localStorage.setItem('refresh', response.refresh);
          localStorage.setItem('userId', access.user_id);
          localStorage.setItem('isStuff', access.is_stuff);
          localStorage.setItem('restaurantId', access.restaurant_id);
          localStorage.setItem('username', access.username);
            localStorage.setItem("loggedIn","true")
    })
    .catch(error => this._handleError(error))
    };



  /**
   * forget Password user with given details
   */
  forgetPassword = email => {
      let bodyData = {
          "email":email
      }
      return fetch(baseUrl+'api/reset-password/', {
          method: 'POST',
          headers: {
              'X-Requested-With':'application/json',
              'Content-Type':'application/json'
          },
          body: JSON.stringify(bodyData)
      })
          .then(response => {
                  console.log("email sent response: ",response)
                  if (response.ok) {
                      return response;
                  } else {
                      var error = new Error('Error ' + response.status + ': ' + response.statusText);
                      error.response = response;
                      this._handleError(error)
                  }
              },
              error => {
                  this._handleError(error)
              })
          .then(response => response.json())
          .then(response => {
              console.log("response: ",response)
          })
          .catch(error => this._handleError(error))
  };

  /**
   * Logout the user
   */
  logout = () => {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signOut()
        .then(() => {
          resolve(true);
        })
        .catch(error => {
          reject(this._handleError(error));
        });
    });
  };

  setLoggeedInUser = user => {
    sessionStorage.setItem("authUser", JSON.stringify(user));
  };

  /**
   * Returns the authenticated user
   */
  getAuthenticatedUser = () => {
    if (!sessionStorage.getItem("authUser")) return null;
    return JSON.parse(sessionStorage.getItem("authUser"));
  };

  isUserAuthenticated = () => {
    if(localStorage.getItem('access')){
      return true;
    }else{
      return false;
    }
  };

  /**
   * Handle the error
   * @param {*} error
   */
  _handleError(error) {
    // var errorCode = error.code;
    var errorMessage = error.message;
    localStorage.setItem("loginFailed", "true");
    return (errorMessage);
  }
}

let _fireBaseBackend = null;

/**
 * Initilize the backend
 * @param {*} config
 */
const initFirebaseBackend = config => {
  if (!_fireBaseBackend) {
    _fireBaseBackend = new FirebaseAuthBackend(config);
  }
  return _fireBaseBackend;
};

/**
 * Returns the firebase backend
 */
const authentication = () => {
  return _fireBaseBackend;
};

export { initFirebaseBackend, authentication };
