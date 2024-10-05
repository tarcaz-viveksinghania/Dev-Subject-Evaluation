import React, {useState, useEffect, useRef, useContext} from 'react'

import { RiSendPlaneFill } from "react-icons/ri";

import SuggestionsBlock from '../elements/SuggestionsBlock';
import ChatBlock from '../elements/ChatBlock';
import { createConversation, sendQueryRequest, getConversationMessages } from '../api/tarcazai'
import CurrentUserContext from '../context/user-context';
import APP_CONSTANTS from '../strings';

// import RESPONSE from '../data/chatresponse.json';


const RightSection = ({chatName, setChatName, conversationID, setConversationID, query, updateQuery, isFresh, setIsFresh}) => {
  const chatEnd = useRef(null);
  const [messages, setMessages] = useState([]);
  // const [isNewChat, setIsNewChat] = useState(false);
  
  // const [chatName, setChatName] = useState(chatname);
  // const [conversationID, setConversationID] = useState(conversationid);
 
  const [isLoading, setIsLoading] = useState(false);
  const {currentUser} = useContext(CurrentUserContext);
 
  useEffect(() => {
    console.log("triggered 1")
    try {
      chatEnd.current.scrollIntoView({ behavior: 'smooth' });
    } catch (error) {
      // console.log(error);
      console.log('chatEnd error');
    }
    
  }, [messages]);

  async function fetchMessages(){
    setIsLoading(true)
    await getConversationMessages(conversationID).then(result =>{ 
      console.log('Right Section: get conversation messages result -- ' + result.length);     
      console.log(JSON.stringify(result))  

    // setMessages(result); 
      if(result.length>0){
        setMessages(result); 
      }else{
        // setIsFresh(true)
      }
      // setMessages(messages => [...messages, result])

      setIsLoading(false);
    });
  }
  
  useEffect(() => {
    console.log("triggered 2 " + isFresh)
    if (isFresh){
      console.log("- Chatname and messages cleared---");
      setMessages([]);
      setChatName(APP_CONSTANTS.EMPTY_STRING)
      setConversationID(APP_CONSTANTS.EMPTY_STRING)
    }
  }, [isFresh])

  useEffect(() => {
    console.log("triggered 3")
    if (conversationID!=APP_CONSTANTS.EMPTY_STRING){
      setIsFresh(false);
      fetchMessages();
    }
    sendQueryAction();
  },[conversationID])

  const setUserChatName = () =>{
   
    // set only 4 words as title
    const title = query.split(" ").splice(0,4).join(" ");
    if (title == APP_CONSTANTS.EMPTY_STRING){
      return
    }
    setChatName(title);
    // setIsNewChat(true)
    // setChatValue((prev) => ({
    //   ...prev,
    //   chatName: title,
    // }));

    setIsLoading(true);
    createNewConversation(title);

  }
  const suggestionSelected = (item) => {      
      console.log(item);
      updateQuery(item.query);
  } 
  
  const queryUpdate = (str) => {
    updateQuery(str);
  }

  const sendQueryAction = async () => {

    // empty query string check
    if (query.replace(/ /g,'') == '') return
    
    // do not proceed without conversationID
    if (conversationID == APP_CONSTANTS.EMPTY_STRING){
      setUserChatName()
      return
    }

    setIsFresh(false);
    setIsLoading(true);

    setMessages(messages => [...messages, {
      data:query,
      is_bot:false
    }])

    // clear input field
    queryUpdate('');

    await sendQueryRequest(query, conversationID).then(result =>{
        setMessages(messages => [...messages, {
          data:result,
          is_bot: true
      }]);
      setIsLoading(false);

    });
    
  }
  
  const createNewConversation = (title) => {
     // API call
    createConversation(title, currentUser.user_id).then(result =>{
      console.log(result);
      console.log('create new conversation result - ' + result['conversation_id']);      
      setConversationID(result['conversation_id']);
      setIsLoading(false);
      
  });
  }

  const handleEnter = async (e) =>{
    if(e.key == 'Enter') await sendQueryAction()
  }

  return (
    <div className='flex transparent h-full w-full md:ml-60 font-wix p-2'>
      <div className='relative rounded-xl overflow-auto scrollbar-hide transparent w-full h-full p-2'>
       
        <div className=" bg-transparent w-full h-full flex flex-col align-middle justify-between">

          {isFresh? <SuggestionsBlock onSelect={(element)=>suggestionSelected(element)}/> : <ChatBlock messages={messages} chatEnd={chatEnd} isLoading={isLoading} chatName={chatName} />}

          <div className='h-1/6 bg-transparent flex flex-col items-center justify-center'>
            
            <div className='divinput relative w-3/4 h-9 my-3'>
              
              <input type='text' value={query} onKeyDown={handleEnter} onChange={e => queryUpdate(e.target.value)} placeholder="Enter your query"
              className='pl-4 pr-20 py-2 w-full h-full rounded-lg border hover:ring-1 active:ring-1 focus:ring-1 focus:ring-prpl hover:ring-prpl active:ring-prpl  outline-0 shadow-md font-wix font-thin placeholder-gray-400 text-black' />

              <div className="absolute inset-y-0 right-0 w-10 h-full bg-transparent   
                    flex items-center  
                    hover:text-gray-500 text-gray-400 active:text-secondary-500"> 

                  <button className="" type="submit" onClick={()=>sendQueryAction()}>
                        
                      <RiSendPlaneFill className='ml-1 w-5 h-5 active:animate-ping' />

                  </button>
                  
              </div> 
            </div>

            <p className='font-wix font-extralight text-xs text-gray-500'>StormBot may produce inaccurate information about people, places, or fact.  &nbsp;
             <a href="#" className='no-underline hover:underline text-prpl'>Privacy Notice.</a></p>

          </div>

        </div>
      </div>
      
     
    </div>
  )
}

export default RightSection

