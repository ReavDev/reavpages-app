export interface EditorProps<T> {
 elementClass?: string
 onChange: (content: string | T) => void
}
