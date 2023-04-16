import SuccessfullyAfterCheckout from "../components/Checkout/SuccessfullyAfterCheckout";
import ProductLists from "../components/HomePage/ProductLists";

type Props = {};

function AfterCheckout({}: Props) {
  return (
    <>
      <SuccessfullyAfterCheckout />
      <ProductLists />
    </>
  );
}

export default AfterCheckout;
