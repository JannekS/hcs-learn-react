import { useState } from "react";
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";

import AppSidebar from "./AppSidebar";
import ErrorMessage from "./ErrorMessage";
import HomeSection from "./HomeSection";

import messageArray from "./messages.js";
import Inbox from "./Inbox";

function App() {
  const [messages, setMessages] = useState(messageArray);

  const [unreadMessages, setUnreadMessages] = useState(messages);

  const [unreadMsgCount, setUnreadMesageCount] = useState(
    unreadMessages.length
  );

  const [username, setUsername] = useState("Donald Duck");

  function changeMessageCount(addValue) {
    if (unreadMsgCount + addValue > -1) {
      setUnreadMesageCount(unreadMsgCount + addValue);
    }
  }

  function updateMessage(newMsg) {
    const updateMsgIdx = messages.findIndex((msg) => msg.id === newMsg.id);
    const updatedMessages = [...messages];
    updatedMessages[updateMsgIdx] = newMsg;
    setMessages(updatedMessages);
  }

  const pageTitle = "Mega Messenger";
  const copyRight = { name: "Tic Developer", year: 2023 };
  const sideMenuItems = [
    { name: "Home", url: "#" },
    { name: "Inbox", url: "#" },
    { name: "Conversations", url: "#" },
    { name: "Deleted", url: "#" },
    { name: "About Me", url: "#" },
  ];

  return (
    <main className="flex flex-col w-full h-full">
      <AppHeader
        username={username}
        headerTitle={pageTitle}
        unreadMsgCount={unreadMsgCount}
      ></AppHeader>
      <div className="flex h-full">
        <AppSidebar
          menuItems={sideMenuItems}
          onChangeMessageCount={changeMessageCount}
          unreadMsgCount={unreadMsgCount}
          username={username}
          changeUsername={setUsername}
        />
        {unreadMsgCount > -1 ? (
          <div className="flex flex-col gap-4 px-6 w-full overflow-auto">
            <HomeSection username={username} messageCount={unreadMsgCount} />
            <Inbox inboxMessages={messages} updateMessage={updateMessage} />
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
