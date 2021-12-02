import "./App.scss";
import Decorations from "./Decorations";
import { useState } from "react";
function App() {
  const [val, setVal] = useState(false);
  const [color, setColor] = useState({
    transition: " ease 1s",
    boxShadow: " 0px 0px 60px 55px transparent",
  });
  return (
    <>
    <div className="App">
      <Decorations digit={1} val={val} />
      <Decorations digit={2} color={color} val={val} />
      <Decorations digit={3} color={color} val={val} />
      <Decorations digit={4} color={color} val={val} />
      <Decorations digit={5} color={color} val={val} />
      <Decorations digit={6} color={color} val={val} />
      <Decorations digit={7} color={color} val={val} />
      <Decorations digit={8} color={color} val={val} />
      
    </div>
    <div className="container">
    <button
        onClick={() => {
          if (val == true) {
            setVal(false);
          } else {
            setVal(true);
          }
        }}
      > Click me </button></div>
    </>
  );
}

export default App;
