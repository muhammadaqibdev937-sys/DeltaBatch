import "./App.css";
import React from "react";
import { Props } from "./Prop/Prop.jsx";

function App() {
  // let options = ["helloaqib", "hellosaqib", "hellosaim"];
  // let opt = { a: "aqib" };

  return (
    <>
    {/* //direct pass inside it in array or object */}
      {/* <Props title="ludo" price={30000} features={options} opt={opt} /> */}
      <Props title="ludo" price={30000} />
      <Props title="udo" price={50000} />
      <Props title="luo" price={3000} />
    </>
  );
}

export default App;
