import { Avatar,IconButton } from '@material-ui/core'
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import React from 'react'
import MicNoneTwoToneIcon from '@material-ui/icons/MicNoneTwoTone';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import "./Conversations.css"
import {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import datastorage from './components/firebase';
import firebase from 'firebase';
import Menulist from './components/Menulist';




export default function Conversations() 
{
 
    const [message,setmessage]=useState<Array<Object|undefined>>([]);
     const {roomId}:any=useParams();
     const [roomName,setRoomName]=useState("");
     const [input,setInput]=useState("");

 
    useEffect(() => {
    if(roomId) 
    {
        datastorage.collection("room")  
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomName
        (snapshot.data.name));

            datastorage.collection("room")
            .doc(roomId)
            .collection('messages')
            .orderBy('time','asc')
            .onSnapshot((snapshot) => 
            setmessage(snapshot.docs.map((doc)=>
            doc.data()))
            );
            
        }
         },[roomId]);

    
    const sendMessage=(e:any)=>
    {

        e.preventDefault();
        
        console.log(" cheking my input here>> ", input);
        datastorage.collection("room").doc(roomId).collection
        ("messages").add({
            message: input,
            name:roomName,
            time: firebase.firestore.FieldValue.serverTimestamp()
        });
       
       
        setInput(""); //hm set krte taake click ke baad button input clear ho jaye 
    }

    return (

        <div className="convoright">

            <div className="convoright-header">
               <IconButton>  <Avatar/> </IconButton>
                <div className="convoright-info">
                    <h5>{roomName}</h5>
                   
                </div>
                <div className="convoright-headerright">
                    <IconButton>

                    <SearchOutlined/>
                        </IconButton>
                
                     <Menulist/>
           

                </div>
                </div>
                <div className="convoright-body"> 
              
                    
                    {message.map((message:any) => (

                    
                <p className={`convoright-message ${true && 'convoright-reciever'}`}>
                    
                <span className="convoright-name">
                {message.name}
                </span>

                {message.message}

                </p>
                
                  
                    ))}
                  
                </div>
           
                 
                 
             
                <div className="convoright-footer">
                   <IconButton> <EmojiEmotionsIcon/> </IconButton>
                   <IconButton> <AttachFileIcon/> </IconButton>

                
                    <form>
                            <input value ={input} onChange={e=>setInput(e.target.value)}   placeholder="Type Message Here" type="text" />
                            <button type="submit" onClick={sendMessage}>
                             send a message
                            </button>


                    </form>
                    <IconButton>        <MicNoneTwoToneIcon/> </IconButton>
                </div>


        </div>
    )
}


