import React, { useEffect, useRef, useState } from "react";
import "./dist/alloy-editor/assets/alloy-editor-ocean-min.css";

const AlloyEditorComponent = ({ alloyEditorConfig = {} }) => {
  const [_editor, _setEditor] = useState();
  const attached = useRef(false);

  useEffect(() => {
    console.log(window.AlloyEditor);
    if (!document.getElementById("editable")) return;
    if (attached.current) return;
    if (_editor) return;
    if (!window.AlloyEditor || Object.keys(window.AlloyEditor).length === 0) return;
    attached.current = true;

    var selections = window.AlloyEditor.Selections;
    var toolbars = {
      styles: {
        selections: selections,
        tabIndex: 1,
      },
    };
    var textButtons = selections[3].buttons; // ['styles', 'bold, 'italic', 'underline', 'link', twitter']
    var customButtons = textButtons.concat("font"); // ['styles', 'bold, 'italic', 'underline', 'link', twitter', 'FontFamily', 'FontSize']

    selections[3].buttons = window.AlloyEditor.getButtons(customButtons);
    _setEditor(
      window.AlloyEditor.editable("editable", {
        language: "ko",
        uiColor: "#AADC6E",
        toolbars: {
          add: {
            buttons: [
              "styles",
              "bold",
              "italic",
              "underline",
              "link",
              "twitter",
              "FontFamily",
              "FontSize",
            ],
            tabIndex: 2,
          },
          styles: {
            selections: [
              {
                name: "text",
                buttons: ["code"],
                test: window.AlloyEditor.SelectionTest.text,
              },
            ],
            tabIndex: 1,
          },
        },
      })
    );
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
