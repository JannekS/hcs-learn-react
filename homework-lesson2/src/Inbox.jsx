import Message from "./Message";

function Inbox({ unreadMessages }) {
  return (
    <>
      <h2>Inbox</h2>
      <ul className="flex flex-col gap-3 w-full h-96 overflow-auto">
        {unreadMessages.map((msg) => (
          <Message
            author={msg.author}
            text={msg.content}
            status={msg.status}
            key={msg.id}
          />
        ))}
      </ul>
    </>
  );
}

export default Inbox;
