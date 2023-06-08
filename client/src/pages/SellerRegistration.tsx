import BecomeSellerRegistration from '../components/BecomeSeller/Registration'

interface Props {
  isUserLoggedIn: boolean
}

function SellerRegistration ({ isUserLoggedIn }: Props) {
  return <BecomeSellerRegistration />
}

export default SellerRegistration
