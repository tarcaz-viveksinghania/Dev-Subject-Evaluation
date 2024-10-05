// 'use client';
// //rfce
// import React, { Fragment, useState, useEffect } from 'react'
// import LeftSection from './LeftSection'
// import RightSection from './RightSection'
// import APP_CONSTANTS from '../strings';
// import { useRouter } from 'next/navigation';

// import { Disclosure } from '@headlessui/react'
// import {GiHamburgerMenu} from 'react-icons/gi'
// import ProfileSettingsModal from '../elements/ProfileSettingsModal'
// import BaseModalComponent from './BaseModalComponent'
// // Importing toastify module
// import { ToastContainer, toast } from 'react-toastify';

// const HomeScreen = ({setLogout}) =>{

//   var [query, setQuery] = useState("");
//   const [isFresh, setIsFresh] = useState(true);

//   const [chatName, setChatName] = useState(APP_CONSTANTS.EMPTY_STRING);
//   const [conversationID, setConversationID] = useState(APP_CONSTANTS.EMPTY_STRING);

//   var [showModal, setShowModal] = useState(false);

//   const router = useRouter();

//   const updateQuery = (qry) =>{
//       setQuery(qry)
//       // console.log("updated query");
//   }
   
//   function fetchConversation(item){
//     setChatName(item.chatname)
//     setConversationID(item.conversation_id)
//     // setIsFresh(false);        
//   }
  
//   const commenceQuery = () => {
//       console.log(query);
//   }

//   const newChat = (qry) => {
//     setIsFresh(qry); 
//     updateQuery('');
//   }

//   const handleProfileSettings = () =>{
//     setShowModal(true); 
//   }

//   const handleMeatBallOptions = (e) =>{
//     console.log(e);
//     if(e=="Logout"){
//       handleLogoutOperation()      
//     }
//   }

//   function handleLogoutOperation(){
//     if (typeof window !== 'undefined' && window.localStorage) {
//       clearLocalStorage()
//       toast.info("Logging out!", {
//         position: "top-left",
//         onClose: () => setLogout()
//       });

//     }
//   }
  
//   //Todo: for burger button and profile pop up resolve
//   const screenClicked = (e) =>{
//     // console.log(e.target);
//   }

//   return(
//     <Fragment>
//       <div className='h-screen flex' onClick={(e)=>{screenClicked(e)}}>
        
//         <Disclosure as="nav">
          
//           <Disclosure.Button className="absolute z-10 top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-600 hover:bg-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group md:hidden">
//             <GiHamburgerMenu
//               className="block md:hidden h-6 w-6"
//               aria-hidden="true"
//             />
//           </Disclosure.Button>
          
//             <LeftSection fetchConversation={(item)=>fetchConversation(item)} setIsFresh={()=>newChat(true)} profileSettings={() => handleProfileSettings()} handleMBOptions={(e) => handleMeatBallOptions(e)}/>
          
//           </Disclosure>
          
//             <RightSection chatName={chatName} setChatName={setChatName} 
//             conversationID={conversationID} setConversationID={setConversationID} 
//             query={query} updateQuery={(qry)=>updateQuery(qry)} 
//             isFresh={isFresh} setIsFresh={(qry)=>setIsFresh(qry)}/>
          
          
//           {showModal && <BaseModalComponent isActive={showModal} onClose={() => setShowModal(false)}>
//               <ProfileSettingsModal />
//           </BaseModalComponent>}
          
//           <ToastContainer autoClose={2000}/>

//       </div>
        
      
//     </Fragment>
    
//   )  
// }

// export default HomeScreen


// function clearLocalStorage(){
//   localStorage.removeItem(APP_CONSTANTS.KEY_USER_DATA);      
//   localStorage.setItem(APP_CONSTANTS.KEY_LOGIN, "false");
// }