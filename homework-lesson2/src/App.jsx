import { useState } from "react";
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";
import AppLogo from "./AppLogo";
import AppSidebar from "./AppSidebar";
import ErrorMessage from "./ErrorMessage";
import HomeSection from "./HomeSection";
import MsgNotificationIcon from "./MsgNotifcationIcon";
import messageArray from "./messages.js";

function App() {
  const [messages, setMessages] = useState(messageArray);

  const [unreadMessages, setUnreadMessages] = useState(messages);

  const [unreadMsgCount, setUnreadMesageCount] = useState(
    unreadMessages.length
  );
  function changeMessageCount(addValue) {
    if (unreadMsgCount + addValue > -1) {
      setUnreadMesageCount(unreadMsgCount + addValue);
    }
  }
  let userName = "Donald Duck";
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
      <AppHeader>
        <AppLogo title={pageTitle} imgSrc="/bullhorn-solid-indigo.svg" />
        <MsgNotificationIcon messageCount={unreadMsgCount} />
      </AppHeader>
      <div className="flex h-full">
        <AppSidebar
          menuItems={sideMenuItems}
          onChangeMessageCount={changeMessageCount}
          unreadMsgCount={unreadMsgCount}
        />
        {unreadMsgCount > -1 ? (
          <HomeSection username={userName} messageCount={unreadMsgCount} />
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
