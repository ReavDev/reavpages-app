'use client'

import { JSONContent } from '@tiptap/react'
import Editor from '@/lib/editor'
import TitleInput from '@/components/module/editor/TitleInput'
import '@/styles/editor.scss'

const EditorContainer = () => {
 const editorHandler = (_: string | JSONContent) => {
  // console.log({content});
 }

 return (
  <section className="workspace-editor flex flex-col gap-y-3">
   <TitleInput placeholder="New page" />
   <Editor onChange={editorHandler} />
  </section>
 )
}

export default EditorContainer
