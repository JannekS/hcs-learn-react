function AppSidebar({ menuItems }) {
  return (
    <aside className="w-1/4 h-full border-slate-400 border-r p-4">
      <ul className="flex flex-col gap-2 font-semibold">
        {menuItems.map((item) => (
          <li key={item.name}>
            <a className="text-slate-700 hover:text-slate-900" href={item.url}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default AppSidebar;
