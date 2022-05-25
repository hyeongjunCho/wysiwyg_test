import React from "react";
import "./App.css";
import AlloyEditorComponent from "./alloyeditor";

function App() {
  return (
    <div className="App">
      <div className={`alloy-editor-container`}>
        <AlloyEditorComponent></AlloyEditorComponent>
      </div>
    </div>
  );
}

export default App;
