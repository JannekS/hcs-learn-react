function AppLogo({ imgSrc, name }) {
  return (
    <div className="flex flex-row space-x-3 items-center">
      <div className="rounded-full">
        <img src={imgSrc} alt="" className="w-8 h-8 -rotate-12" />
      </div>
      <div className="text-2xl font-sigmar">{name}</div>
    </div>
  );
}

export default AppLogo;
