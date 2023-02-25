import React from 'react';


const InactiveFriends = (props)=>{
        const friendList = props.newFriend.map((friend, index)=>{
       return (
      <>
         <li key={index}>{friend}</li>
        <button onClick={()=>props.activate(friend)}>Activate</button>
      </>    
       )
    })


    return(
            <>
            <h1>Inactive Friends</h1>
           <ul>{friendList}</ul> 
            </>
    )
}

export default InactiveFriends