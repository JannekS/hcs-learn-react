import { useState } from "react";
import Message from "./Message";

function Inbox({ inboxMessages, updateMessage }) {
  const [showMessages, setShowMessages] = useState("all");

  function handleSelectChange(event) {
    setShowMessages(event.target.value);
  }

  let displayedMessages =
    showMessages === "unread"
      ? inboxMessages.filter((msg) => msg.status === "unread")
      : [...inboxMessages];

  return (
    <div className="border-slate-400 border-t py-4">
      <div
        id="inbox-header"
        className="flex flex-row justify-between items-center mb-4"
      >
        <h2 className="text-lg font-bold">Inbox</h2>
        <div className="text-sm">
          <label className="mx-2" htmlFor="msg-select">
            Show
          </label>
          <select // TODO: Check out npm package react-select
            className="pl-1 bg-indigo-100 rounded-sm"
            name="msg-select"
            id="msg-select"
            onChange={handleSelectChange}
          >
            <option value="all">all messages</option>
            <option value="unread">unread messages</option>
          </select>
        </div>
      </div>

      <ul className="flex flex-col gap-3 w-full h-96 overflow-auto">
        {displayedMessages.map((msg) => (
          <Message
            author={msg.author}
            text={msg.text}
            status={msg.status}
            key={msg.id}
            id={msg.id}
            markAsRead={() => {
              updateMessage({ ...msg, status: "read" });
            }}
          />
        ))}
      </ul>
    </div>
  );
}

export default Inbox;
