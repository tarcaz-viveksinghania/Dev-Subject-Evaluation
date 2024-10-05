//rfce
import React, {useEffect, useState, useContext} from 'react'

import NewChatButton from '../elements/NewChatButton'
import HistoryItems from '../elements/HistoryItems';
import UserBox from '../elements/UserBox'
import MeatBallMenu from '../elements/MeatBallMenu';
import { FiSearch } from "react-icons/fi";
import History from '../data/history.json';
import { getConversations } from '../api/tarcazai'
import CurrentUserContext from '../context/user-context';

import Image from 'next/image'

var chatLogo = '/assets/icon_anychat.svg'

const LeftSection = ({fetchConversation, setIsFresh, profileSettings, handleMBOptions}) => {

  const [showMeatBallMenu, setShowMeatBallMenu] = useState(false);
  const {currentUser} = useContext(CurrentUserContext);
  const [conversations, setConversations] = useState([]);

  useEffect(()=>{    
    if(conversations.length <= 0){
      fetchChatHistory();
    } 
  },[]);

  useEffect(()=>{
    console.log(conversations);
  },[conversations]);
  
  useEffect(()=>{
    setShowMeatBallMenu(false);
  },[fetchConversation]);
  
  const handleProfileClick = () => {
    profileSettings();
  };

  // conversation_id: 1,
  // created: 2024-05-14T05:28:39.000Z,
  // user_id: 3,
  // chatname: 'This is example chat name'
  async function fetchChatHistory(){
    await getConversations(currentUser.user_id).then(result =>{ 
      console.log("conversations - ");
      console.log(result);     
      setConversations(result);  
      // setIsLoading(false);
    });

  }

  function handleNewChatClick(){
    setIsFresh(true);
    setShowMeatBallMenu(false);
    fetchChatHistory();
  }

  function handlePreviousChatClick(item){
    console.log('handlePreviousChatClick '+item.conversation_id);
    fetchConversation(item);
    setShowMeatBallMenu(false);
  }
  
  const handleMeatBallsMenuOptions = (e) =>{
    setShowMeatBallMenu(!showMeatBallMenu);
  }

  const handleUserBoxClick = (e) =>{
    //profile_image profile_name meat_ball
    if (e.target.id === "profile_image" || e.target.id === "profile_name" ){
      handleProfileClick();
      setShowMeatBallMenu(false);
    }
    if (e.target.id === "meat_ball"){
      handleMeatBallsMenuOptions(e);
    }
  }

  const meatBallMenuClicked = (e) =>{
    handleMBOptions(e)    
    setShowMeatBallMenu(false);
  }

  return (
    <div className="HomeLeft flex flex-col p-4 m-4 w-60 rounded-3xl z-20 fixed top-0 -left-96 lg:w-60 lg:left-0 peer-focus:left-0 peer:transition ease-out delay-150 duration-200">

      <div className="flex flex-col h-24" >
                
        <div className="flex" >

            <Image className="w-8 h-8 basis-1/5" width={32} height={32} src={chatLogo} alt='AnyChat'/>
            
            <span className='font-outfit text-lg font-bold ml-3 basis-3/5 '>AnyChat</span>
            
              <FiSearch className="w-4 h-5 basis-1/5 mt-1 opacity-50 hover:opacity-90"/>
            
            {/* <img className="w-4 h-4 justify-end basis-3/6 mt-2 opacity-50" src={search} alt='Search'/> */}
          </div>

          <div className="flex justify-center items-center py-6" >

              <NewChatButton onClick={()=>handleNewChatClick()}/>

          </div>


      </div>

      <div className="tw_HomeLeft_middle overflow-auto flex-grow my-4 py-4" >

            <ul className='overflow-x-hidden'>
              <p className="py-2 font-wix text-left font-normal text-xs text-slate-500 ">Recent Chat</p>
              {conversations.map((items)=>{
                return (<HistoryItems key={items.conversation_id
                } items={items} selected={()=>handlePreviousChatClick(items)}/>)
              })}
               {/* TODO  */}
              {/* <p className="py-2 font-wix text-left font-normal text-xs text-slate-500 ">Previous 7 days</p>
              {History.previous.map((items)=>{
                  return (<HistoryItems key={items.key} items={items} selected={()=>handlePreviousChatClick(items)}/>)
              })} */}

            </ul>

      </div>   
      
      {showMeatBallMenu && <MeatBallMenu onMBClick={(e)=>meatBallMenuClicked(e)}/>}

      
      <UserBox handleClickInBox={(e) => handleUserBoxClick(e)}/>
     
      
  </div>
    
  )
}

export default LeftSection