import React, { useRef, useState } from 'react'
import Header from './Header'
import { validate } from '../utils/validation';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../utils/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [signin, SetSignIn] = useState(true);
    const [errorMsg, SetErrorMsg] = useState(null);
    const navigate = useNavigate()

    const email = useRef(null)
    const password = useRef(null)
    
    const handleClick = () => {
        SetSignIn(!signin)
    }
    const handlebuttonClick = async (e) => {
        e.preventDefault();
        const message = validate(email.current.value, password.current.value);
        SetErrorMsg(message);

        if (message) return;
        const app = initializeApp(firebaseConfig);

        if (signin) {
            await signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                   console.log(user)
                   navigate('/browse')
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    SetErrorMsg(errorMessage)
                });
        }
        else {
            await createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);
                    navigate('/browse')
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    SetErrorMsg(errorMessage)
                });
        }

    }
    return (
        <div className='flex flex-col'>
            <Header />
            <div className={'w-screen h-screen bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/cb17c41d-6a67-4472-8b91-cca977e65276/web/IN-en-20250505-TRIFECTA-perspective_03ae1a85-5dcf-4d20-a8a6-1e61f7ef73cb_small.jpg)] flex justify-center items-center'}>
                <div className='flex flex-col bg-black/80 text-white  p-8 justify-center rounded-lg '>
                    <h1 className=' text-2xl sm:text-3xl font-bold mb-4  m-2'>{signin ? "Sign In" : "Sign Up"}</h1>
                    {!signin && <input type='text' className='border-1 border-gray-400 sm:m-2 m-1 mt-3 sm:p-2 p-1 rounded-md text-l my-3' placeholder='Enter Name' />}
                    <input type='text' className='border-1 border-gray-400 sm:m-2 m-1 mt-3 sm:p-2 p-1 rounded-md text-l my-3' placeholder='Enter Email' ref={email} />
                    <input type='password' className='border-1 border-gray-400 sm:m-2 m-1 sm:mt-3 sm:p-2 mt-1 p-1 rounded-md text-l' placeholder='Enter Password' ref={password} />
                    <div className='flex flex-col m-2 mt-3 p-2 justify-center'>
                        <p className='py-1 text-center text-red-400'>{errorMsg}</p>
                        <button className='bg-red-600 sm:px-24 py-1 px-14 rounded-md cursor-pointer sm:text-lg hover:bg-red-500' onClick={(e)=>{handlebuttonClick(e)}}>{signin ? "Sign In" : "Sign Up"}</button>
                    </div>
                    <p className='sm:m-2 m-1 mt-3 sm:p-2 p-1 text-xs text-center cursor-pointer' onClick={handleClick}>{signin ? "New to Netflix ? Sign Up" : "Already Registered ? Sign In"}</p>
                </div>
            </div>
        </div>

    )
}

export default Login