import "./AppButton.css";

function AppButton({ type, key, message, name }) {
  return (
    <>
      <button key={key} type={type} onClick={() => alert(message)}>
        Hello {name}. Click here to see your personal message.
      </button>
    </>
  );
}

export default AppButton;
