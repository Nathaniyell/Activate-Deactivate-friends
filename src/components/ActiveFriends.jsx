import React from 'react';
// import PropTypes from 'prop-types';


const ActiveFriends = (props)=>{
      const friendList = props.activeList.map((friend, index)=>{
        return (
       <>
          <li key={index}>{friend}</li>
         <button onClick={()=> props.deactivate(friend)}>Deactivate</button>
       </>    
        );
     });
 
 
     return(
             <>
             <h1>Active Friends</h1>
            <ul>{friendList}</ul> 
             </>
     );
};
// ActiveFriends.propTypes ={
//   activeList: PropTypes.arrayOf(PropTypes.string).isRequired,
//   deactivate: PropTypes.func.isRequired,
// };

export default ActiveFriends;