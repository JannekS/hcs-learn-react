function AppHeader({ children }) {
  return (
    <header className="w-full bg-indigo-100 border-b border-slate-400 h-16 flex items-center px-4 justify-between">
      {children}
    </header>
  );
}

export default AppHeader;
