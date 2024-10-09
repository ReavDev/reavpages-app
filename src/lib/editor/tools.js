import Header from '@editorjs/header'
import NestedList from '@editorjs/nested-list'
import ImageTool from '@editorjs/image'
import Table from '@editorjs/table'
import Delimiter from '@editorjs/delimiter'
import LinkTool from '@editorjs/link'
import Quote from '@editorjs/quote'
import Underline from '@editorjs/underline'
import Warning from '@editorjs/warning'
import Personality from '@editorjs/personality'
import Marker from '@editorjs/marker'
// import editorjsColumns from '@calumk/editorjs-columns'
import Paragraph from '@editorjs/paragraph'
import axios from 'axios'
// import { Divider } from '@mantine/core'
import { renderToString } from 'react-dom/server'

// Custom Seperator block
class CustomSeparator extends Delimiter {
 constructor({ data, config, api }) {
  const options = { data, config, api }
  super(options)
  // Your custom initialization code
 }

 static get toolbox() {
  return {
   icon:
    '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10 5V19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  }
 }

 render() {
  const separator = document.createElement('div')
  separator.innerHTML = renderToString(null)
  return separator
 }
}

function newUpload(file) {
 return new Promise((resolve, reject) => {
  const date = Date.now() / 1000
  const formData = new FormData()
  formData.append('file', file)
  formData.append('upload_preset', import.meta.env.VITE_UPLOAD_PRESET)
  formData.append('api_key', import.meta.env.VITE_IMAGE_KEY)
  formData.append('timestamp', String(date))

  axios
   .post('https://api.cloudinary.com/v1_1/reav_hub_/image/upload', formData, {
    headers: { 'X-Requested-With': 'XMLHttpRequest' },
   })
   .then((response) => {
    const data = response.data
    const fileURL = data.secure_url
    resolve(fileURL)
   })
   .catch((error) => {
    reject(new Error('Error uploading file to Cloudinary: ' + error))
   })
 })
}
// function newAttachmentUpload(file) {
// 	return new Promise((resolve, reject) => {
// 		const formData = new FormData();
// 		formData.append("file", file);
// 		formData.append("upload_preset", import.meta.env.VITE_UPLOAD_PRESET);
// 		formData.append("api_key", import.meta.env.VITE_IMAGE_KEY);
// 		formData.append("timestamp", (Date.now() / 1000) | 0);

// 		axios
// 			.post("https://api.cloudinary.com/v1_1/reav_hub_/raw/upload", formData, {
// 				headers: { "X-Requested-With": "XMLHttpRequest" },
// 			})
// 			.then((response) => {
// 				const data = response.data;
// 				console.log(data);
// 				resolve(data);
// 			})
// 			.catch((error) => {
// 				reject(new Error("Error uploading file to Cloudinary: " + error));
// 			});
// 	});
// }
// /* eslint-disable-next-line react-refresh/only-export-components */
function UploadURL(URL) {
 return new Promise((resolve) => {
  resolve(URL)
 })
}

export const column_tools = {
 underline: Underline,
 Marker: {
  class: Marker,
  shortcut: 'CMD+SHIFT+M',
 },
 header: {
  class: Header,
  shortcut: 'CMD+SHIFT+H',
  inlineToolbar: true,
  config: {
   placeholder: 'Enter a header',
   levels: [1, 2, 3, 4, 5, 6],
   defaultLevel: 2,
  },
 },
 paragraph: {
  class: Paragraph,
  inlineToolbar: true,
 },
 list: {
  class: NestedList,
  inlineToolbar: true,
  config: {
   placeholder: 'Start a list',
   defaultStyle: 'unordered',
  },
 },
 linkTool: {
  class: LinkTool,
  config: {
   endpoint: 'http://localhost:8008/fetchUrl',
  },
 },
 separator: CustomSeparator,

 quote: {
  class: Quote,
  inlineToolbar: true,
  config: {
   quotePlaceholder: 'Enter a quote',
   captionPlaceholder: "Quote's author",
  },
 },
 warning: {
  class: Warning,
  inlineToolbar: true,
  config: {
   titlePlaceholder: 'Title',
   messagePlaceholder: 'Message',
  },
 },
}

export const pro_main_tools = {
 underline: Underline,
 Marker: {
  class: Marker,
  shortcut: 'CMD+SHIFT+M',
 },
 header: {
  class: Header,
  shortcut: 'CMD+SHIFT+H',
  inlineToolbar: true,
  config: {
   placeholder: 'Enter a header',
   levels: [1, 2, 3, 4, 5, 6],
   defaultLevel: 2,
  },
 },
 paragraph: {
  class: Paragraph,
  inlineToolbar: true,
 },
 list: {
  class: NestedList,
  inlineToolbar: true,
  config: {
   placeholder: 'Start a list',
   defaultStyle: 'unordered',
  },
 },
 linkTool: {
  class: LinkTool,
  config: {
   endpoint: 'http://localhost:3002/fetchUrl',
  },
 },
 table: {
  class: Table,
 },
 separator: CustomSeparator,

 columns: {
  class: editorjsColumns,
  config: {
   EditorJsLibrary: EditorJS, // Pass the library instance to the columns instance.
   tools: column_tools, // IMPORTANT! ref the column_tools
  },
 },

 quote: {
  class: Quote,
  inlineToolbar: true,
  config: {
   quotePlaceholder: 'Enter a quote',
   captionPlaceholder: "Quote's author",
  },
 },
 warning: {
  class: Warning,
  inlineToolbar: true,
  config: {
   titlePlaceholder: 'Title',
   messagePlaceholder: 'Message',
  },
 },
 image: {
  class: ImageTool,
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
     return newUpload(file).then((res) => {
      return {
       success: 1,
       file: {
        url: res,
       },
      }
     })
    },

    /**
     * Send URL-string to the server. Backend should load image by this URL and return an uploaded image data
     * @param {string} url - pasted image URL
     * @return {Promise.<{success, file: {url}}>}
     */
    uploadByUrl(url) {
     // your ajax request for uploading
     return UploadURL(url).then((res) => {
      return {
       success: 1,
       file: {
        url: res,
        // any other image data you want to store, such as width, height, color, extension, etc
       },
      }
     })
    },
   },
  },
 },
 attaches: {
  class: AttachesTool,
  config: {
   uploader: {
    /**
     * Upload file to the server and return an uploaded image data
     * @param {File} file - file selected from the device or pasted by drag-n-drop
     * @return {Promise.<{success, file: {url}}>}
     */
    uploadByFile(file) {
     // your own uploading logic here
     return newAttachmentUpload(file).then((res) => {
      return {
       success: 1,
       file: {
        url: res.secure_url,
        name: res.original_filename,
        title: res.original_filename,
       },
      }
     })
    },
   },
  },
 },
 personality: {
  class: Personality,
  config: {
   endpoint: 'http://localhost:8008/uploadFile',
  },
 },
}
