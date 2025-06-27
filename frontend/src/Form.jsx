import React, { useEffect, useState } from "react";

const Form = () => {

  const [Username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [userAllData, setUserAllData] = useState([]);

function handleForm(e) {
  e.preventDefault();
  const formdata = { Username, password };

  fetch("/api/user", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formdata),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

useEffect(() => {
  fetch("/api/userAlldata")
    .then((res)=>{
      return res.json();
    })
    .then((result)=>{
      console.log(result);
      setUserAllData(result.data)
    })
}, []);

  return ( <div>
    <h1>Form 📜</h1>
    <form action="" onSubmit={handleForm}>
      
      <label htmlFor="">UserName</label>
      <input
        type="text"
        name="username"
        value={Username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="">Password</label>
      <input
        type=""
        name="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" value="Submit" />
    </form>
    {
      userAllData.map((items) => (
        <ul key={items._id}>
          <li>{items.user}</li>
        </ul>
      ))
    }
  </div>);
}
export default Form;