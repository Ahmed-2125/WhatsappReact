import { Avatar,IconButton } from '@material-ui/core'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import "./Sidebar.css";
import Chats from './Chats';
import { useState,useEffect } from 'react';
import datastorage from './firebase';



export default function Sidebar() {
    const[rooms,setrooms]=useState([]); 
    
   useEffect(()=>
    {
      const unsubscribe= datastorage.collection("room").onSnapshot((snapshot) => setrooms(
            snapshot.docs.map((doc) =>({
                id:doc.id,
                data:doc.data(),
            }))    
      )
      );
      return ()=>{unsubscribe();};
    },[]);

    
      const createChat=()=>{
        const roomName=prompt("create chat room by name");
        if (roomName)
        {

            //database stuff
        }
    };
    
    
    
    
    return (
        
        <div className="sidebar">
             <div className="sidebar-header">  
             <Avatar/>
             <div className="sidebar-headerRight">
                 <IconButton>
                 <DonutLargeIcon/>
                     </IconButton>
                     <IconButton onClick={createChat}>
                     <ChatIcon/>
                     </IconButton >
                     <IconButton  >
                     <MoreVertIcon/>
                     </IconButton>

                 
                         
                
             </div>
            
        </div>
        <div className="sidebar-search">
            < div className="sidebar-searchContainer">
            <SearchOutlined/>
            <input placeholder="search or new chat" type="text"/> 
            </div>
        </div>
       
        <div className="sidebar-chats">
            <Chats addNewChat/>
           {rooms.map(room => (
               <Chats key={room.id} id={room.id} name={room.data.name}/> 
           )

           )}

        </div>
        </div>

    );
}