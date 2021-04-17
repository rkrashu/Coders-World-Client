import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './firebaseConfig';
import Navbar from '../Home/Header/Navbar/Navbar';
import { userContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { useHistory, useLocation } from 'react-router';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                console.log(user.email)
                setLoggedInUser({
                    email: user.email,
                    name: user.displayName
                })
                firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
                   sessionStorage.setItem('token' , idToken)
                  }).catch(function(error) {
                  });
                  history.replace(from);
            })
            
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }
    return (
        <div>
            <Navbar></Navbar>
            <div style={{ height: '600px' }} className='d-flex align-items-center justify-content-center'>
                <div>
                    <button onClick={handleGoogleSignIn} style={{ height: '50px', width: '300px' }} className='btn-primary'><FontAwesomeIcon className='text-left' icon={faGoogle} /> Log In With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;