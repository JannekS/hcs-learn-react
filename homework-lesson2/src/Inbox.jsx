import Message from "./Message";

function Inbox({ unreadMessages }) {
  return (
    <div className="border-slate-400 border-t py-4">
      <h2 className="mb-4 text-lg font-bold">Inbox</h2>
      <ul className="flex flex-col gap-3 w-full h-96 overflow-auto">
        {unreadMessages.map((msg) => (
          <Message
            author={msg.author}
            text={msg.text}
            status={msg.status}
            key={msg.id}
          />
        ))}
      </ul>
    </div>
  );
}

export default Inbox;
