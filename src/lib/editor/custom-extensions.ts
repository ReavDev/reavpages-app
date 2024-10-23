import { Node } from '@tiptap/react'

export interface ToggleableOptions {
 itemTypeName: string

 /**
  * The HTML attributes for a task list node.
  * @default {}
  * @example { class: 'foo' }
  */
 HTMLAttributes: Record<string, unknown>
}

declare module "@tiptap/react" {
 interface Commands<ReturnType> {
  toggleableList: {
   /**
    * Toggle a task list
    * @example editor.commands.toggleTaskList()
    */
   toggleContentList: () => ReturnType
  }
  // toggleableItem: () =>
 }
}

export const ToggleList = Node.create<ToggleableOptions>({
 name: 'toggleableList',

 group: 'block',

 content: 'toggleItem+',

 parseHTML() {
  return [
   {
    tag: 'ul[data-type="toggle"]',
   },
  ]
 },

 renderHTML() {
  return ['ul', { 'data-type': 'toggle' }, 0]
 },
})

export const ToggleItem = Node.create<ToggleableOptions>({
 name: 'toggleableItem',

 group: 'block',

 content: 'paragraph+',

 parseHTML() {
  return [
   {
    tag: 'li[data-type="toggle-item"]',
   },
  ]
 },

 renderHTML() {
  return ['li', { 'data-type': 'toggle-item' }, 0]
 },
})
