// import { useState } from 'react'
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";
import AppLogo from "./AppLogo";
import AppSidebar from "./AppSidebar";
import HomeSection from "./HomeSection";
import MsgNotificationIcon from "./MsgNotifcationIcon";

function App() {
  let unreadMsgCount = 20;
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
        <AppSidebar menuItems={sideMenuItems} />
        <HomeSection username={userName} messageCount={unreadMsgCount} />;
      </div>
      <AppFooter copyRName={copyRight.name} copyRYear={copyRight.year} />
    </main>
  );
}

export default App;
