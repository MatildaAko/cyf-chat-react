import React from 'react';
import AllMessages from './AllMessages';
import './App.css';
import Header from './Header';
import InputForm from "./InputForm"

function App() {
  const urlToFetch = "https://matildaako-chat-server.glitch.me";
  return (
    <div className="App">
      <Header />
      <InputForm urlToFetch={urlToFetch} />
      <AllMessages urlToFetch={urlToFetch} />
    </div>
  );
}

export default App;
