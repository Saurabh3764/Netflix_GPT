import React, { useEffect, useRef, useState } from 'react'
import Header from './Header'
import { validate } from '../utils/validation';
import { initializeApp } from "firebase/app";
import { auth, firebaseConfig } from '../utils/firebase';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword,sendPasswordResetEmail} from "firebase/auth";


const Login = () => {
    const [signin, SetSignIn] = useState(true);
    const [errorMsg, SetErrorMsg] = useState(null);
    const [forgotPass, SetForgotPass] = useState(false);
    const [sendMail, SetSendMail] = useState(false)

    const email = useRef(null)
    const password = useRef(null)

    useEffect(()=>{
       const app = initializeApp(firebaseConfig); 
    },[])


    const handleClick = () => {
        email.current.value = null
        password.current.value = null
        SetErrorMsg(null)
        SetSignIn(!signin)
    }
    const handlebuttonClick = (e) => {

        let userdetails;
        e.preventDefault();
        const message = validate(email.current.value, password.current.value);
        SetErrorMsg(message);

        if (message) return;
        

        if (signin) {
            const auth = getAuth()
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    userdetails = userCredential.user;

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                   
                    SetErrorMsg(errorMessage)
                });
        }
        else {
            const auth = getAuth()
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    userdetails = userCredential.user

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    SetErrorMsg(errorMessage)
                });
        }

    }

    const handleResetPassword = (e) => {
   
        //e.preventDefault();
        sendPasswordResetEmail(auth, email.current.value)
            .then(() => {
                // Password reset email sent!
                SetSendMail(true)
                SetErrorMsg(null)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                SetErrorMsg(errorMessage)
            });
    }
    return (
        <div className='flex flex-col'>
            <Header />
            <div className={'w-screen h-screen bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/cb17c41d-6a67-4472-8b91-cca977e65276/web/IN-en-20250505-TRIFECTA-perspective_03ae1a85-5dcf-4d20-a8a6-1e61f7ef73cb_small.jpg)] flex justify-center items-center'}>
                {!forgotPass ?
                    <div className='flex flex-col bg-black/80 text-white  p-8 justify-center rounded-lg '>
                        <h1 className=' text-2xl sm:text-3xl font-bold mb-4  m-2'>{signin ? "Sign In" : "Sign Up"}</h1>
                        {!signin && <input type='text' className='border-1 border-gray-400 sm:m-2 m-1 mt-3 sm:p-2 p-1 rounded-md text-l my-3' placeholder='Enter Name' />}
                        <input type='text' className='border-1 border-gray-400 sm:m-2 m-1 mt-3 sm:p-2 p-1 rounded-md text-l my-3' placeholder='Enter Email' ref={email} />
                        <input type='password' className='border-1 border-gray-400 sm:m-2 m-1 sm:mt-3 sm:p-2 mt-1 p-1 rounded-md text-l' placeholder='Enter Password' ref={password} />
                        <div className='flex flex-col m-2 mt-3 p-2 justify-center'>
                            <p className='py-1 text-center text-red-400'>{errorMsg}</p>
                            <button className='bg-red-600 sm:px-24 py-1 px-14 rounded-md cursor-pointer sm:text-lg hover:bg-red-500' onClick={(e) => { handlebuttonClick(e) }}>{signin ? "Sign In" : "Sign Up"}</button>
                        </div>
                        <p className='sm:m-2 m-1 mt-3 sm:p-2 p-1 text-xs text-center cursor-pointer' onClick={handleClick}>{signin ? "New to Netflix ? Sign Up" : "Already Registered ? Sign In"}</p>
                        {signin && <p className='sm:m-2 m-1   sm:p-2 p-1 text-xs text-center cursor-pointer' onClick={() => {SetForgotPass(true);SetErrorMsg(null)}}>Forgot Password?</p>}
                    </div>
                    :
                    <div className='flex flex-col bg-black/80 text-white  p-8 justify-center rounded-lg '>
                        <h1 className=' text-2xl sm:text-3xl font-bold mb-4  m-2'>Forgot Pasword</h1>
                        <input type='text' className='border-1 border-gray-400 sm:m-2 m-1 mt-3 sm:p-2 p-1 rounded-md text-l my-3' placeholder='Enter Email' ref={email} />

                        <div className='flex flex-col m-2 mt-3 p-2 justify-center'>
                             {!sendMail && errorMsg &&  <p className='py-1 text-center text-red-400'>{errorMsg}</p>} 
                             {sendMail && <p className='py-1 text-center text-green-400'>Password Rest Link Sent Sucessfully.! </p> }
                            <button className='bg-red-600 sm:px-24 py-1 px-12 text-xs rounded-md cursor-pointer sm:text-lg hover:bg-red-500' onClick={(e) => { handleResetPassword(e) }}>Reset Password</button>
                        </div>
                        <p className='sm:m-2 m-1   sm:p-2 p-1 text-xs text-center cursor-pointer' onClick={() => SetForgotPass(false)}>Back to Sign In?</p>
                    </div>
                }
            </div>
        </div>

    )
}

export default Login