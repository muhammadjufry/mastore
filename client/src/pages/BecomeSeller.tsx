import BecomeSellerDashboard from '../components/BecomeSeller/'

interface Props {
  isUserLoggedIn: boolean
}

function BecomeSeller ({ isUserLoggedIn }: Props) {
  return <BecomeSellerDashboard />
}

export default BecomeSeller
