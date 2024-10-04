import React, { useMemo, useState } from 'react'
import NoteEditor from '@/components/lib/Editor'
// import {
//   SegmentedControl,
//   Paper,
//   Button,
//   Flex,
//   createStyles,
// } from '@mantine/core'
import Preview from './Preview'
// import {
//   IconArrowsMaximize,
//   IconArrowsMinimize,
//   IconExternalLink,
//   IconSparkles,
// } from '@tabler/icons-react'
import EditorJS, { OutputData } from '@editorjs/editorjs'
// import { useFullscreen, useMediaQuery } from '@mantine/hooks'
// import PropTypes from 'prop-types'

// const useStyles = createStyles((theme) => ({
//   header: {
//     borderTop: `1px solid ${
//       theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
//     }`,
//     borderRight: `1px solid ${
//       theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
//     }`,
//     borderLeft: `1px solid ${
//       theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
//     }`,
//     padding: '10px',
//   },
// }))

interface EditorProps {
  editor: EditorJS
  updateEditor: (content: OutputData) => void
  handleSave: () => void
  previewUrl: string
  loading: boolean
}

const Editor = ({
  updateEditor,
  editor,
  handleSave,
  previewUrl,
  loading,
}: EditorProps) => {
  // const { classes } = useStyles()

  const [value, setValue] = useState('editor')

  const memoizedNoteEditor = useMemo(
    () => <NoteEditor updateEditor={updateEditor} editor={editor} />,
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
    []
  )
  // const { ref, toggle, fullscreen } = useFullscreen()
  // const fullscreen = true

  // const isMobile = false

  return (
    <div>
      {/* <section
        // align={'center'}
        // justify={'space-between'}
        className={``}
      >
        {isMobile ? (
          <Button
            variant="dark"
            component="a"
            href={previewUrl}
            target="_blank"
            rightIcon={<IconExternalLink size={16} />}
          >
            {' '}
            Preview
          </Button>
        ) : (
          <section>
            <div
            // value={value}
            // onChange={setValue}
            // data={[
            //   { label: 'Editor', value: 'editor' },
            //   // { label: "Preview", value: "preview" },
            // ]}
            />
            <Button
              variant="dark"
              component="a"
              href={previewUrl}
              target="_blank"
              rightIcon={<IconExternalLink size={16} />}
            >
              {' '}
              Preview
            </Button>
          </section>
        )}

        <Button.Group>
          <Button
            onClick={() => handleSave()}
            variant="light"
            loading={loading}
          >
            Save
          </Button>
          <Button onClick={() => {}}>
            {fullscreen ? (
              <IconArrowsMinimize size={16} />
            ) : (
              <IconArrowsMaximize size={16} />
            )}
          </Button>
        </Button.Group>
      </section> */}

      {value === 'editor' ? memoizedNoteEditor : <Preview data={null} />}
    </div>
  )
}

// Editor.propTypes = {
//   setEditorjs: PropTypes.any,
//   editorjs: PropTypes.any,
//   handleSave: PropTypes.func.isRequired,
//   previewUrl: PropTypes.any,
//   loading: PropTypes.bool.isRequired,
//   initial: PropTypes.any,
// }

export default Editor
