import MenuItem from "./MenuItem";

function AppSidebar({ menuItems }) {
  return (
    <aside className="w-1/4 h-full border-slate-400 border-r p-4">
      <ul className="flex flex-col gap-3 font-semibold">
        {menuItems.map((item) => (
          <MenuItem name={item.name} url={item.url} key={item.name} />
        ))}
      </ul>
    </aside>
  );
}

export default AppSidebar;
