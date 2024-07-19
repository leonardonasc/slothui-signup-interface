import Base from "./components/Base";
import Form from "./components/Form";

function App() {
  return (
    // container
    <div className="cont-bg h-[100vh]">
      <div className="flex p-20 h-[95vh] w-full">
        <div className="w-1/2 gradient-ppr flex p-24 justify-between rounded-tl-2xl rounded-bl-2xl">
          <Base />
        </div>
        <div className="w-1/2 bg-neutral-950 rounded-tr-2xl rounded-br-2xl">
          <Form />
        </div>
      </div>
      <p className="text-slate-200 text-center font-bold">Design by: <a className="grad-name " href="https://dribbble.com/samoctav" target="blank">Samuel Oktavianus</a></p>
    </div>
  );
}

export default App;
