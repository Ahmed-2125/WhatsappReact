import React from 'react'
import {useState} from 'react';

export default function Chatroom()

{

    const [input,setInput]=useState("");
    const createRoom=(e)=>
    {
       e.preventDefault();
        console.log("you typed>> ", input);
    }

     return (
        <div className="room-box">
             
            <div className="room-text">
                 
                 <h5>
                     Create Chat Room
                 </h5>
            </div>
            <div className="room-input">
                <form>
                <input  type="text" value ={input} onChange={e=>setInput(e.target.value)}   placeholder="Type Here" />
                <button type="submit" onClick={createRoom}/>
                </form>
            </div>
        </div>



    )
}


