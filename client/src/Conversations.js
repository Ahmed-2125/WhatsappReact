import { Avatar,IconButton } from '@material-ui/core'
import MoreVert from '@material-ui/icons/MoreVert'
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




export default function Conversations() 
{
 
    const [message,setmessage]=useState([]);
     const {roomId} =useParams();
     const [roomName,setRoomName]=useState("");
     const [input,setInput]=useState("");

    //message ka useeefect
    //room ka useeffect 
    useEffect(() => {
    if(roomId) 
    {
        datastorage.collection("room")  
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomName
        (snapshot.data().name));

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

    
    const sendMessage=(e)=>
    {

        e.preventDefault();
        
        console.log(" typed>> ", input);
        datastorage.collection("room").doc(roomId).collection
        ("messages").add({
            message: input,
            name:'Ahmed',
            time: firebase.firestore.FieldValue.serverTimestamp()
        });
       
       
        setInput("");
    }

    return (

        <div className="convoright">
            <div className="convoright-header">
                <Avatar/>
                <div className="convoright-info">
                    <h5>{roomName}</h5>
                    <p>last seen at ...</p>
                </div>
                <div className="convoright-headerright">
                    <IconButton>

                    <SearchOutlined/>
                        </IconButton>
                        <IconButton>
                        < MoreVert/>
                    </IconButton>

                </div>
                </div> 
                <div className="convoright-body">
                    {message.map((message) => (

                    
                <p className={`convoright-message ${true && 'convoright-reciever'}`}>
                <span className="convoright-name">
                {message.name}</span>

                {message.message}

                <span className="convoright-time"> 
                {new Date(message.time?.toDate()).toUTCString()}
                </span>
                </p>
                  
                    ))}
                </div>
                <div className="convoright-body">
                 
                 
                </div>
                <div className="convoright-footer">
                    <EmojiEmotionsIcon/>
                    <AttachFileIcon/>

                
                    <form>
                            <input value ={input} onChange={e=>setInput(e.target.value)}   placeholder="Type Message Here" type="text" />
                            <button type="submit" onClick={sendMessage}>
                             send a message
                            </button>


                    </form>
                    <MicNoneTwoToneIcon/>
                </div>


        </div>
    )
}


