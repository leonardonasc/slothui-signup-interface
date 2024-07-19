import Base from "./components/Base";
import Form from "./components/Form";

function App() {
  return (
    // container
    <div className="w-full flex h-[100vh]">
      {/* gradient container */}
      <div className="w-1/2 gradient-ppr flex p-28  justify-between">
        <Base />
      </div>
      <div className="w-1/2 bg-neutral-950">
        <Form />
      </div>
    </div>
  );
}

export default App;
