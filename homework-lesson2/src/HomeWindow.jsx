function HomeWindow({ username, messageCount }) {
  return (
    <div className="p-4">
      Hello {username},
      <br />
      <br />
      {messageCount > 0 ? (
        <div>
          you have <strong>{messageCount}</strong> unread messages.
          <br />
          <br />
          Please go to your inbox to read them.
        </div>
      ) : (
        <div>
          you have no new messages.
          <br />
          <br />
          Go to <strong>Conversations</strong> to see all your messages.
        </div>
      )}
    </div>
  );
}

export default HomeWindow;
