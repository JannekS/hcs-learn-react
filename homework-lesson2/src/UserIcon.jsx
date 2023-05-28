function UserIcon({ username }) {
  const nameArr = username.split(" ");
  let firstName = nameArr[0];

  return (
    <div className="flex flex-col items-center justify-end mx-2 h-10 w-10 overflow-hidden">
      <img src="/circle-user-solid.svg" alt="" className="w-5 h-5" />
      <p className="w-10 text-xs text-center font-bold tracking-tight text-indigo-700 truncate">
        {firstName || "???"}
      </p>
    </div>
  );
}

export default UserIcon;
