/* eslint-disable react-refresh/only-export-components */

import { createContext, useEffect, useState } from "react";
import { 
    createUserWithEmailAndPassword, 
    getAuth, 
    GoogleAuthProvider, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signInWithPopup, 
    signOut,
    updateProfile
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import useAxiosSecure from "../hooks/useAxiosSecure";

// Create an authentication context to provide auth data to the whole app
export const AuthContext = createContext(null);

// Initialize Firebase Auth instance
const auth = getAuth(app);

const AuthProviders = ({ children }) => {
    // State to hold the current user
    const [user, setUser] = useState(null);

    // Loading state to indicate if auth is being checked
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider()

    const axiosPublic = useAxiosSecure();
    // Function to create a new user with email and password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Function to sign in a user with email and password
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password); //Fixed: added `auth` as first argument
    };

const signInWithGoogle = () =>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
}


    const logOut = () =>{
        setLoading(false)
        return signOut(auth)
    }

    const updateUserProfile = (name, photo) => {
      return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      })
    }
    

    // Listen for changes in auth state (e.g., login, logout)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser); // Set current user

            if(currentUser){
                //get token and store client
                const userInfo = { email: currentUser.email};
                axiosPublic.post('/jwt', userInfo)
                .then(res =>{
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token)
                    }
                })
            }
            else{
                //TODO: remove token
                localStorage.removeItem('access-token');
            }
            console.log('current user', currentUser);
            setLoading(false);    // Auth check complete
        });

        // Cleanup the listener when component unmounts
        return () => unsubscribe();
    }, []);

    // Bundle all auth-related data and methods
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
      signInWithGoogle,
        logOut,
        updateUserProfile
    };

    // Provide auth context to children components
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;
