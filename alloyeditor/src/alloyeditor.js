import React, { useEffect, useRef, useState } from "react";
import "./dist/alloy-editor/assets/alloy-editor-ocean-min.css";
import * as icons from "./dist/alloy-editor/assets/icons/icons.svg";
icons.ReactComponent.render({ title: "align-image-center" });
const AlloyEditorComponent = ({ alloyEditorConfig = {} }) => {
  const [_editor, _setEditor] = useState();
  const attached = useRef(false);

  useEffect(() => {
    console.log(window.AlloyEditor);
    if (!document.getElementById("editable")) return;
    if (attached.current) return;
    if (_editor) return;
    if (!window.AlloyEditor || Object.keys(window.AlloyEditor).length === 0)
      return;
    attached.current = true;

    _setEditor(
      window.AlloyEditor.editable("editable", {
        language: "ko",
        uiColor: "#AADC6E",
        toolbars: {
          add: {
            buttons: ["imageFromFile", "embed", "camera", "hline", "table"],
            tabIndex: 2,
          },
          styles: {
            selections: [
              {
                name: "text",
                buttons: [
                  "styles",
                  "bold",
                  "italic",
                  "underline",
                  "link",
                  "twitter",
                  "FontFamily",
                  "FontSize",
                  "Copy",
                  "Cut",
                  "paragraphLeft",
                  "paragraphJustify",
                  "paragraphRight",
                ],
                test: window.AlloyEditor.SelectionTest.text,
              },
              {
                name: "image",
                buttons: [
                  "imageLeft",
                  "imageCenter",
                  "imageRight",
                  "removeImage",
                ],
                test: window.AlloyEditor.SelectionTest.image,
              },
            ],
            tabIndex: 1,
          },
        },
      })
    );
    console.log(window.AlloyEditor);
  }, [
    Object.keys(window.AlloyEditor || {}).length,
    document.getElementById("editable"),
  ]);

  return (
    <p id={`editable`}>
      This is a Live Demo Click/Tap here to edit Cupcake ipsum dolor sit amet
      halvah. Icing I love carrot cake cotton candy danish brownie wafer I love.
      Cake chocolate cake biscuit tiramisu ice cream pudding pastry. Gingerbread
      muffin candy canes tart tootsie roll. Muffin cotton candy cotton candy
      wafer lollipop cheesecake bear claw. Pastry caramels toffee cake dragée
      toffee chocolate cake cupcake. Pastry lemon drops I love wafer macaroon
      bonbon marzipan. Muffin soufflé jelly beans macaroon I love I love.
      Cheesecake brownie sugar plum. Cookie donut carrot cake gummies. Biscuit
      jelly sweet dessert sesame snaps tiramisu I love ice cream.
    </p>
  );
};

export default AlloyEditorComponent;
