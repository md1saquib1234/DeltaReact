import { useState } from "react";

export default function Form() {
  let [fullName, setFullName] = useState("");
  let [username, setUsername] = useState("");

  let handleNameChange = (event) => {
    setFullName(event.target.value);

    let handleUsernanme = (event) => {
      setUsername(event.target.value);
    }
  }
  return (
    <form>
       <label htmlFor="username">Full Name</label>
      <input type="text" placeholder="enter full name" value={fullName} onChange={handleNameChange} id="username"/>

      <label htmlFor="username">userName</label>
      <input type="text" placeholder="enter full name" value={username} onChange={handleUsername} id="username"/>
      <button>Submit</button>


      <button>Submit</button>
    </form>
    
  );
}