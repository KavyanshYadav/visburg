import { auth, googleProvider } from "@/config/firebase"
import { createUserWithEmailAndPassword, GoogleAuthProvider, SignInMethod, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"


export const signinWithGoogle = async () => {
    try {
    const provider = new GoogleAuthProvider();

      const result = await signInWithPopup(auth, provider);
      // You can handle the result here if needed
      console.log('User signed in:', result.user);
    } catch (error) {
      console.error('Failed to sign in with Google:', error);
    }
}

export default async function signUp(email:string, password:string) {
    let result = null,
        error = null;
    try {
        result = await createUserWithEmailAndPassword(auth, email, password);
        console.log(result)
    } catch (e) {
        error = e;
    }

    return { result, error };
}

export  async function SignOut (){
    try {
        await signOut(auth)
    } catch (error) {
        console.log(error)
    }

}

export const signinwithEmailandPassword = async(email:string,password:string) =>{
    try {
        await signInWithEmailAndPassword(auth,email,password)
    } catch (error) {
        
    }
}