function Inbox({ unreadMessages }) {
  return (
    <>
      <h2>Inbox</h2>
      <ul className="flex flex-col gap-3">
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
