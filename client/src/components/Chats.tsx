import { Avatar} from '@material-ui/core'
import { Link } from 'react-router-dom';
import "./ Chats.css"




export default function Chats({name}:any ,{id}:any) 
{

    
    return  (
        <Link to={`/rooms/${id}`}>
        <div className="sidebar-avatar">
            <Avatar/>
           <div className="chat-info" >
              {name}
           </div>
         </div>
            </Link>
    ) 

    
    } ;
   



