import AppButton from "./AppButton";
import MenuItem from "./MenuItem";

function AppSidebar({ menuItems, onChangeMessageCount, unreadMsgCount }) {
  return (
    <aside className="w-1/4 h-full border-slate-400 border-r p-4">
      <ul className="flex flex-col gap-3 font-semibold">
        {menuItems.map((item) => (
          <MenuItem name={item.name} url={item.url} key={item.name} />
        ))}
      </ul>

      <div className="flex flex-col mt-10">
        <AppButton text="Get message" onClick={() => onChangeMessageCount(1)} />
        <AppButton
          text="Mark message as read"
          onClick={() => onChangeMessageCount(-1)}
        />
        <AppButton
          text="Mark all messages as read"
          onClick={() => onChangeMessageCount(-unreadMsgCount)}
        />
      </div>
    </aside>
  );
}

export default AppSidebar;
