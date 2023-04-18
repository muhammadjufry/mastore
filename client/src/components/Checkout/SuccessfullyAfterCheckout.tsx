import ArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import {
  SuccessfullyAfterCheckoutHeader,
  SuccessfullyAfterCheckoutIcon,
  SuccessfullyAfterCheckoutBody,
  SuccessfullyAfterCheckoutCheckOrder,
} from "./successfullyAfterCheckout.styles";
import DoneIcon from "../../assets/icons/successfully-after-checkout-done/done.webp";
import { Link } from "react-router-dom";
import PageHeader from "../PageHeader";

type Props = {
  isUserLoggedIn: boolean;
};

const SuccessfullyAfterCheckout = ({ isUserLoggedIn }: Props) => {
  return (
    <>
      <PageHeader
        pageName="Done after checkout"
        withCartIcon={true}
        isUserLoggedIn={isUserLoggedIn}
      />
      <div style={{ padding: "0 20px" }}>
        <div className="container">
          <br />
          <SuccessfullyAfterCheckoutBody>
            <img src={DoneIcon} alt="" />
            <h4>
              You have been placed an order with 5 items, and you have payed
              $105
            </h4>
          </SuccessfullyAfterCheckoutBody>
          <br />
          <Link to="/user/order/order-detail/laptop123">
            <SuccessfullyAfterCheckoutCheckOrder>
              Check order
            </SuccessfullyAfterCheckoutCheckOrder>
          </Link>
        </div>
      </div>
      <br />
    </>
  );
};

export default SuccessfullyAfterCheckout;
