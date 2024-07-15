import React from "react";
import Generator from "./pages/generator/Generator";
import s from "./App.module.scss";

function App() {
  return (
    <div className={s.wrapper}>
      <video src="bg.mp4" autoPlay muted loop id="myVideo" />
      <Generator />
    </div>
  );
}

export default App;
