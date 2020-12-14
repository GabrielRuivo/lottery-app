import React, {useContext, useState, useEffect} from 'react';
import { auth } from '../firebase';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    async function onSignUpSubmit(name, email, password) {
        const result = await signup(email, password)

        await result.user.updateProfile({
            displayName: name,
        })
    }

    function login (email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout() {
        return new Promise(async(resolve) => {
            await auth.signOut();
            setCurrentUser(null);
            resolve();
        })
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }

    useEffect(() => {
        setCurrentUser(auth.currentUser)
        setLoading(false)

        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe;
    }, [])

    const value = {
        currentUser,
        login,
        signup,
        logout,
        onSignUpSubmit,
        resetPassword,
        loading
    }

    return (
        <AuthContext.Provider value={value} >
            {!loading && children}
        </AuthContext.Provider>
    )

}