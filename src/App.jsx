// import { useState } from "react";
import "./App.css";
import Greeter from "./Greeter";
import Paragraphs from "./Paragraphs";
import AppButton from "./AppButton";
import LogoLink from "./LogoLink";
import PersonProfile from "./PersonProfile";

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
        <AppButton
          key="1"
          type="button"
          name="Alice"
          message="Welcome to Wonderland!"
        />
        <AppButton
          key="2"
          type="sumbit"
          name="Bob"
          message="You are legendary!"
        />
        <AppButton
          key="3"
          type="button"
          name="John"
          message="Go on like this!"
        />
        <AppButton
          key="4"
          type="button"
          name="Celia"
          message="La vida es un carnaval!"
        />
      </div>
      <div>
        <PersonProfile name="Alice" age="24">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
          fugit non veritatis eaque, fuga doloribus magnam quibusdam magni
          impedit officia neque laborum eveniet reprehenderit beatae eum quo,
          quisquam aut sit? Molestiae fuga nobis debitis, voluptatibus labore
          sapiente vero omnis est, laboriosam ullam cumque at beatae earum ipsa!
          Sequi pariatur, beatae aut consequatur natus asperiores perspiciatis,
          aperiam blanditiis fugiat, error quos. Sequi placeat at doloremque
          vitae sapiente officia dolores dicta voluptatum molestias velit esse
          corporis dignissimos minus cumque id nesciunt dolore eum repudiandae
          libero magni sunt, obcaecati quaerat maxime. Explicabo, aliquid?
        </PersonProfile>
        <PersonProfile name="Bob" age="48">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
          fugit non veritatis eaque, fuga doloribus magnam quibusdam magni
          impedit officia neque laborum eveniet reprehenderit beatae eum quo,
          quisquam aut sit? Molestiae fuga nobis debitis, voluptatibus labore
          sapiente vero omnis est, laboriosam ullam cumque at beatae earum ipsa!
          Sequi pariatur, beatae aut consequatur natus asperiores perspiciatis,
          aperiam blanditiis fugiat, error quos. Sequi placeat at doloremque
          vitae sapiente officia dolores dicta voluptatum molestias velit esse
          corporis dignissimos minus cumque id nesciunt dolore eum repudiandae
          libero magni sunt, obcaecati quaerat maxime. Explicabo, aliquid?
        </PersonProfile>
        <PersonProfile name="John" age="39">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
          fugit non veritatis eaque, fuga doloribus magnam quibusdam magni
          impedit officia neque laborum eveniet reprehenderit beatae eum quo,
          quisquam aut sit? Molestiae fuga nobis debitis, voluptatibus labore
          sapiente vero omnis est, laboriosam ullam cumque at beatae earum ipsa!
          Sequi pariatur, beatae aut consequatur natus asperiores perspiciatis,
          aperiam blanditiis fugiat, error quos. Sequi placeat at doloremque
          vitae sapiente officia dolores dicta voluptatum molestias velit esse
          corporis dignissimos minus cumque id nesciunt dolore eum repudiandae
          libero magni sunt, obcaecati quaerat maxime. Explicabo, aliquid?
        </PersonProfile>
        <PersonProfile name="Celia" age="50">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
          fugit non veritatis eaque, fuga doloribus magnam quibusdam magni
          impedit officia neque laborum eveniet reprehenderit beatae eum quo,
          quisquam aut sit? Molestiae fuga nobis debitis, voluptatibus labore
          sapiente vero omnis est, laboriosam ullam cumque at beatae earum ipsa!
          Sequi pariatur, beatae aut consequatur natus asperiores perspiciatis,
          aperiam blanditiis fugiat, error quos. Sequi placeat at doloremque
          vitae sapiente officia dolores dicta voluptatum molestias velit esse
          corporis dignissimos minus cumque id nesciunt dolore eum repudiandae
          libero magni sunt, obcaecati quaerat maxime. Explicabo, aliquid?
        </PersonProfile>
      </div>
    </>
  );
}

export default App;
