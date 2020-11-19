import Contact from "./components/Contact";
import React from "react";
import './App.css';

// const ruby =  {
// name: "Ruby Sanchez",
// isOnline: true,
// avatar: "https://randomuser.me/api/portraits/women/88.jpg"
// };

// {/* <Contact avatar={avatar} name={name} online={isOnline} /> */}



function App() {
  return (
    <div className="App">
      <Contact 
      name= "Ruby Sanchez" 
      avatar = "https://randomuser.me/api/portraits/women/88.jpg" alt="avatar picture"
      online = {true}
      />

<Contact 
      name= "Vicki Cole" 
      avatar = "https://randomuser.me/api/portraits/women/92.jpg" alt="avatar picture"
      online = {false}
      />

<Contact 
      name= "Vincent Barnes" 
      avatar = "https://randomuser.me/api/portraits/men/23.jpg" alt="avatar picture"
      online = {true}
      />
     
    </div>
  );
}

export default App;