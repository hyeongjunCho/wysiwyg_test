import React, { useEffect } from "react";
// import { createReactEditorJS } from "react-editor-js";
import EditorJS from "@editorjs/editorjs";
import "./App.css";
import { EDITOR_JS_TOOLS } from "./constants";

// const ReactEditorJS = createReactEditorJS();

const App = () => {
  // const editorCore = React.useRef(null);

  // const handleInitialize = React.useCallback((instance) => {
  //   editorCore.current = instance;
  //   instance.destroy();
  // }, []);

  // const handleSave = React.useCallback(async () => {
  //   const savedData = await editorCore.current.save();
  // }, []);
  const editor = React.useRef();

  useEffect(() => {
    console.log(EDITOR_JS_TOOLS);
    if (!document.getElementById("editor")) return;
    if (editor.current) return;
    editor.current = new EditorJS({
      holder: "editor",
      // tools: Object.keys(EDITOR_JS_TOOLS).reduce((acc, cur) => {
      //   acc[cur] = {
      //     class: EDITOR_JS_TOOLS[cur],
      //     inlineToolbar: true,
      //   }
      //   return acc;
      // }, {}),
      tools: EDITOR_JS_TOOLS,
      onReady: () => {
        console.log(editor.current);
      },
    });
  }, [document.getElementById("editor")]);

  return (
    <div className="App">
      <h1>Editorjs</h1>
      <div className={`react-editor-container`}>
        {/* <ReactEditorJS
          onInitialize={handleInitialize}
          tools={EDITOR_JS_TOOLS}
        /> */}
        <div id="editor" />
      </div>
    </div>
  );
};

export default App;
