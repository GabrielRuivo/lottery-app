import React, {useContext, useState, useEffect} from 'react';
import { auth } from '../firebase';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState();

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    async function onSignUpSubmit(name, email, password) {
        try {
           // faz o signup apenas com e-mail e password aqui
           const result = await signup(email, password)
     
           // logo em seguida atualiza as informações
           // do usuário no firebase
           await result.user.updateProfile({
             displayName: name

             // photoURL: URL_DA_IMAGEM_DE_PERFIL
           })
        } catch (error) {
           // trate o erro
           console.log("erro", { error })
        } 
    }

    function login (email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout() {
        return auth.signOut()
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }

    useEffect(() => {
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
        resetPassword
    }

    return (
        <AuthContext.Provider value={value} >
            {!loading && children}
        </AuthContext.Provider>
    )

}