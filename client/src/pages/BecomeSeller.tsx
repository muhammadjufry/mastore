import BecomeSellerDashboard from "../components/BecomeSeller/";

type Props = {
  isUserLoggedIn: boolean;
};

function BecomeSeller({ isUserLoggedIn }: Props) {
  return <BecomeSellerDashboard />;
}

export default BecomeSeller;
