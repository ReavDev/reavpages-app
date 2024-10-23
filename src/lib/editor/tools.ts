import { Editor, UseEditorOptions } from "@tiptap/react"
import Blockquote from "@tiptap/extension-blockquote"
import BulletList from "@tiptap/extension-bullet-list"
import Document from "@tiptap/extension-document"
import Heading from "@tiptap/extension-heading"
import HardBreak from "@tiptap/extension-hard-break"
import Link from "@tiptap/extension-link"
import ListItem from "@tiptap/extension-list-item"
import Paragraph from "@tiptap/extension-paragraph"
import OrderedList from "@tiptap/extension-ordered-list"
import Table from "@tiptap/extension-table"
import TableCell from "@tiptap/extension-table-cell"
import TableHeader from "@tiptap/extension-table-header"
import TableRow from "@tiptap/extension-table-row"
import TaskItem from "@tiptap/extension-task-item"
import TaskList from "@tiptap/extension-task-list"
import Text from "@tiptap/extension-text"
import HorizontalRule from "@tiptap/extension-horizontal-rule"
import {
 bulletListImg,
 dividerImg,
 linkImg,
 numberedListImg,
 paragraphImg,
 quoteImg,
 simpleTableImg,
 subHeaderImg,
 subSubHeaderImg,
 todoImg,
 //  toggleImg,
 topHeaderImg,
} from "../../../public/images"

// const uploadUrl = 'https://api.cloudinary.com/v1_1/reav_hub_/image/upload'

const extensions = [
 Document,
 Paragraph,
 Text,
 Heading.configure({
  levels: [1, 2, 3],
 }),
 HardBreak,
 Blockquote,
 BulletList,
 OrderedList,
 ListItem,
 HorizontalRule,
 Link.configure({
  openOnClick: true,
  autolink: true,
  defaultProtocol: "https",
 }),
 Table.configure({
  resizable: true,
  allowTableNodeSelection: true,
 }),
 TableRow,
 TableHeader,
 TableCell,
 TaskList,
 TaskItem.configure({
  nested: true,
 }),
]

export const editorConfig = (content?: string): UseEditorOptions => ({
 extensions,
 content: content || "<p>Hello</p>",
 //  autofocus: true,
 editorProps: {
  attributes: {
   class:
    "prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-1 focus:outline-none",
  },
 },
})

export function getEditorTools(editor: Editor) {
 return [
  {
   title: "Basic blocks",
   tools: [
    {
     title: "Text",
     desc: "Just start writing with plain text.",
     image: paragraphImg,
     action: () => editor.chain().focus().insertContent("<p></p>").run(),
    },
    {
     title: "To-do list",
     desc: "Track task with a to-do list.",
     image: todoImg,
     action: () => {
      editor
       .chain()
       .focus()
       .insertContent({
        type: "taskList",
        content: [
         {
          type: "taskItem",
          attrs: { checked: false }, // unchecked task
          content: [
           {
            type: "paragraph",
            text: "Task 1",
           },
          ],
         },
        ],
       })
       .run()
     },
    },
    {
     title: "H1",
     desc: "Big section heading.",
     image: topHeaderImg,
     action: () => {
      editor.chain().focus().insertContent("<h1></h1>").run()
     },
    },
    {
     title: "H2",
     desc: "Medium section heading.",
     image: subHeaderImg,
     action: () => editor.chain().focus().insertContent("<h2></h2>").run(),
    },
    {
     title: "H3",
     desc: "Small section heading.",
     image: subSubHeaderImg,
     action: () => editor.chain().focus().insertContent("<h3></h3>").run(),
    },
    {
     title: "Table",
     desc: "Add simple tabular content to your page",
     image: simpleTableImg,
     action: () =>
      editor
       .chain()
       .focus()
       .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
       .run(),
    },
    {
     title: "Bulleted list",
     desc: "Create a list with simple bullet.",
     image: bulletListImg,
     action: () => editor.chain().focus().toggleBulletList().run(),
    },
    {
     title: "Numbered list",
     desc: "Create a list with numbering.",
     image: numberedListImg,
     action: () => editor.chain().focus().toggleOrderedList().run(),
    },
    // {
    //  title: 'Toggle list',
    //  desc: 'Toggle can hide and show contents inside.',
    //  image: toggleImg,
    //  action: () => editor.chain().focus().sinkListItem('listItem').run(),
    // },
    {
     title: "Quote",
     desc: "Capture a quote.",
     image: quoteImg,
     action: () => editor.chain().focus().setBlockquote().run(),
    },
    {
     title: "Divider",
     desc: "visually divide blocks.",
     image: dividerImg,
     action: () => editor.chain().focus().setHorizontalRule().run(),
    },
    {
     title: "Link",
     desc: "LInk to an existing page.",
     image: linkImg,
     action: () => {
      setLink(editor)
     },
    },
   ],
  },
 ]
}

function setLink(editor: Editor) {
 const previousUrl = editor.getAttributes("link").href
 const url = window.prompt("URL", previousUrl)

 // cancelled
 if (url === null) {
  return
 }

 // empty
 if (url === "") {
  editor.chain().focus().extendMarkRange("link").unsetLink().run()

  return
 }

 // update link
 editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run()
}
