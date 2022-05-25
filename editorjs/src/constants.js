import Embed from "@editorjs/embed";
import List from "@editorjs/list";
import LinkTool from "@editorjs/link";
import Image from "@editorjs/image";
import Raw from "@editorjs/raw";
import SimpleImage from "@editorjs/simple-image";
import AlignmentBlockTune from "editorjs-text-alignment-blocktune";
import FontSize from "editorjs-inline-font-size-tool";
import Underline from "@editorjs/underline";

export const EDITOR_JS_TOOLS = {
  embed: Embed,
  list: List,
  linkTool: LinkTool,
  image: {
    class: Image,
    config: {
      /**
       * Custom uploader
       */
      uploader: {
        /**
         * Upload file to the server and return an uploaded image data
         * @param {File} file - file selected from the device or pasted by drag-n-drop
         * @return {Promise.<{success, file: {url}}>}
         */
        uploadByFile(file) {
          // your own uploading logic here
          return {
            success: 1,
            file: {
              url: "https://codex.so/upload/redactor_images/o_80beea670e49f04931ce9e3b2122ac70.jpg",
              // any other image data you want to store, such as width, height, color, extension, etc
            },
          };
        },

        /**
         * Send URL-string to the server. Backend should load image by this URL and return an uploaded image data
         * @param {string} url - pasted image URL
         * @return {Promise.<{success, file: {url}}>}
         */
        uploadByUrl(url) {
          // your ajax request for uploading
          return {
            success: 1,
            file: {
              url: "https://codex.so/upload/redactor_images/o_e48549d1855c7fc1807308dd14990126.jpg",
              // any other image data you want to store, such as width, height, color, extension, etc
            },
          };
        },
      },
    },
  },
  raw: Raw,
  simpleImage: SimpleImage,
  anyTuneName: {
    class: AlignmentBlockTune,
    config: {
      default: "right",
      blocks: {
        header: "center",
        list: "right",
      },
    },
  },
  underline: Underline,
  fontSize: FontSize,
};
