// import { useState } from 'react'
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";
import AppSidebar from "./AppSidebar";
import HomeWindow from "./HomeWindow";

function App() {
  let unreadMsgCount = 0;
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
    <>
      <main className="flex flex-col w-full h-full">
        <AppHeader pageTitle={pageTitle} messageCount={unreadMsgCount} />
        <div className="flex h-full">
          <AppSidebar menuItems={sideMenuItems} />
          <HomeWindow username="Donald Duck" messageCount={unreadMsgCount} />
        </div>
        <AppFooter copyRName={copyRight.name} copyRYear={copyRight.year} />
      </main>
    </>
  );
}

export default App;
