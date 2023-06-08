import UserCart from '../components/Cart'

interface Props {
  isUserLoggedIn: boolean
}

function Cart ({ isUserLoggedIn }: Props) {
  return <UserCart isUserLoggedIn={isUserLoggedIn} />
}

export default Cart
