import MessageChatDetail from '../components/MessageDetail'

interface Props {
  isUserLoggedIn: boolean
}

function MessageDetail ({ isUserLoggedIn }: Props) {
  return <MessageChatDetail />
}

export default MessageDetail
