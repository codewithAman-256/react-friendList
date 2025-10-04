import React, { useState } from "react";
import "./App.css";
function App() {
  const [friends, setFriends] = useState(["Aman", "Umer", "Arbaaz"]);

  const [newFriend, setNewFriend] = useState("");

  return (
    <div id="App">
      <h1>👥 Friend List</h1>
      <input
        type="text"
        value={newFriend}
        onChange={(e) => setNewFriend(e.target.value)}
        placeholder="Enter New Friend"
      />
      <button onClick={() =>{
        if(newFriend.trim() !== ""){
          setFriends([...friends,newFriend]);
          setNewFriend("");// clears input
        }
      }
        }>
        Add Friend
      </button>
      <ul>
        {friends.map((friend, index) => (
          <li key={index}>{friend}
          
          <button onClick={()=>{setFriends(friends.filter((_,i)=> i !== index))}} >X</button>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
