import { useState } from "react";

function AppButton({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-44 p-2 my-1 bg-indigo-300 text-slate-800 text-xs rounded-md shadow-lg shadow-indigo-300 hover:bg-indigo-700 hover:text-indigo-50 active:shadow-sm active:bg-indigo-500 duration-150"
    >
      {text}
    </button>
  );
}

export default AppButton;
