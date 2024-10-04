import EditorJS, { OutputData } from '@editorjs/editorjs'
// import {
//   Alert,
//   Blockquote,
//   Box,
//   Container,
//   Divider,
//   Flex,
//   Image,
//   List,
//   Paper,
//   SimpleGrid,
//   Table,
// } from '@mantine/core'
// import { IconAlertCircle } from '@tabler/icons-react'
// import Output from 'editorjs-react-renderer'
// import PropTypes from 'prop-types'
const Preview = ({ data }: { data: OutputData | null }) => {
  const config = {
    table: {
      disableDefaultStyle: true,
    },
    delimiter: {
      disableDefaultStyle: true,
    },
  }
  /* eslint-disable-next-line react/prop-types, no-unused-vars */
  const CustomParagraphRenderer = ({ data, style, classNames, config }) => {
    return <div></div>
    // return <Divider mt={'xs'} mb={'xs'} />
  }
  const CustomQuoteRenderer = ({ data, style, classNames, config }) => {
    // console.log(data);
    const formattedContent = data?.text.replace(/&nbsp;/g, '<br/>')
    return (
      <div></div>
      // <Flex w={'100%'} className="static">
      //   <Blockquote cite={data?.caption}>
      //     <div dangerouslySetInnerHTML={{ __html: formattedContent }} />
      //   </Blockquote>
      // </Flex>
    )
  }
  const CustomListRenderer = ({ data, style, classNames, config }) => {
    const renderList = (items) => {
      return (
        <div></div>
        // <List type={data?.style} mt={'3%'} mb={'3%'}>
        //   {items.map((item, index) => (
        //     <List.Item key={index} style={{ color: 'black' }}>
        //       {item.content}
        //       {item.items.length > 0 && renderList(item.items)}
        //     </List.Item>
        //   ))}
        // </List>
      )
    }
    return renderList(data.items)
  }
  const CustomImageRender = ({ data, style, classNames, config }) => {
    return (
      <div></div>
      // <Paper
      //   maw={'100%'}
      //   mt={15}
      //   mb={15}
      //   bg={data?.withBackground ? '#cdd1e0' : 'none'}
      //   withBorder={data?.withBorder}
      // >
      //   <Box
      //     maw={
      //       data?.withBackground ? '400px' : data?.stretched ? '100%' : '700px'
      //     }
      //     mx="auto"
      //     p={15}
      //   >
      //     <Image
      //       radius="md"
      //       src={data?.file?.url}
      //       alt={data?.file?.url}
      //       caption={data?.caption}
      //       className="previewImage"
      //     />
      //   </Box>
      // </Paper>
    )
  }
  const customWarning = ({ data, style, classNames, config }) => {
    // console.log(data);
    return (
      <div style={{ margin: '20px 0' }}>
        {/* <Alert
          icon={<IconAlertCircle size="1rem" />}
          title={data?.title}
          color="yellow"
          variant="filled"
        >
          {data?.message}
        </Alert> */}
      </div>
    )
  }
  const CustomTableRenderer = ({ data, style, classNames, config }) => {
    // Generate table rows dynamically from data
    const rows = data?.content?.map((row, rowIndex) => (
      <tr key={rowIndex}>
        {row.map((cell, cellIndex: number) => (
          <td key={cellIndex} style={{ color: 'black' }}>
            {cell}
          </td>
        ))}
      </tr>
    ))
    return (
      <div></div>
      // <Table
      //   withBorder
      //   withColumnBorders
      //   style={style}
      //   classNames={classNames}
      //   {...config}
      //   mt={'3%'}
      //   mb={'3%'}
      // >
      //   <thead>
      //     <tr>
      //       {data.withHeadings &&
      //         data.content[0].map((heading, index) => (
      //           <th key={index} style={{ color: 'black' }}>
      //             {heading}
      //           </th>
      //         ))}
      //     </tr>
      //   </thead>
      //   <tbody>
      //     {/* If headings are present, skip the first row */}
      //     {data.withHeadings ? rows.slice(1) : rows}
      //   </tbody>
      // </Table>
    )
  }
  const CustomColumns = ({ data, style, classNames, config }) => {
    return (
      <div></div>
      // <SimpleGrid
      //   cols={data?.cols?.length}
      //   spacing="md"
      //   breakpoints={[
      //     { maxWidth: 'sm', cols: 2, spacing: 'sm' },
      //     { maxWidth: 'xs', cols: 1, spacing: 'sm' },
      //   ]}
      // >
      //   {data?.cols?.map((col, index) => (
      //     <Box key={index} style={{ color: 'black' }}>
      //       <Output
      //         data={unflattenTableContent(col)}
      //         config={config}
      //         renderers={renderers}
      //         // style={style}
      //       />
      //     </Box>
      //   ))}
      // </SimpleGrid>
    )
  }
  const renderers = {
    separator: CustomParagraphRenderer,
    quote: CustomQuoteRenderer,
    warning: customWarning,
    image: CustomImageRender,
    list: CustomListRenderer,
    table: CustomTableRenderer,
    columns: CustomColumns,
  }
  const unflattenTableContent = (data: OutputData | null) => {
    return {
      ...data,
      blocks: data?.blocks.map((block) => {
        if (block.type === 'table') {
          return {
            ...block,
            data: {
              ...block.data,
              content: block.data.content.reduce((acc, val, index) => {
                const rowIndex = Math.floor(index / 5) // Assuming each row has 5 cells
                if (!acc[rowIndex]) {
                  acc[rowIndex] = []
                }
                acc[rowIndex].push(val)
                return acc
              }, []),
            },
          }
        } else {
          return block
        }
      }),
    }
  }
  const unflattenedData = unflattenTableContent(data)
  return (
    <div></div>
    // <Container
    //   fluid
    //   w={'100%'}
    //   h={'100%'}
    //   p={0}
    //   style={{ borderRadius: '0px !important' }}
    // >
    //   <Paper
    //     bg={'white'}
    //     className="Reavpages-preview"
    //     radius={0}
    //     style={{ overflowY: 'auto' }}
    //   >
    //     {data != null && data != undefined && data?.blocks?.length !== 0 ? (
    //       <Output
    //         data={unflattenedData}
    //         config={config}
    //         renderers={renderers}
    //         // style={style}
    //       />
    //     ) : (
    //       <Paper bg={'white'} className="Reavpages-preview" p={0}></Paper>
    //     )}
    //   </Paper>
    // </Container>
  )
}
export default Preview
