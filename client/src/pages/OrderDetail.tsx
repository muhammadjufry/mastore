import OrderDetailItem from '../components/OrderDetail'

interface Props {
  isUserLoggedIn: boolean
}
function OrderDetail ({ isUserLoggedIn }: Props) {
  return <OrderDetailItem />
}

export default OrderDetail
