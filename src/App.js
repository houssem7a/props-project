import React from "react";
import Profile from "./profile/profile";
import userImg from "./images/houssem.jpg";

import "./styles.css";

export default function App() {
  function handleName(name) {
    alert(`Hello my name is ${name}`);
  }

  return (
    <div className="App">
      <Profile
        fullName="Houssem Said"
        bio="My name is Houssem Said and i'm the best web developer"
        profession="Full-Stack js Developer"
        handleName={handleName}
      >
        <img
          style={{ borderRadius: "100%", width: "200px", height: "200px" }}
          src={userImg}
          alt="avatar"
        />
      </Profile>
    </div>
  );
}
