import OrderListItems from "../components/Order";

type Props = {
  isUserLoggedIn: boolean;
};

function Order({ isUserLoggedIn }: Props) {
  return <OrderListItems />;
}

export default Order;
