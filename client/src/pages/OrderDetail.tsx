import OrderDetailItem from "../components/OrderDetail";

type Props = {
  isUserLoggedIn: boolean;
};
function OrderDetail({ isUserLoggedIn }: Props) {
  return <OrderDetailItem />;
}

export default OrderDetail;
