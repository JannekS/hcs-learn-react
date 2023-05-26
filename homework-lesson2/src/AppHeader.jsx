function AppHeader({ username, children }) {
  return (
    <header className="w-full bg-indigo-100 border-b border-slate-400 h-16 flex flex-row items-center px-4 justify-between">
      <div className="flex flex-row items-center justify-between flex-1">
        {children}
      </div>
      <p className="ml-4 text-xs font-bold tracking-tight text-indigo-700">
        for {username}
      </p>
    </header>
  );
}

export default AppHeader;
