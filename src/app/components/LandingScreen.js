'use client';
import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import '../globals.css'
import GoogleAuth from '../api/GoogleAuth'
import { jwtDecode } from 'jwt-decode'
import { FaGoogle } from "react-icons/fa";
import APP_CONSTANTS from '../strings';
import InputField from "../subcomponent/InputField";
import axios from 'axios'

// Importing toastify module
import { ToastContainer, toast } from 'react-toastify';

// Import toastify css file
// import "react-toastify/dist/ReactToastify.css";

// toast-configuration method, it is compulsory method.
// toast.configure();


const notify = (message) => {
  // Calling toast method by passing string
  toast.info(message, {
    position: "top-center"
  });
};

const LandingScreen = ({action}) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [userEmailID, setUserEmailID] = useState('');
 
  const [headerText, setHeaderText] = useState(APP_CONSTANTS.HEADER_WELCOME_BACK);
  const [footerNote, setFooterNote] = useState(APP_CONSTANTS.TXT_NO_ACCOUNT);
  const [noteBtnTitle, setNoteBtnTitle] = useState(APP_CONSTANTS.SIGN_UP_BTN_TITLE);

  const [inputValue, setInputValue] = useState({ email: "", password: "" });
  const { email, password } = inputValue;


  // for input fields username and passwords
  const handleChanges = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
    
  };

  useEffect(()=>{
    if (isLogin){
      setHeaderText(APP_CONSTANTS.HEADER_WELCOME_BACK);
      setFooterNote(APP_CONSTANTS.TXT_NO_ACCOUNT)
      setNoteBtnTitle(APP_CONSTANTS.SIGN_UP_BTN_TITLE)
    }else{
      setHeaderText(APP_CONSTANTS.HEADER_CREATE_ACCOUNT);
      setFooterNote(APP_CONSTANTS.TXT_HAVE_ACCOUNT)
      setNoteBtnTitle(APP_CONSTANTS.LOG_IN_BTN_TITLE)
    }
  },[isLogin])

  const toggleLogIn = (e) =>{
    setIsLogin(!isLogin);    
  }

  const operationGoogleSuccess = (response) =>{
    console.log('Login operation -' + response);
    // oauthSignIn();
    console.log("Encoded JWT ID token: " + response.credential);
    const decoded = jwtDecode(response.credential);
    // console.log(decoded); 

    var userObject = {
      email: decoded.email,
      first_name: decoded.given_name,
      last_name: decoded.family_name,
      name: decoded.name,
      avatar_url: decoded.picture,
      expiry: decoded.exp,
      about_me:"",
      location:"India"
    }

    console.log(userObject); 
    // imgLogo = userObject.image_url;
    // Object.keys(userObject).length !=0
    if(userObject.email.length > 3){
        console.log("Proceed to Home Screen");
        
    }
    action(clean(userObject)); 

  }

  // const continueButtonOperation = (e)=>{
    
  //   if (isLoading) return
  //   setIsLoading(true);

  //   e.preventDefault();
    
  //   //TODO: Validation
  //   if(isLogin){
  //     console.log("Login Operation");
  //     console.log(inputValue);
  //     loginAPICall();
  //   }else{
  //     console.log("Sign Up Operation");
  //     console.log(userEmailID);
  //     registerAPICall();
  //   }
  // }

  const continueButtonOperation = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (isLogin) {
      loginAPICall();
    } else {
      registerAPICall();
    }
  };

  // No token required
  // const registerAPICall = () =>{
  //   const registerUrl = APP_CONSTANTS.BASE_URL + APP_CONSTANTS.EP_REGISTER
  //   axios.post(registerUrl,{email:userEmailID})
  //     .then(res =>{
  //       console.log("Response -");
  //       console.log(res.data);
  //       if(res.status == 200){
  //         setIsLoading(false)
  //         // alert("Registration link sent. Please check your email");
  //         notify(res.data.message);
  //       }else{
  //         setIsLoading(false)
  //         // alert("Registration Operation Failed");
  //         notify('Registration Operation Failed');
  //       }
  //     })
  //     .catch(err => console.log(err))
  //     .finally(()=>setIsLoading(false));
      
  // }

  const registerAPICall = () => {
    axios.post('/api/register', inputValue)
      .then(res => {
        notify(res.data.message);
        setIsLoading(false);
      })
      .catch(err => {
        notify('Registration Failed');
        setIsLoading(false);
      });
  };


  // No token required
  // const loginAPICall = () =>{

  //   const loginUrl = APP_CONSTANTS.BASE_URL + APP_CONSTANTS.EP_LOGIN

  //   // Make API Call
  //   axios.get(loginUrl,{
  //     params: inputValue
  //   })
  //     .then(res =>{
  //       console.log("Response -");
  //       console.log(res.data);
  //       if(res.status == 200){
  //         toast.info("Login Success!", {
  //           position: "top-center",
  //           onClose: () => operationLoginSuccess(res.data)
  //         });
          
  //       }else{
  //         alert("Record Not Found");
  //       }
  //     })
  //     .catch(err => {
  //       console.log(err)
  //       alert("Login Failed. Check Connection.");
  //     })
  //     .finally(()=>setIsLoading(false));
      
  // }

  const loginAPICall = () => {
    const loginUrl = '/api/login';
  
    // Make API Call
    axios.post(loginUrl, {
      username: email, // assuming the email field is used for the username
      password: password,
    })
    .then(res => {
      console.log("Response -", res.data);
      if (res.status === 200) {
        notify("Login Success!");
        operationLoginSuccess(res.data.user);
      } else {
        notify("Record Not Found");
      }
    })
    .catch(err => {
      console.log(err);
      // Make sure to check the error response for more details
      if (err.response) {
        notify(err.response.data.message || "Login Failed. Check Connection.");
      } else {
        notify("Login Failed. Check Connection.");
      }
    })
    .finally(() => setIsLoading(false));
  };
  
  



  const operationLoginSuccess = (data) =>{

    var userObject = {
      email: data.email,
      first_name: "",
      last_name: "",
      name: data.name,
      user_id: data.user_id,
      avatar_url: data.avatar_url,
      expiry: "",
      about_me:data.about_me,
      location:data.location
    }
    action(clean(userObject)); 
  }

  const SignUpBox = () => {
    return(
      <div className='flex-display justify-center items-center w-full text-center'>
                           
        <input 
        id="email_signup" 
        type="email" 
        placeholder={APP_CONSTANTS.TXT_EMAIL_PLACEHOLDER}
        value={userEmailID} 
        onChange={ e => setUserEmailID(e.target.value)} 
        className="mt-2 m-3 md:m-4 w-full md:w-2/3 p-2 bg-neutral-200 hover:bg-neutral-100 border border-slate-300 rounded-lg text-sm shadow-sm placeholder-slate-400
          focus:outline-none focus:border-tertiary8-500 focus:ring-1 focus:ring-tertiary8-500
          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
          invalid:border-danger-500 invalid:text-danger-600
          focus:invalid:border-danger-500 focus:invalid:ring-danger-500
        "/>

      
      </div>
    )
  }

  const LogInBox = () => {
    return(
      <div className='flex-display justify-center items-center w-full text-center'>

        <InputField
          type="text"
          value={email}
          placeholder={APP_CONSTANTS.TXT_EMAIL_PLACEHOLDER}
          name="email"
          onChange={handleChanges}
          classname="mt-2 m-3 md:m-4 w-full md:w-2/3 p-2 bg-neutral-200 hover:bg-neutral-100 border border-slate-300 rounded-lg text-sm shadow-sm placeholder-slate-400
          focus:outline-none focus:border-tertiary8-500 focus:ring-1 focus:ring-tertiary8-500
          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
          invalid:border-danger-500 invalid:text-danger-600
          focus:invalid:border-danger-500 focus:invalid:ring-danger-500
        "
       />
       <InputField
         type="password"
         value={password}
         placeholder={APP_CONSTANTS.TXT_PW_PLACEHOLDER}
         name="password"
         onChange={handleChanges}
         classname="mt-1 m-3 md:m-4 md:mt-1 w-full md:w-2/3 p-2 bg-neutral-200 hover:bg-neutral-100 border border-slate-300 rounded-lg text-sm shadow-sm placeholder-slate-400
         focus:outline-none focus:border-tertiary8-500 focus:ring-1 focus:ring-tertiary8-500
         disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
         invalid:border-danger-500 invalid:text-danger-600
         focus:invalid:border-danger-500 focus:invalid:ring-danger-500
       "
       />
      </div>
    )
  }

  const FootNote = () =>{

    return(
      <span className='justify-self-center w-full font-light text-t3'> {footerNote} <a href="#!" onClick={()=>toggleLogIn(true)} className='text-primary-500'>{noteBtnTitle}</a>
      </span>  
    )
  }

  const FootSection = () =>{
    return(
      <div className='font-wix text-neutral-500 flex flex-col justify-self-center items-center justify-between mb-1'>
        <p className='font-bold my-5'>Tarcaz AI</p>
        
        <div className='flex flex-row justify-self-center items-center justify-center'>
          <p>Terms of use</p>
          <div className='bg-neutral-500 w-[1px] h-5 m-2'></div>
          <p>Privacy Policy</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center h-screen bg-transparent font-wix"> 

        <div className="grid grid-cols-1 gap-4 justify-center p-6 h-full w-full md:w-3/5 lg:w-2/5 xl:w-2/6 bg-transparent overflow-auto overflow-y-hidden ">

            <div className='flex justify-center items-center w-full'>
              <Image alt="Tarcaz AI Logo rounded-full" src={APP_CONSTANTS.PATH_LOGO_IMG} width={64} height={64} className='m-2 w-16 h-16'/>     
            </div>    

           

            <div className='flex-display justify-center items-center w-full text-center'>


              <p className='font-outfit font-bold text-3xl justify-self-center text-center my-3'>{headerText}</p>

              <form className='p6 flex flex-col justify-center items-center align-middle'>
                                  
                {isLogin ? LogInBox() : SignUpBox()}

                <button className="text-white m-3 md:m-4 w-full md:w-2/3 h-[44px] bg-neutral-900 hover:bg-neutral-800 active:bg-neutral-700 focus:outline-none focus:ring focus:ring-neutral-300 rounded-lg" onClick={(e)=>continueButtonOperation(e)} disabled={isLoading}>                  
                  Continue
                </button>              
                
              </form>

              {<FootNote />}

            </div>

            {/* --------------OR-------------- */}

            <div className='flex flex-row justify-center items-center align-middle w-full'>

              <div className='grow h-[0.8px] bg-neutral-300 m-2 md:ml-16'></div>
              <p className='font-wix text-neutral-600 font-normal'> OR </p>
              <div className='grow h-[0.8px] bg-neutral-300 m-2 md:mr-16'></div>
            
            </div>
            <ToastContainer autoClose={2000}/>
            <div className='flex items-center justify-center '>
           
              <button className="group flex items-center justify-center justify-self-center text-neutral-700 m-3 md:m-4 w-full md:w-2/3 h-[44px] p-2 bg-white hover:bg-neutral-800 active:bg-neutral-700  hover:text-neutral-100 focus:outline-none focus:ring focus:ring-neutral-300 rounded-lg border border-neutral-400"
              onClick={()=>operationGoogleSuccess()}>                
                  <FaGoogle className="group-hover:text-neutral-100 w-5 h-5 m-4 justify-self-center" />
                  Continue with Google
              </button> 
              {/* <GoogleAuth className="group flex items-center justify-center justify-self-center text-neutral-700 m-3 md:m-4 w-full md:w-2/3 h-[44px] p-2 bg-white rounded-lg border border-neutral-400" onSuccess={(e)=>operationSuccess(e)}/> */}

            </div> 

            <FootSection />

        </div>
        
    </div>
  )
}

export default LandingScreen


function clean(obj) {
  for (var propName in obj) {
    if (obj[propName] === null || obj[propName] === undefined) {
      obj[propName] = "";
    }
  }
  return obj
}
