import { Editor, JSONContent, useEditorState } from '@tiptap/react'
import { useDebouncedCallback } from '@mantine/hooks'
import { ReavEditorContent } from '@/entities/general'
import { useCallback, useEffect, useState } from 'react'

export default function useEditorContent(
 editor: Editor | null,
 options: ReavEditorContent
) {
 const [value, setValue] = useState<string | JSONContent>('')

 const handleEditorContent = useCallback(() => {
  let content: string | JSONContent

  if (!editor) return

  if (options.type === 'html') {
   content = editor.getHTML()
  } else if (options.type === 'json') {
   content = editor.getJSON()
  } else {
   content = editor.getText()
  }

  setValue(content)
 }, [editor, options])

 const debouncedCallBack = useDebouncedCallback(
  handleEditorContent,
  options.interval
 )

 useEffect(() => {
  if (!editor?.isEmpty) {
   debouncedCallBack()
  }
 }, [editor?.isEmpty, debouncedCallBack])

 return value
}
