'use client'

import { EditorContent, JSONContent, useEditor } from '@tiptap/react'
import { useEffect } from 'react'
import useEditorContent from '@/hooks/editor-content'
import { editorConfig } from './tools'
import { EditorProps } from '@/entities/lib'
import Toolbar from './Toolbar'

export default function Editor({
 elementClass,
 onChange,
}: EditorProps<JSONContent>) {
 const editor = useEditor(editorConfig())

 const content = useEditorContent(editor, { type: 'html', interval: 2000 })

 useEffect(() => {
  content && onChange && onChange(content)
 }, [content])

 return (
  <div className="editor-content flex items-start gap-x-2">
   <Toolbar editor={editor} />
   <EditorContent editor={editor} className="w-full" />
  </div>
 )
}
