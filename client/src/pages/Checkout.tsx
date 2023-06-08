import UserCheckout from '../components/Checkout'

interface Props {
  isUserLoggedIn: boolean
}

function Checkout ({ isUserLoggedIn }: Props) {
  return <UserCheckout isUserLoggedIn={isUserLoggedIn} />
}

export default Checkout
