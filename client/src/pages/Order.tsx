import OrderListItems from '../components/Order'

interface Props {
  isUserLoggedIn: boolean
}

function Order ({ isUserLoggedIn }: Props) {
  return <OrderListItems />
}

export default Order
