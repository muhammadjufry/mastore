import SellerPageHeader from '../SellerPageHeader'
import { Link } from 'react-router-dom'
import { Autocomplete, Text } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'
import {
  Chat,
  ChatMessage,
  ChatMessageItem,
  ChatMessageImg,
  ChatProfileAndMessageInfo,
  ChatMessageHeader,
  ChatMessageStatus,
  ChatProfileName,
  ChatProfileDescription
} from './index.styles'
import BlankProfilePic from '../../assets/images/user-profile-images/empty-profile-picture.jpg'
import { useState } from 'react'

interface Props {
  isUserLoggedIn: boolean
}

function Index ({ isUserLoggedIn }: Props) {
  const [value, setValue] = useState('')
  const searchListdata = value.trim().length > 0 ? ['laptop', 'macbook'] : []
  return (
    <>
      <SellerPageHeader pageName="Chat Message" />'
      <div className="pageDefaultStyle">
        <div className="container">
          <Autocomplete
            styles={() => ({
              input: {
                padding: '16px',
                paddingLeft: '35px !important'
              }
            })}
            value={value}
            size="xs"
            radius="lg"
            icon={<IconSearch size="1rem" style={{ marginLeft: '10px' }} />}
            onChange={setValue}
            placeholder="Search message..."
            data={searchListdata}
          />
          <br />
          <Text fw={500} fz="sm">
            All chats:
          </Text>
          <br />
          <ChatMessage>
            <Link to="/seller/message-detail/test123">
              <ChatMessageItem>
                <ChatMessageImg
                  src={BlankProfilePic}
                  alt="empty-profile-picture"
                />
                <ChatProfileAndMessageInfo>
                  <ChatMessageHeader>
                    <ChatProfileName>Profile name</ChatProfileName>
                    <ChatMessageStatus>3</ChatMessageStatus>
                  </ChatMessageHeader>
                  <ChatProfileDescription>
                    Lorem ipsum, dolor sit amet consectetur adipisicing...
                  </ChatProfileDescription>
                </ChatProfileAndMessageInfo>
              </ChatMessageItem>
            </Link>
            <Link to="/seller/message-detail/test123">
              <ChatMessageItem>
                <ChatMessageImg
                  src={BlankProfilePic}
                  alt="empty-profile-picture"
                />
                <ChatProfileAndMessageInfo>
                  <ChatMessageHeader>
                    <ChatProfileName>Profile name</ChatProfileName>
                    <ChatMessageStatus>3</ChatMessageStatus>
                  </ChatMessageHeader>
                  <ChatProfileDescription>
                    Lorem ipsum, dolor sit amet consectetur adipisicing...
                  </ChatProfileDescription>
                </ChatProfileAndMessageInfo>
              </ChatMessageItem>
            </Link>
            <Link to="/seller/message-detail/test123">
              <ChatMessageItem>
                <ChatMessageImg
                  src={BlankProfilePic}
                  alt="empty-profile-picture"
                />
                <ChatProfileAndMessageInfo>
                  <ChatMessageHeader>
                    <ChatProfileName>Profile name</ChatProfileName>
                    <ChatMessageStatus>3</ChatMessageStatus>
                  </ChatMessageHeader>
                  <ChatProfileDescription>
                    Lorem ipsum, dolor sit amet consectetur adipisicing...
                  </ChatProfileDescription>
                </ChatProfileAndMessageInfo>
              </ChatMessageItem>
            </Link>
            <Link to="/seller/message-detail/test123">
              <ChatMessageItem>
                <ChatMessageImg
                  src={BlankProfilePic}
                  alt="empty-profile-picture"
                />
                <ChatProfileAndMessageInfo>
                  <ChatMessageHeader>
                    <ChatProfileName>Profile name</ChatProfileName>
                    <ChatMessageStatus>3</ChatMessageStatus>
                  </ChatMessageHeader>
                  <ChatProfileDescription>
                    Lorem ipsum, dolor sit amet consectetur adipisicing...
                  </ChatProfileDescription>
                </ChatProfileAndMessageInfo>
              </ChatMessageItem>
            </Link>
          </ChatMessage>
        </div>
      </div>
    </>
  )
}

export default Index
