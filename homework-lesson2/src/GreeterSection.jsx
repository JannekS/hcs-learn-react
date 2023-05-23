import Greeter from "./Greeter";

function GreeterSection() {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">This is the Greeter Section.</h2>
      <Greeter userName="Sandra" age={28} />
      <Greeter userName="Jannek" age={16} />
      <Greeter userName="Hugo" />
      <Greeter age={30} />
    </div>
  );
}

export default GreeterSection;
