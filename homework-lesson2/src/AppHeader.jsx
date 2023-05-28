import AppLogo from "./AppLogo";
import MsgNotificationIcon from "./MsgNotifcationIcon";
import UserIcon from "./UserIcon";

function AppHeader({ username, headerTitle, unreadMsgCount }) {
  return (
    <header className="w-full bg-indigo-100 border-b border-slate-400 h-16 flex flex-row items-center px-4 justify-between">
      <div className="flex flex-row items-center justify-between flex-1">
        <AppLogo title={headerTitle} imgSrc="/bullhorn-solid-indigo.svg" />
        <div className="flex-1"></div>
        <UserIcon username={username} />
        <MsgNotificationIcon messageCount={unreadMsgCount} />
      </div>
    </header>
  );
}

export default AppHeader;
