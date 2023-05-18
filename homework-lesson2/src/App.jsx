// import { useState } from 'react'

import "./App.css";
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";

function App() {
  return (
    <>
      <main className="flex flex-col w-full h-full">
        <AppHeader />
        <div className="flex h-full">
          <aside className="w-1/4 h-full border-slate-400 border-r p-4">
            <ul className="flex flex-col gap-2 font-semibold">
              <li>
                <a className="text-slate-700 hover:text-slate-900" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="text-slate-700 hover:text-slate-900" href="#">
                  About me
                </a>
              </li>
              <li>
                <a className="text-slate-700 hover:text-slate-900" href="#">
                  Inbox
                </a>
              </li>
            </ul>
          </aside>
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
