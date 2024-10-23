import { memo } from "react"
import { Editor } from "@tiptap/react"
import {
 DropdownMenu,
 DropdownMenuContent,
 DropdownMenuGroup,
 DropdownMenuItem,
 DropdownMenuLabel,
 DropdownMenuSeparator,
 DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { getEditorTools } from "./tools"
import Image from "next/image"
import { Plus } from "../../../public/icons"

function Toolbar({ editor }: { editor: Editor | null }) {
 if (!editor) return

 return (
  <DropdownMenu modal={false}>
   <DropdownMenuTrigger asChild>
    <button className="mt-1 h-auto cursor-grab self-start opacity-30 transition-opacity duration-300 hover:opacity-100">
     <Plus />
    </button>
   </DropdownMenuTrigger>
   <DropdownMenuContent className="editor-tool-content h-[20rem] w-[18.75rem]">
    {getEditorTools(editor).map((item, idx) => {
     return (
      <>
       {idx > 0 && <DropdownMenuSeparator />}
       <DropdownMenuLabel className="text-xs font-bold">
        {item.title}
       </DropdownMenuLabel>
       <DropdownMenuGroup>
        {item.tools.map((tool) => {
         return (
          <DropdownMenuItem key={tool.title} onClick={() => tool.action()}>
           <div className="editor-tool-item gap-x-3 px-3 py-1">
            <div className="flex-1">
             <Image src={tool.image} alt={tool.title} />
            </div>
            <div className="flex-[2]">
             <p className="text-sm">{tool.title}</p>
             <p className="text-xs">{tool.desc}</p>
            </div>
           </div>
          </DropdownMenuItem>
         )
        })}
       </DropdownMenuGroup>
      </>
     )
    })}
   </DropdownMenuContent>
  </DropdownMenu>
 )
}

export default memo(Toolbar)
