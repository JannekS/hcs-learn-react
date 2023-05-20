function HomeWindow({ username, messageCount }) {
  return (
    <div className="p-4">
      Hello {username},
      <br />
      <br />
      you have <strong>{messageCount}</strong> unread messages.
      <br />
      <br />
      Please go to your inbox to read them.
    </div>
  );
}

export default HomeWindow;
