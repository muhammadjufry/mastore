import UserCart from "../components/Cart";

type Props = {
  isUserLoggedIn: boolean;
};

function Cart({ isUserLoggedIn }: Props) {
  return <UserCart isUserLoggedIn={isUserLoggedIn} />;
}

export default Cart;
