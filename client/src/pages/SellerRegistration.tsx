import BecomeSellerRegistration from "../components/BecomeSeller/Registration";

type Props = {
  isUserLoggedIn: boolean;
};

function SellerRegistration({ isUserLoggedIn }: Props) {
  return <BecomeSellerRegistration />;
}

export default SellerRegistration;
