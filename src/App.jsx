// import { useState } from "react";
import "./App.css";
import Greeter from "./Greeter";
import Paragraphs from "./Paragraphs";
import AppButton from "./AppButton";
import LogoLink from "./LogoLink";

function App() {
  const logos = [
    {
      src: "./react.svg",
      destUrl: "https://react.dev",
      alt: "React Logo",
    },
    {
      src: "./vite.svg",
      destUrl: "https://vitejs.dev",
      alt: "Vite Logo",
    },
    {
      src: "./github.svg",
      destUrl: "https://github.com/JannekS",
      alt: "Github Logo",
    },
  ];

  return (
    <>
      <div>
        {logos.map((logo, index) => (
          <LogoLink
            url={logo.destUrl}
            imgSrc={logo.src}
            alt={logo.alt}
            key={index}
          />
        ))}
      </div>
      <Greeter />
      <Paragraphs />
      <div className="card">
        <AppButton value={"Click Me"} type={"button"} />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
