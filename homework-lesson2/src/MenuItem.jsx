function MenuItem({ name, url }) {
  return (
    <li key={name}>
      <a className="text-slate-700 hover:text-slate-900" href={url}>
        {name}
      </a>
    </li>
  );
}

export default MenuItem;
