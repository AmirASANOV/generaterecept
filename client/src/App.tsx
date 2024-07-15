import React from "react";
import Generator from "./pages/generator/Generator";
import s from "./App.module.scss";

function App() {
  return (
    <div className={s.wrapper}>
      <Generator />
    </div>
  );
}

export default App;
