// import Image from "next/image";
// import Link from 'next/link';

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       {/* <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start"> */}
//         <h1>Welcome Vivek</h1>
//       {/* </main> */}
      
//     </div>
//   );
// }


// export default function Home() {
//   return (
//     <h1>Welcome Vivek</h1>
//   );
// }



// export default function HomePage() {
//   return (
//     <div style={{ padding: '20px', textAlign: 'center',  }}>
//       <h1 style={{ textAlign: 'center', fontSize: '65px' }}>GradeSmart.AI</h1>
//       <h2 style={{ textAlign: 'center', fontSize: '35px', color: 'grey' }}>Your AI companion to richer and faster feedback on student tests</h2>
//       <hr></hr>
//       <h3 style={{ textAlign: 'left', fontSize: '30px' }}>Choose an option to proceed:</h3>

//       <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        
//         <Link href="/student" style={{ textDecoration: 'none' }}>
//           <button kind="secondary">Upload Student's Answers Sheets</button>
//         </Link>

//         <Link href="/examiner" style={{ textDecoration: 'none' }}>
//           <button kind="secondary">Upload Examiner's Answer Sheets</button>
//         </Link>

//         <button kind="secondary">Obtain rich, personalised feedback</button>
//       </div>


//     </div>
//   );
// }



// ================================================================================================

// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';

// export default function LoginPage() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(''); // Reset error

//     const res = await fetch('/api/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ username, password }),
//     });

//     const data = await res.json();
//     if (data.success) {
//       router.push('/home'); // Redirect on successful login
//     } else {
//       setError(data.message);
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <h1>Login</h1>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor="username">Username</label>
//             <input
//               type="text"
//               id="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           {error && <p className="error-message">{error}</p>}
//           <button type="submit">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// ================================================================================================
// ================================================================================================



// start of the application
// 'use client'; // used for hooks which runs only at client side

// import { useState, useRef, createContext, useContext, useEffect } from 'react';
// import {Provider} from 'react-redux';
// import makeStore from './Store';
// import APP_CONSTANTS from './strings';
// import { useRouter } from 'next/navigation'; // Import useRouter for navigation

// import LandingScreen from "./components/LandingScreen";
// // import HomeScreen from "./components/HomeScreen";
// import CurrentUserContext from "./context/user-context";

// export default function Home() {
//   const [loggedIn, setLoggedIn] = useState(false);
//   const storeRef = useRef({})
//   const router = useRouter(); // Make sure useRouter is defined here
//   // set Log in status

//   const [currentUser, setCurrentUser] = useState(null);

//   useEffect(()=>{
//     setUpLogin()    
//   },[])

//   const authenticationComplete = async (data) => {
//     // console.log("authentication Complete - " + data.email);
  
//     try {
//       const response = await fetch('/api/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email: data.email, password: data.password }), 
//       });
  
//       const result = await response.json();
  
//       if (response.ok) {
//         // Save user data and redirect on successful login
//         saveToLocalStorage(result.user);
//         setLoggedIn(true);
//         setCurrentUser(result.user);
//         router.push('/home'); // Redirect to /home after login
//       } else {
//         console.error(result.message); // Handle error (e.g., show a notification)
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//     }
//   };
  

//   function setUpLogin() {
//     if (typeof window !== "undefined" && window.localStorage) {
//       console.log("Home Page Visited - checking localStorage login");
  
//       let isLoggedIn = localStorage.getItem(APP_CONSTANTS.KEY_LOGIN);
  
//       // Ensure that isLoggedIn is valid before parsing
//       setLoggedIn(isLoggedIn ? JSON.parse(isLoggedIn) : false);
  
//       if (isLoggedIn) {
//         let userData = localStorage.getItem(APP_CONSTANTS.KEY_USER_DATA);
  
//         // Ensure userData is valid JSON before parsing
//         try {
//           if (userData) {
//             setCurrentUser(JSON.parse(userData));
//           } else {
//             console.error("No user data found in localStorage.");
//           }
//         } catch (error) {
//           console.error("Error parsing userData:", error);
//         }
//       }
//     } else {
//       setLoggedIn(false);
//     }
//   }
  
  

  

//   return (
//     <Provider store={makeStore}>
//       <LandingScreen action={(e) => authenticationComplete(e)} />
//     </Provider>
//   );
  


// }
// ================================================================================================




'use client'; // used for hooks which run only on the client side

import { useState, useRef, useEffect } from 'react';
import { Provider } from 'react-redux';
import makeStore from './Store';
import APP_CONSTANTS from './strings';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation
import LandingScreen from "./components/LandingScreen";
import CurrentUserContext from "./context/user-context";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const storeRef = useRef({});
  const router = useRouter(); // Make sure useRouter is defined here

  useEffect(() => {
    if (loggedIn) {
      router.push('/home');
    }
  }, [loggedIn]);





  const authenticationComplete = async (data) => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: data.email, password: data.password }), 
      });

      const result = await response.json();

      if (response.ok) {
        // Save user data and redirect on successful login
        saveToLocalStorage(result.user);
        setLoggedIn(true);
        setCurrentUser(result.user);
        router.push('/home'); // Redirect to /home after login
      } else {
        console.error(result.message); // Handle error (e.g., show a notification)
      }

      router.push('/home'); // Redirect to /home after login

    } catch (error) {
      console.error('Error during login:', error);
    }
  };





  const setUpLogin = () => {
    if (typeof window !== "undefined" && window.localStorage) {
      console.log("Home Page Visited - checking localStorage login");

      let isLoggedIn = localStorage.getItem(APP_CONSTANTS.KEY_LOGIN);
      setLoggedIn(isLoggedIn ? JSON.parse(isLoggedIn) : false);

      if (isLoggedIn) {
        let userData = localStorage.getItem(APP_CONSTANTS.KEY_USER_DATA);
        try {
          if (userData) {
            setCurrentUser(JSON.parse(userData));
          } else {
            console.error("No user data found in localStorage.");
          }
        } catch (error) {
          console.error("Error parsing userData:", error);
        }
      }
    } else {
      setLoggedIn(false);
    }
  };

  const saveToLocalStorage = (user) => {
    localStorage.setItem(APP_CONSTANTS.KEY_LOGIN, true);
    localStorage.setItem(APP_CONSTANTS.KEY_USER_DATA, JSON.stringify(user));
  };

  return (
    <Provider store={makeStore}>
      <LandingScreen action={(e) => authenticationComplete(e)} />
    </Provider>
  );
}





function RequireAuth({ children, redirectTo }) {
  // const { user, setUser } = useContext(UserContext);
  const [user, setUser] = useState({ LoggedInStatus: "LoggedOut" });
  // const Navigate = useNavigate()

  if (user.LoggedInStatus === undefined) {
    return null; // or loading indicator, etc...
  }
  return null; // or loading indicator, etc...
  // return user.LoggedInStatus === "LoggedIn"
  //   ? children
  //   : <Navigate to={redirectTo} replace />;
}


function saveToLocalStorage(userData){
  localStorage.setItem(APP_CONSTANTS.KEY_USER_DATA, JSON.stringify(userData));
  // let userData = JSON.parse(localStorage.getItem('userData'));  
  localStorage.setItem(APP_CONSTANTS.KEY_LOGIN, "true");

}
