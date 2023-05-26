import { useState } from "react";
import AppButton from "./AppButton";

function Message({ author, text, status }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-4 rounded-lg bg-indigo-50">
      <h3 className="text-md text-indigo-700 font-bold">{author}:</h3>
      <p className={!isOpen && "line-clamp-2"}>{text}</p>
      <div className="flex flex-row space-x-2">
        <div className="flex-1"></div>
        {/* {isOpen && (
          <AppButton onClick={() => } text="mark as read" />
        )} */}
        <AppButton
          onClick={() => setIsOpen(!isOpen)}
          text={isOpen ? "Close" : "Read message"}
        />
      </div>
    </div>
  );
}

export default Message;
