import MessageLists from '../components/Message'

interface Props {
  isUserLoggedIn: boolean
}

function Message ({ isUserLoggedIn }: Props) {
  return <MessageLists />
}

export default Message
