function MenuItem({ name, url }) {
  return (
    <li className="hover:scale-105 hover:ml-1 duration-300" key={name}>
      <a className="text-slate-700 hover:text-slate-900" href={url}>
        {name}
      </a>
    </li>
  );
}

export default MenuItem;
