// import PropTypes from 'prop-types'
// import { Card } from '@mantine/core'
import { useEffect, useRef } from 'react'
import EditorJS, { LogLevels, OutputData } from '@editorjs/editorjs'
// import Undo from 'editorjs-undo'
import { Card } from '../ui/card'
import { pro_main_tools } from '@/lib/editor/tools'

// import usePremiumStatus from '../../../utils/hooks/useSubscription/usePremiumStatus'
// import { auth } from '../../../configs/Firebase-config'
// import { useAuthState } from 'react-firebase-hooks/auth'
// import DragDrop from 'editorjs-drag-drop'
/* eslint-disable-next-line no-unused-vars */

interface NoteEditorProps {
 editor: EditorJS
 updateEditor: (content: OutputData) => void
}

const NoteEditor = ({ editor, updateEditor }: NoteEditorProps) => {
 const editorTools = pro_main_tools
 const unflattenTableContent = (data: OutputData) => {
  return {
   ...data,
   blocks: data.blocks.map((block) => {
    if (block.type === 'table') {
     return {
      ...block,
      data: {
       ...block.data,
       content: block.data.content.reduce(
        (acc: string[][], val: string, index: number) => {
         const rowIndex = Math.floor(index / 5) // Assuming each row has 5 cells
         if (!acc[rowIndex]) {
          acc[rowIndex] = []
         }
         acc[rowIndex].push(val)
         return acc
        },
        []
       ),
      },
     }
    } else {
     return block
    }
   }),
  }
 }
 const ejInstance = useRef<EditorJS | null>(null)
 // const [user] = useAuthState(auth)
 // const isUserPremium = usePremiumStatus(user)

 const createEditorData = async function () {
  const data = await editor.save()
  ejInstance.current = new EditorJS({
   holder: 'editorjs',
   onChange: async () => {
    if (ejInstance.current) {
     const content = await ejInstance.current.save()
     content.blocks.forEach((block) => {
      if (block.data && block.data.text) {
       block.data.text = ejInstance.current?.sanitizer.clean(
        block.data.text,
        sanitizerConfig
       )
      }
     })
     updateEditor(content)
    }
   },
   onReady: () => {
    // new DragDrop(editor)
   },
   logLevel: LogLevels.ERROR,
   autofocus: true,
   data: unflattenTableContent(data),
   placeholder: 'Start typing...',
   // tools: isUserPremium ? pro_main_tools : free_main_tools,
   tools: editorTools,
  })

  ejInstance.current.isReady
   .then(() => {
    // new Undo({ editor })
   })
   .catch((reason) => {
    console.log(`Editor.js initialization failed because of ${reason}`)
   })
 }

 useEffect(() => {
  createEditorData()

  return () => {
   if (ejInstance.current) {
    ejInstance.current.destroy()
    ejInstance.current = null
   }
  }
  /* eslint-disable-next-line react-hooks/exhaustive-deps */
 }, [])
 const sanitizerConfig = {
  h1: {}, // allow <h1> with all attributes
  h2: {}, // allow <h2> with all attributes
  h3: {}, // allow <h3> with all attributes
  h4: {}, // allow <h4> with all attributes
  h5: {}, // allow <h5> with all attributes
  h6: {}, // allow <h6> with all attributes
  p: {}, // allow <p> with all attributes
  a: { href: true, target: '_blank' }, // allow <a> with href and target attributes
  img: { src: true, alt: true }, // allow <img> with src and alt attributes
  ul: {}, // allow <ul> with all attributes
  ol: {}, // allow <ol> with all attributes
  li: {}, // allow <li> with all attributes
  table: {}, // allow <table> with all attributes
  thead: {}, // allow <thead> with all attributes
  tbody: {}, // allow <tbody> with all attributes
  tr: {}, // allow <tr> with all attributes
  td: {}, // allow <td> with all attributes
  th: {}, // allow <th> with all attributes
  blockquote: {}, // allow <blockquote> with all attributes
  code: {}, // allow <code> with all attributes
  pre: {}, // allow <pre> with all attributes
  b: {}, // allow <b> with all attributes
  i: {}, // allow <i> with all attributes
  u: {}, // allow <u> with all attributes
  strong: {}, // allow <strong> with all attributes
  em: {}, // allow <em> with all attributes
  mark: {}, // allow <mark> with all attributes
  del: {}, // allow <del> with all attributes
  ins: {}, // allow <ins> with all attributes
  // ... any other tags that you want to allow
 }
 return (
  <div>
   <Card id="editorjs" style={{ overflowY: 'auto' }}></Card>
  </div>
 )
}
// NoteEditor.propTypes = {
//   editorjs: PropTypes.object,
//   setEditorjs: PropTypes.func,
// }
export default NoteEditor
