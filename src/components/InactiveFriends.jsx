import React from 'react';


const ActiveFriends = (props)=>{
    const friendList = props.activeList.map((friend, index)=>{
        return (
       <>
          <li key={index}>{friend}</li>
         <button onClick={()=> props.deactivate(friend)}>Deactivate</button>
       </>    
        )
     })
 
 
     return(
             <>
             <h1>Active Friends</h1>
            <ul>{friendList}</ul> 
             </>
     )
}

export default ActiveFriends