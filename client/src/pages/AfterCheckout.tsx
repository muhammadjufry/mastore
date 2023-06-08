import SuccessfullyAfterCheckout from '../components/Checkout/SuccessfullyAfterCheckout'
import ProductLists from '../components/HomePage/ProductLists'

interface Props {
  isUserLoggedIn: boolean
}

function AfterCheckout ({ isUserLoggedIn }: Props) {
  return (
    <>
      <SuccessfullyAfterCheckout isUserLoggedIn={isUserLoggedIn} />
      <ProductLists />
    </>
  )
}

export default AfterCheckout
