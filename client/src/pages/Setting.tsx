import AccountSetting from "../components/AccountSetting";

type Props = {
  isUserLoggedIn: boolean;
};

function Setting({ isUserLoggedIn }: Props) {
  return <AccountSetting />;
}

export default Setting;
