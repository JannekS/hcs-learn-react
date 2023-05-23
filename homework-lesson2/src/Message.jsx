function Message({ author, text, status }) {
  let msgStatus = status;
  return (
    <div>
      <h3>from: {author}</h3>
      <p>{text}</p>
    </div>
  );
}

export default Message;
