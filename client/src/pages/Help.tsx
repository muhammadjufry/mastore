import HelpDashboard from '../components/Help'

interface Props {
  isUserLoggedIn: boolean
}

function Help ({ isUserLoggedIn }: Props) {
  return <HelpDashboard />
}

export default Help
