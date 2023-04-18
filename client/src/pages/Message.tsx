import MessageLists from "../components/Message";

type Props = {
  isUserLoggedIn: boolean;
};

function Message({ isUserLoggedIn }: Props) {
  return <MessageLists />;
}

export default Message;
