import {
  MessageDetailItemsHeader,
  MessageDetailItemsHeaderSvg,
  MessageDetailItemsHeaderText,
  ChatMessageDetail,
  ChatMessageBox,
  MessageChatLists,
  ChatMessageInfo,
  MessageLists,
  ChatInput
} from './index.styles'
import { IconSend } from '@tabler/icons-react'
import { Input, Indicator, Avatar, Group } from '@mantine/core'
import { useNavigate } from 'react-router-dom'

import BlankProfilePic from '../../assets/images/user-profile-images/empty-profile-picture.jpg'
interface Props {}
function Index ({}: Props) {
  const navigate = useNavigate()
  return (
    <>
      <ChatMessageDetail>
        <MessageDetailItemsHeader>
          <MessageDetailItemsHeaderSvg onClick={() => { navigate(-1) }} />
          <MessageDetailItemsHeaderText>
            Profile name
          </MessageDetailItemsHeaderText>
          <Group position="center">
            <Indicator color="green">
              <Avatar color="cyan">MJ</Avatar>
            </Indicator>
          </Group>
        </MessageDetailItemsHeader>
        <ChatMessageBox>
          <MessageChatLists>
            <li>
              <img src={BlankProfilePic} alt="empty-profile-picture" />
              <ChatMessageInfo>
                <span className="chatMessageProfileName">Profile Name</span>
                <MessageLists>
                  <li>
                    <p className="messageInfo">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sed, libero.
                    </p>
                  </li>
                  <li>
                    <p className="messageInfo">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sed, libero.
                    </p>
                    <span>19:52PM</span>
                  </li>
                </MessageLists>
              </ChatMessageInfo>
            </li>
            <li>
              <img src={BlankProfilePic} alt="empty-profile-picture" />
              <ChatMessageInfo>
                <span className="chatMessageProfileName">Profile Name</span>
                <MessageLists>
                  <li>
                    <p className="messageInfo">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sed, libero.
                    </p>
                  </li>
                  <li>
                    <p className="messageInfo">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sed, libero.
                    </p>
                    <span>19:52PM</span>
                  </li>
                </MessageLists>
              </ChatMessageInfo>
            </li>
            <li>
              <img src={BlankProfilePic} alt="empty-profile-picture" />
              <ChatMessageInfo>
                <span className="chatMessageProfileName">Profile Name</span>
                <MessageLists>
                  <li>
                    <p className="messageInfo">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sed, libero.
                    </p>
                  </li>
                  <li>
                    <p className="messageInfo">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sed, libero.
                    </p>
                    <span>19:52PM</span>
                  </li>
                </MessageLists>
              </ChatMessageInfo>
            </li>
            <li>
              <img src={BlankProfilePic} alt="empty-profile-picture" />
              <ChatMessageInfo>
                <span className="chatMessageProfileName">Profile Name</span>
                <MessageLists>
                  <li>
                    <p className="messageInfo">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sed, libero.
                    </p>
                  </li>
                  <li>
                    <p className="messageInfo">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sed, libero.
                    </p>
                    <span>19:52PM</span>
                  </li>
                </MessageLists>
              </ChatMessageInfo>
            </li>
            <li className="user">
              <img src={BlankProfilePic} alt="empty-profile-picture" />
              <ChatMessageInfo>
                <span className="chatMessageProfileName">Profile Name</span>
                <MessageLists>
                  <li>
                    <p className="messageInfo">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sed, libero.
                    </p>
                  </li>
                  <li>
                    <p className="messageInfo">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sed, libero.
                    </p>
                    <span>19:52PM</span>
                  </li>
                </MessageLists>
              </ChatMessageInfo>
            </li>
            <li>
              <img src={BlankProfilePic} alt="empty-profile-picture" />
              <ChatMessageInfo>
                <span className="chatMessageProfileName">Profile Name</span>
                <MessageLists>
                  <li>
                    <p className="messageInfo">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sed, libero.
                    </p>
                  </li>
                  <li>
                    <p className="messageInfo">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sed, libero.
                    </p>
                    <span>19:52PM</span>
                  </li>
                </MessageLists>
              </ChatMessageInfo>
            </li>
            <li>
              <img src={BlankProfilePic} alt="empty-profile-picture" />
              <ChatMessageInfo>
                <span className="chatMessageProfileName">Profile Name</span>
                <MessageLists>
                  <li>
                    <p className="messageInfo">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sed, libero.
                    </p>
                  </li>
                  <li>
                    <p className="messageInfo">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sed, libero.
                    </p>
                    <span>19:52PM</span>
                  </li>
                </MessageLists>
              </ChatMessageInfo>
            </li>
          </MessageChatLists>
        </ChatMessageBox>
      </ChatMessageDetail>
      <ChatInput>
        <Input placeholder="Type message to send" />
        <button>
          <IconSend size={15} />
        </button>
      </ChatInput>
    </>
  )
}

export default Index
