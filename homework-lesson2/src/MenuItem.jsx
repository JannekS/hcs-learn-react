import { Link } from "wouter";

function MenuItem({ name, url }) {
  return (
    <li className="hover:scale-105 hover:ml-1 duration-300">
      <Link
        className="text-slate-700 hover:text-indigo-800 hover:drop-shadow-lg"
        href={url}
      >
        {name}
      </Link>
    </li>
  );
}

export default MenuItem;
