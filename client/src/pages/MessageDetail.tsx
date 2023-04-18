import MessageChatDetail from "../components/MessageDetail";

type Props = {
  isUserLoggedIn: boolean;
};

function MessageDetail({ isUserLoggedIn }: Props) {
  return <MessageChatDetail />;
}

export default MessageDetail;
