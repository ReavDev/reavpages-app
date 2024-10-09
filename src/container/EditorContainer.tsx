'use client'

import EditorJS, { OutputData } from '@editorjs/editorjs'
import React, { useRef } from 'react'
import Editor from '@/lib/editor'

const EditorContainer = () => {
 const editor = useRef<EditorJS>(new EditorJS({}))
 const editorHandler = (content: OutputData) => {}

 return (
  <Editor
   editor={editor.current}
   updateEditor={editorHandler}
   previewUrl=""
   loading={false}
  />
 )
}

export default EditorContainer
