import React from "react";
import { useState, useEffect } from "react";

// Components
import News from "./components/News";
import Button from "./components/Button/index";
import Navbar from "./components/Navbar";
import Home from "./components/Home/";
import Chat from "./components/Chat";

// Styles
import { GlobalStyle } from "./GlobalStyle";

function App() {
  const [isHome, setIsHome] = useState(true);
  const [isNews, setIsNews] = useState(false);
  const [isChat, setIsChat] = useState(false);

  const goNews = (e) => {
    console.log(isNews);
    setIsNews(true);
    setIsHome(false);
    setIsChat(false);
  };

  const goHome = (e) => {
    console.log(isHome);
    setIsNews(false);
    setIsHome(true);
    setIsChat(false);
  };

  const goChat = (e) => {
    console.log(isChat);
    setIsNews(false);
    setIsHome(false);
    setIsChat(true);
  };

  const handleGame = (e) => {
    setIsNews(false);
    setIsHome(false);
    setIsChat(false);
  };

  document.title = "Retro Retreat";

  return (
    <div className="App">
      <Navbar
        buttons={[
          {
            text: "Home",
            callback: goHome,
          },
          {
            text: "News",
            callback: goNews,
          },
          {
            text: "Chat",
            callback: goChat,
          },
        ]}
      />
      {isNews && <News />}
      {isHome && <Home />}
      {isChat && <Chat callback={handleGame} />}
      <GlobalStyle />
    </div>
  );
}

export default App;
