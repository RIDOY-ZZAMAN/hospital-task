import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import aunthenticationInitialize from "../componets/Firebase/firebase.init";


aunthenticationInitialize();


const useFirebase = () => {
    const auth = getAuth();
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [user, setUser] = useState([]);




    const handleGoogleSignIn = () => {

        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
    }
    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log("This user", user);
                setError('Login Success');



            })
            .catch(error => {
                setError(error.message)
            })
    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)

            } else {

            }

        });
        return () => unsubscribed;
    }, [])

    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                const user = result.user;

                setUser(user);
                setError('');
                verifyEmail();
                setUserName();

            })
            .catch(error => {
                setError(error.message);
            })
    }
    const setUserName = (name) => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => {

            }).catch((error) => {

            });

    }
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {

            });
    }
    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(result => {

            })
            .catch((error) => {

            });
    }


    const logOut = () => {

        signOut(auth).then(() => {
            setUser({});
        }).finally(() => {


        });

    }

    return {
        user,
        error,
        handleGoogleSignIn,
        registerNewUser,
        setUserName,
        verifyEmail,
        processLogin,
        handleResetPassword,
        logOut,



    }


}

export default useFirebase;