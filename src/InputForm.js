import React, { useState } from "react";
// import Button from './Button'

const InputForm = ({urlToFetch}) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const sendMessage = async () => {
    console.log({urlToFetch})
    const res = await fetch(`${urlToFetch}/messages`, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ from: name, text: message }),
    });
    const data = await res.json();
    console.log(data);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    await sendMessage();
  };

  return (
    <form>
      <label>
        Name:
        <input type="text" value={name} name="from" onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Message:
        <textarea value={message} name="text" onChange={(e) => setMessage(e.target.value)} />
      </label>
      <br />
      <button onClick={handleClick}>Send</button>
    </form>
  );
};

export default InputForm;
