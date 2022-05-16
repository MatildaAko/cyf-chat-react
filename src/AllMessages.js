import React, { useState } from "react";

const AllMessages = ({ urlToFetch }) => {
  const [getMessages, setGetMessages] = useState({});
  const seeMessages = (e) => {
    console.log({urlToFetch})
    e.preventDefault();
    fetch(`${urlToFetch}/messages`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setGetMessages(data);
        console.log(data);
      });
  };
  return (
    <div>
      <button onClick={seeMessages}>See All Messages</button>
      {getMessages.length > 0 && (
        <div>
          <p>
            You have {getMessages.length} {getMessages.length === 1 ? "Message" : "Messages"}
          </p>
          {getMessages.map((message, index) => {
            return (
              <table key={index}>
                <thead>
                  <tr>
                    <th>Message {index + 1}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Message ID</td>
                    <td>{message.id}</td>
                  </tr>
                  <tr>
                    <td>Sender</td>
                    <td>{message.from}</td>
                  </tr>
                  <tr>
                    <td>Message</td>
                    <td>{message.text}</td>
                  </tr>
                </tbody>
              </table>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default AllMessages;
