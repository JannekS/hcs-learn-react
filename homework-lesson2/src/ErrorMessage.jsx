function ErrorMessage({ errCode, errMsg }) {
  return (
    <div className="border-2 border-solid border-red-700 rounded-lg bg-red-50 text-slate-700 mx-auto p-4 text-center">
      <h2 className="text-lg font-bold">Something went wrong :-(</h2>
      {errCode && <h2 className="text-lg font-bold">{errCode}</h2>}
      <p>
        {errMsg ? errMsg : "No further info available. Please try again later."}
      </p>
    </div>
  );
}

export default ErrorMessage;
