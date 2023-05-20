// import { useState } from 'react'
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";
import AppSidebar from "./AppSidebar";
import HomeWindow from "./HomeWindow";

function App() {
  let unreadMsgCount = 8;
  const pageTitle = "Mega Messenger";
  return (
    <>
      <main className="flex flex-col w-full h-full">
        <AppHeader pageTitle={pageTitle} messageCount={unreadMsgCount} />
        <div className="flex h-full">
          <AppSidebar />
          <HomeWindow username="Donald Duck" messageCount={unreadMsgCount} />
        </div>
        <AppFooter />
      </main>
    </>
  );
}

export default App;
