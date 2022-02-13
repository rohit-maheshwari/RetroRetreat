import React, { useEffect, useRef, useState } from "react";
import "./Chat.styles.css";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyC82eEuOxwkrXiVFeksY07r4kfSDwhbSNs",
  authDomain: "chatbox-5c9df.firebaseapp.com",
  projectId: "chatbox-5c9df",
  storageBucket: "chatbox-5c9df.appspot.com",
  messagingSenderId: "687152764699",
  appId: "1:687152764699:web:f37fc4151d65ad51d165be",
  measurementId: "G-179N0TBM6X",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function Chat({ callback }) {
  const [user] = useAuthState(auth);
  return (
    <div className="chat-app">
      <header className="chat-app-header">
        <h1>Chat Room</h1>
        <SignOut />
      </header>
      <section>{user ? <ChatRoom callback2={callback} /> : <SignIn />}</section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <>
      <p className="login-title">Login Page:</p>
      <button className="sign-in" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
      <p className="intro-text">What does the world need to know?</p>
    </>
  );
}

function SignOut() {
  return (
    auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
}

function ChatRoom({ callback2 }) {
  const dummy = useRef();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);
  const [messages] = useCollectionData(query, { idField: "id" });
  const [currentUser, setCurrentUser] = useState();

  const [formValue, setFormValue] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid } = auth.currentUser;

    if (formValue.toLowerCase() == "mercy") {
      window.open("https://ruchir.itch.io/pong-hacktams", "_blank");
    } else {
      console.log("sending message to firebase");
      await messagesRef.add({
        text: currentUser
          ? currentUser.displayName + ": " + formValue
          : formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
      });
    }

    setFormValue("");

    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id = "chat-div">
      <main>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

        <span ref={dummy}></span>
      </main>

      <form onSubmit={sendMessage}>
        <input
          placeholder="Type your text here..."
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
        />

        <button type="submit" disabled={!formValue}>
          Send
        </button>
      </form>
    </div>
  );
}

function ChatMessage(props) {
  const { text, uid } = props.message;
  const messageClass = uid == auth.currentUser.uid ? "sent" : "received";

  return <div className={`message ${messageClass}`}>{<p>{text}</p>}</div>;
}

export default Chat;
