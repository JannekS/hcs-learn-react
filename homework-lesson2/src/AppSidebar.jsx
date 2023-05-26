import AppButton from "./AppButton";
import MenuItem from "./MenuItem";

function AppSidebar({
  menuItems,
  onChangeMessageCount,
  unreadMsgCount,
  changeUsername,
  username,
}) {
  return (
    <aside className="w-1/4 h-full border-slate-400 border-r p-4">
      <ul className="flex flex-col gap-3 font-semibold">
        {menuItems.map((item) => (
          <MenuItem name={item.name} url={item.url} key={item.name} />
        ))}
      </ul>

      <div className="flex flex-col mt-10">
        <div className="my-4">
          <label htmlFor="username" className="ml-1 text-xs">
            Change your user name:
          </label>
          <input
            className="w-44 border-solid border-2 border-indigo-700 rounded-md p-1 px-2 my-2 text-sm text-indigo-600"
            type="text"
            value={username}
            onChange={(event) => changeUsername(event.target.value)}
          />
        </div>

        <AppButton
          text="Get message"
          width={44}
          onClick={() => onChangeMessageCount(1)}
        />
        <AppButton
          text="Mark message as read"
          width={44}
          onClick={() => onChangeMessageCount(-1)}
        />
        <AppButton
          text="Mark all messages as read"
          width={44}
          onClick={() => onChangeMessageCount(-unreadMsgCount)}
        />
      </div>
    </aside>
  );
}

export default AppSidebar;
