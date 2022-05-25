import React from "react";
import "./App.css";
import AlloyEditorComponent from "./alloyeditor";

function App() {
  return (
    <div className="App">
      <h1>Alloy Editor React</h1>
      <div className={`alloy-editor-container`}>
        <AlloyEditorComponent></AlloyEditorComponent>
      </div>
    </div>
  );
}

export default App;
