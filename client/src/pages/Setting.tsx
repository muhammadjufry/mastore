import AccountSetting from '../components/AccountSetting'

interface Props {
  isUserLoggedIn: boolean
}

function Setting ({ isUserLoggedIn }: Props) {
  return <AccountSetting />
}

export default Setting
