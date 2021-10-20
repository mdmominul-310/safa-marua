import { useEffect, useState } from "react";
import firebaseInit from "../Firebase/firebaseinit";
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword,FacebookAuthProvider,signOut} from "firebase/auth";



firebaseInit();
const UseFirebase=()=>{
    const[user,setUser]=useState({});
    const[email,seEmail]=useState('');
    const[password,setPassword]=useState('');
    const [isLoading,setIsloading]=useState(true);
    
    
//google auth provider
    const googleProvider= new GoogleAuthProvider();
//facebook auth provider
const facebookProvider = new FacebookAuthProvider();
// auth
    const auth=getAuth();
    //Google signin
    const signInWithGoogle=()=>{
            setIsloading(true);
          return  signInWithPopup(auth,googleProvider);
            
        }
//emain password signin
    const signInwithEmailPass=()=>{
      setIsloading(true);
       
           return signInWithEmailAndPassword(auth,email,password);
            
    }
//facebook login 
const loginWithFb=()=>{
    setIsloading(true);
   return signInWithPopup(auth,facebookProvider);
}
//sign in with email and password
    const createWithEmailPass=()=>{
     
     return   createUserWithEmailAndPassword(auth,email,password)
       
    }
    const signout=()=>{
       setIsloading(true);
        signOut(auth)
        .then(()=>setUser({}))
        .catch(error=>console.log(error))
        .finally(()=>false)
    }


    useEffect(()=>{
       
            onAuthStateChanged(auth,(user)=>{
                if(user){
                    setUser(user);
                }
                else{}
               setIsloading(false)
            });
    },);
    const emailHandle=(event)=>{
        event.preventDefault();
        const email=event.target.value;
        seEmail(email);
    }
    const passwordHanlde=(event)=>{
        event.preventDefault();
        const password=event.target.value;
        setPassword(password);
    }
    return{
        emailHandle,
        passwordHanlde,
        signInWithGoogle,
        signInwithEmailPass,
        createWithEmailPass,
        loginWithFb,
        signout,
       isLoading,
        user
    }
}
export default UseFirebase;