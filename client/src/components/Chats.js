
import { Avatar } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom';
import "./ Chats.css"
import datastorage from './firebase';
export default function Chats({id ,name, addNewChat}) {

   const createRoom =()=>{
    const roomName=prompt("create chat room by name");
    if (roomName)
    {

        //database stuff
        datastorage.collection("room").add({
            name:roomName,
        });
    }
   };
    
    return  ! addNewChat ? (
        <Link to={`/rooms/${id}`}>
        <div className="sidebar-avatar">
         <Avatar/>
           <div className="chat-info" >
              <h3>{name}</h3>


           </div>
           </div>
           </Link>
    ) : (
        <div onClick={createRoom}
        className="sidebar-avatar" >
            <h3>Add New Chat</h3>
        </div>

    )
    } ;
   



