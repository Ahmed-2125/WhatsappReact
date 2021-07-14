import { Avatar,IconButton } from '@material-ui/core'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import "./Sidebar.css";
import Chats from './Chats';
import { useState,useEffect } from 'react';
import datastorage from './firebase';
import Menulist from './Menulist'



export default function Sidebar() {
    // const [search,setSearch]=useState("");

 
    const[rooms,setrooms]=useState<Array<Object|any>>([]); 


    const createRoom =(e:any)=>{
        const roomName=prompt("create chat room ");
        if (roomName)
        {
    
    
             datastorage.collection("room").add({
                 name:roomName,
             });
        }
       }; 
    
       const status =()=>{
        alert("not available ");
       
       }; 

const profile=()=>{
    alert("Slidebar not avail yet")
}


   useEffect(()=>
    {
   datastorage.collection("room").onSnapshot((snapshot) => setrooms(
            snapshot.docs.map((doc) =>({
                id:doc.id,
                data:doc.data(),
            }))    
      )
      );
  
    },[]);


    
    
    return (
        
        <div className="sidebar">
             <div className="sidebar-header">  
           <IconButton onClick={profile}> 
                <Avatar/ > 
                </IconButton>
             <div className="sidebar-headerRight">
             
                 <IconButton>
                 <DonutLargeIcon onClick={status}/> 
                     </IconButton>
                     <IconButton >
                     <ChatIcon onClick={createRoom}/> 
                     </IconButton >
                  
                     <Menulist/>
                 

                 
                         
                
             </div>
            
        </div>
        <div className="sidebar-search">
            < div className="sidebar-searchContainer">
            <SearchOutlined/>
            <input placeholder="search or new chat" type="text"  /> 
             {/* {rooms.filter((name)=>{
                if(search=="")
                {
                    return name;
                }
                else if(name.first_name){
                    return name;
                }

            })
            
            
            .map(room=>
                ( <Chats key={room.id} id={room.id} name={room.data.name}/> ) => {
                    return (
                        <div className="user" id={room.id}>
                         {room.data.name}

                        </div>




                    );
                }
               
                )}   */}
            </div>
        </div>
       
        <div className="sidebar-chats">
            {rooms.map(room => (
               <Chats key={room.id} id={room.id} name={room.data.name}/> 
           )

           )} 

        </div>
        </div>

    );
}