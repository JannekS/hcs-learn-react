import "./AppButton.css";

function AppButton({ type, value }) {
  return (
    <>
      <button value={value} type={type}>
        {value}
      </button>
    </>
  );
}

export default AppButton;
