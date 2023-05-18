// import { useState } from 'react'
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";
import AppSidebar from "./AppSidebar";

function App() {
  return (
    <>
      <main className="flex flex-col w-full h-full">
        <AppHeader />
        <div className="flex h-full">
          <AppSidebar />
          <article className="p-4">
            Hello Visitor,
            <br />
            <br />
            you have <strong>6</strong> unread messages.
            <br />
            <br />
            Please go to your inbox to read them.
          </article>
        </div>
        <AppFooter />
      </main>
    </>
  );
}

export default App;
