import React from 'react'
import Editor from './Editor'
import {
  ActionIcon,
  Avatar,
  Breadcrumbs,
  DEFAULT_THEME,
  Drawer,
  Flex,
  Group,
  Image,
  Paper,
  Stack,
  Text,
  Title,
  createStyles,
} from '@mantine/core'
import { useDocument } from 'react-firebase-hooks/firestore'
import { auth, db } from '../../../../configs/Firebase-config'
import { doc, setDoc, updateDoc } from 'firebase/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useLocation } from 'react-router-dom'
import { IconChevronRight, IconTrashFilled } from '@tabler/icons-react'
import moment from 'moment'
import PageSettings from './PageSettings'
import PageShare from './PageShare'
import EmptySection from '../../../../components/ui/EmptySection/EmptySection'
import PageVersion from './PageVersion'
import PageLock from './PageLock'
import { UploadImage } from '../../../../components/ui/Upload/UploadImage'
import PageDrawer from './PageDrawer'

const customLoader = (
  <svg
    width="54"
    height="54"
    viewBox="0 0 38 38"
    xmlns="http://www.w3.org/2000/svg"
    stroke={DEFAULT_THEME.colors.violet[6]}
  >
    <g fill="none" fillRule="evenodd">
      <g transform="translate(1 1)" strokeWidth="2">
        <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
        <path d="M36 18c0-9.94-8.06-18-18-18">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 18 18"
            to="360 18 18"
            dur="1s"
            repeatCount="indefinite"
          />
        </path>
      </g>
    </g>
  </svg>
)

const useStyles = createStyles((theme) => ({
  crumbsBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px 0',
    margin: '0 15px',
    borderBottom: '1px solid',
    borderColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[5]
        : theme.colors.gray[3],
    '& > p': {
      fontWeight: 'bold',
    },
  },
}))

const convertDate = (date) => {
  return moment(date).format('DD/MM/YYYY hh:mm A')
}

const Page = () => {
  const [user] = useAuthState(auth)

  const { classes } = useStyles()

  const location = useLocation().pathname
  const path = location.split('/')
  const workspaceId = path[3]
  const pageId = path[5]

  const pageRef = doc(
    db,
    'users',
    user?.uid,
    'workspaces',
    workspaceId,
    'pages',
    pageId
  )

  const workspaceDocRef = doc(db, 'users', user?.uid, 'workspaces', workspaceId)

  const staticPageRef = doc(
    db,
    'staticPages',
    user?.uid,
    'workspaces',
    workspaceId,
    'pages',
    pageId
  )

  const [value, loading, error] = useDocument(pageRef)

  const [workspaceValue, workspaceLoading, workspaceError] =
    useDocument(workspaceDocRef)

  const [editorjs, setEditorjs] = React.useState({})
  const [saving, setSaving] = React.useState(false)

  const subdomain = workspaceValue?.data()?.subdomain?.subdomain
  const customDomain = workspaceValue?.data()?.customDomain?.domain
  // Determine the domain based on customDomain, subdomain, and environment URL
  const domain = customDomain || subdomain || import.meta.env.VITE_PAGE_URL

  // Construct the previewUrl using the determined domain, workspace uniqueId, and slug
  const previewUrl = `${'https://' + domain}/${
    workspaceValue?.data()?.uniqueId
  }/${value?.data()?.slug}`

  const flattenedContent = {
    ...editorjs,
    blocks: editorjs?.blocks?.map((block) => {
      if (block.type === 'table') {
        return {
          ...block,
          data: {
            ...block.data,
            content: block.data.content.flat(),
          },
        }
      } else {
        return block
      }
    }),
  }

  const flattenedOldContent = {
    ...value?.data()?.content,
    blocks: value?.data()?.content?.blocks?.map((block) => {
      if (block.type === 'table') {
        return {
          ...block,
          data: {
            ...block.data,
            content: block.data.content.flat(),
          },
        }
      } else {
        return block
      }
    }),
  }

  const handleSave = async () => {
    setSaving(true)
    try {
      await setDoc(doc(pageRef, 'history', new Date().getTime().toString()), {
        content: flattenedOldContent,
        updated: new Date(),
      }).then(async () => {
        await updateDoc(pageRef, {
          content: flattenedContent,
          updated: new Date(),
        }).then(async () => {
          await updateDoc(staticPageRef, {
            content: flattenedContent,
            updated: new Date(),
          }).then(() => {
            setSaving(false)
            console.log('saved')
          })
        })
      })
    } catch (error) {
      console.log(flattenedContent)
      console.log(error)
      setSaving(false)
    }
  }

  const handleSubmitImage = (image) => {
    updateDoc(pageRef, {
      coverImage: image[0].src,
    }).then(async () => {
      await updateDoc(staticPageRef, {
        coverImage: image[0].src,
      })
    })
  }

  const handleDeleteImage = () => {
    updateDoc(pageRef, {
      coverImage: null,
    }).then(async () => {
      await updateDoc(staticPageRef, {
        coverImage: null,
      })
    })
  }

  if (error || workspaceError) {
    return <div>error</div>
  }

  if (loading || workspaceLoading) {
    return (
      <Stack p="md" m="auto" w="fit-content">
        {customLoader}
      </Stack>
    )
  }

  if (value?.exists() === false) {
    return (
      <EmptySection
        text="This page does not exist. Please create a new page."
        title="Oops!"
        src="https://res.cloudinary.com/dg8os5pul/image/upload/v1701549352/Untitled_design_geqkyu.png"
      />
    )
  }

  return (
    <Stack style={{ flex: 1 }}>
      <Stack className={classes.crumbsBox}>
        <Breadcrumbs separator={<IconChevronRight size="18px" />} mt="xs">
          {[value?.data().workspace, value?.data().title].map((item) => (
            <Text fw="bold" tt="capitalize" key={item}>
              {item}
            </Text>
          ))}
        </Breadcrumbs>
        <Flex gap="xs">
          <PageVersion
            pageId={pageId}
            workspaceId={workspaceId}
            currentData={flattenedContent}
          />
          <PageShare
            pageTitle={value?.data().title}
            pageLink={value?.data().link || previewUrl}
          />
          <PageSettings
            workspaceId={workspaceId}
            pageId={pageId}
            pageTitle={value?.data().title}
            pageRef={pageRef}
            pageLink={value?.data().link}
            pageAccess={value?.data().access}
            workspaceDocRef={workspaceDocRef}
            userUid={user?.uid}
            previewLink={window.location.origin + previewUrl}
            userToken={user?.accessToken}
            pageWebsite={value?.data().website}
            pageContent={value?.data().content}
            pagePassword={value?.data().password}
          />
        </Flex>
      </Stack>
      <Stack mx={10}>
        <Title order={1} tt="capitalize">
          {value?.data().title}
        </Title>
        <Group>
          <Text size="sm" w="110px">
            Add Cover
          </Text>
          {value?.data().coverImage ? (
            <Flex
              justify={'flex-start'}
              align={'end'}
              gap={5}
              w={'70%'}
              pos={'relative'}
            >
              <Image
                src={value?.data().coverImage}
                alt={value?.data().title}
                height={'80px'}
              />
              <div
                style={{
                  bottom: 0,
                  position: 'absolute',
                  display: 'flex',
                  gap: 5,
                  alignItems: 'end',
                }}
              >
                <UploadImage
                  color="dark"
                  variant="white"
                  left={true}
                  size={'xs'}
                  x={8}
                  handleSubmitImage={handleSubmitImage}
                >
                  Change
                </UploadImage>
                <ActionIcon
                  w={28}
                  h={28}
                  color="red"
                  variant="filled"
                  onClick={handleDeleteImage}
                >
                  <IconTrashFilled size={16} />
                </ActionIcon>
              </div>
            </Flex>
          ) : (
            <UploadImage
              color="gray"
              variant="light"
              left={true}
              x={8}
              handleSubmitImage={handleSubmitImage}
            >
              Upload
            </UploadImage>
          )}
        </Group>
        <Group>
          <Text size="sm" w="100px">
            Created by
          </Text>
          <Flex gap="xs" align="center">
            <Avatar radius={'xl'} size={'sm'} src={value?.data().photoUrl} />
            <Text size="sm">{value?.data().createdBy}</Text>
          </Flex>
        </Group>
        <Group>
          <Text size="sm" w="110px">
            Last Modified
          </Text>
          <Text size="sm">{convertDate(value?.data().updated.toDate())}</Text>
        </Group>
      </Stack>

      <Editor
        editorjs={value?.data().content}
        handleSave={handleSave}
        loading={saving}
        setEditorjs={setEditorjs}
        previewUrl={previewUrl}
      />
    </Stack>
  )
}

export default Page
