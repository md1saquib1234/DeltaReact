import { useState } from "react";

export default function Form() {
  let [formData, setFormData] = useState({
    fullName: "",
    username: ""
  });

  // let handleNameChange = (event) => {
  //   setFullName(event.target.value);
  // };

  //   let handleUsername = (event) => {
  //     setUsername(event.target.value);
  //   };

  let handleInputChange = (event) => {  
    setFormData((currData) => {
      return {...currData, [event.target.name] : event.target.value};
    });

  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      fullName: "",
      username: "",
      password: "",
    });
  };
  

  return (
    <form onSubmit={handleSubmit}>
       <label htmlFor="username">Full Name</label>
      <input type="text" placeholder="enter full name" value={formData.fullName}  id="fullName" name="fullName" onChange={handleInputChange}/>
      <br /><br />
      <label htmlFor="username">userName</label>
      <input type="text" placeholder="enter full name" value={formData.username} id="username" name="username" onChange={handleInputChange}/>
      <br /><br />
      <label htmlFor="password">Password</label>
      <input type="password" placeholder="enter password" value={formData.password} id="password" name="password" onChange={handleInputChange}/>
      <button>Submit</button>
    </form>
    
  );
}