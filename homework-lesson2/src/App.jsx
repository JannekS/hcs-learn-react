import { useState, useEffect } from "react";
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";

import AppSidebar from "./AppSidebar";
import ErrorMessage from "./ErrorMessage";
import HomeSection from "./HomeSection";
import Inbox from "./Inbox";
import { Route } from "wouter";

function App() {
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("Donald Duck");

  let unreadMsgCount = messages.filter((msg) => msg.status === "unread").length;

  const pageTitle = "Mega Messenger";
  const copyRight = { name: "Tic Developer", year: 2023 };
  const sideMenuItems = [
    { name: "Home", url: "/" },
    { name: "Inbox", url: "/inbox" },
    { name: "Conversations", url: "/" },
    { name: "Deleted", url: "/" },
    { name: "About Me", url: "/" },
  ];

  useEffect(() => {
    getMessages();
  }, []);

  async function getMessages() {
    const msgRes = await fetch("/messages.json");
    const msgData = await msgRes.json();
    setMessages(msgData);
  }

  function updateMessage(newMsg) {
    const updateMsgIdx = messages.findIndex((msg) => msg.id === newMsg.id);
    const updatedMessages = [...messages];
    updatedMessages[updateMsgIdx] = newMsg;
    setMessages(updatedMessages);
  }

  return (
    <main className="flex flex-col w-full h-full">
      <AppHeader
        username={username}
        headerTitle={pageTitle}
        unreadMsgCount={unreadMsgCount}
      />
      <div className="flex h-full">
        <AppSidebar
          menuItems={sideMenuItems}
          username={username}
          changeUsername={setUsername}
        />

        {unreadMsgCount > -1 ? (
          <div className="flex flex-col gap-4 px-6 w-full overflow-auto">
            <Route path="/">
              <HomeSection username={username} messageCount={unreadMsgCount} />
            </Route>
            <Route path="/inbox">
              <Inbox inboxMessages={messages} updateMessage={updateMessage} />
            </Route>
          </div>
        ) : (
          <div className="h-full w-full flex flex-col items-center justify-center">
            <ErrorMessage errMsg="Couldn't find any messages. Please try again later." />
          </div>
        )}
      </div>
      <AppFooter copyRName={copyRight.name} copyRYear={copyRight.year} />
    </main>
  );
}

export default App;
