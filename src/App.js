import { useEffect, useState } from 'react';
import './App.css';
import Friend from './Components/Friend/Friend';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [friends,setfriends] = useState([]);
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(data => {
      setfriends(data)
    })
  })
  return (
    <div className="App">
      <h2>Total friends: {friends.length}</h2>
      {
        friends.map(friend => <Friend friend={friend}></Friend>)
      }
    </div>
  );
}

export default App;
