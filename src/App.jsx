import './App.css'
import React, { useState } from "react";
import InactiveFriends from './components/InactiveFriends';
import ActiveFriends from './components/ActiveFriends';

function App() {
const [data, setData] = useState({
  input: '',
  inActivefriends: [],
  isActive: false,
  activeFriends: ['King', "John"]
});


const handleChange = (e)=>{
  setData((prevState)=>{
   return{
    ...prevState,
    input: e.target.value
   }
  })
}

const handleAddFriend=()=>{
  if(data.input === ""){
    return
  }
  setData((prevState)=>{
    return{
     ...prevState,
     inActivefriends: prevState.inActivefriends.concat([prevState.input]),
  
    }
   })
}
const clearAllFriends = ()=>{
  setData((prevState)=>{
  return{
    ...prevState,
    inActivefriends: prevState.inActivefriends.splice(0, -1),
    activeFriends: prevState.activeFriends.splice(0, -1)
  }
  })
}
const handleFormSubmit = (e)=>{
  e.preventDefault()
  console.log(data.inActivefriends)
  setData(prevState=>{
    return{
      ...prevState,
     input: ""
    }
  })
}
const ActivateFriend = (name)=>{
  setData((prevState)=>{
    return{
      ...prevState,
      isActive: !prevState.isActive,
      activeFriends: prevState.activeFriends.concat([name]),
      inActivefriends: prevState.inActivefriends.filter((friend)=>friend !== name)
    }
  })
}
const DeactivateFriend = (name)=>{
  setData((prevState)=>{
    return{
      ...prevState,
      isActive: !prevState.isActive,
      activeFriends: prevState.activeFriends.filter((friend)=>friend!== name),
      inActivefriends: prevState.inActivefriends.concat([name])
    }
  })
}
  return(
    <>
    <form action="" onSubmit={handleFormSubmit}>
      <input type="text" name="friend" id='friend' placeholder="Add Friend" value={data.input} onChange={handleChange} />
      <button onClick={handleAddFriend}>Submit</button><br />
      <button type="button" onClick={clearAllFriends}>Clear All Friends</button>
    </form>

      <ActiveFriends  activeList={data.activeFriends} deactivate={DeactivateFriend} />
      <InactiveFriends newFriend={data.inActivefriends} activate={ActivateFriend} />
    </>
  )
}

export default App;

