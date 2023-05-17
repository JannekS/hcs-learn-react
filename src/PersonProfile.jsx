import "./PersonProfile.css";

function PersonProfile({ name, age, children }) {
  return (
    <div className="people-card">
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>About {name}:</p>
      <p className="description">{children}</p>
    </div>
  );
}

export default PersonProfile;
