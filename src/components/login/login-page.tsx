import React, { ChangeEvent, useContext, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, User } from "firebase/auth";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../providers/auth";
const provider = new GoogleAuthProvider();
const auth = getAuth();

export const LoginPage = () => {
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {user,setUser} = useContext(AuthContext)
    const setEmailValue = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
            };
    

    const setPasswordValue = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
            };
    

    
        const signInWithGoogle= () => {
            signInWithPopup(auth, provider)
                .then((result) => {
              // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential?.accessToken;
                // The signed-in user info.
                const user = result.user;
                setUser(user);
                // ...
            })
            .catch((error) => {
                console.log(error);
              // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
              // ...
            });
            //...
        };

        const signUp = () => {
          const auth = getAuth();
          createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              setUser(user);
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              // ..
            });        
        };

        const loginWithEmailAndPassword = () => {
          const auth = getAuth();
          signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              setUser(user);
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
            });
                
        };

    return( 
    <div>      
        <TextField id="filled-basic" 
        value={email}
        onChange={setEmailValue} 
        label="Email"
        variant="filled" 
        /> 
        <TextField id="filled-basic" 
        value={password}
        type="password"
        onChange={setPasswordValue} 
        label="Password"
        variant="filled" />
        <Button variant="text" onClick={signUp}>SignUp</Button>
        <Button variant="text" onClick={loginWithEmailAndPassword}>Login</Button>
        <Button variant="text" onClick={signInWithGoogle}>Login with Google</Button>
        {user&& <h2>{user?.displayName}</h2>}
    </div>
    );
}