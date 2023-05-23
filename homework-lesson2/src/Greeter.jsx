function Greeter({ userName, age }) {
  return (
    <div className="my-4">
      <p>Hello {userName || "User"}!</p>
      {age && (
        <p>
          You are {age} years old, so legally you are
          {age < 18 ? " a child." : " an adult."}
        </p>
      )}
    </div>
  );
}

export default Greeter;
