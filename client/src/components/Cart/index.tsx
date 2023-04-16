import ArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LaptopImg from "../../assets/images/product-images/laptop.webp";
import {
  Cart,
  RowOne,
  CartHeader,
  CartIcon,
  CartItems,
  CartItemsAmount,
  CartItemLeftSection,
  CartItemCenterSection,
  CartItemRightSection,
  RowTwo,
  CartItemsTotal,
  CartItemTitle,
  CartItemVariants,
  IemLength,
  CartItemPrice,
  CartItemsTotalRightSection,
  CartBuyNowBtn,
} from "./index.styles";
import PageHeader from "../PageHeader";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Cart>
      <PageHeader pageName="Cart" withCartIcon={true} />
      <br />
      <div style={{ padding: "0 20px" }}>
        <div className="container">
          <RowOne>
            <CartItems>
              <li>
                <CartItemLeftSection>
                  <img src={LaptopImg} alt="" />
                </CartItemLeftSection>
                <CartItemCenterSection>
                  <CartItemTitle>Headset</CartItemTitle>
                  <CartItemVariants>Variants: Pink</CartItemVariants>
                  <CartItemPrice>$100</CartItemPrice>
                </CartItemCenterSection>
                <CartItemRightSection>
                  <RemoveCircleIcon />
                  <IemLength>1</IemLength>
                  <AddCircleIcon />
                </CartItemRightSection>
              </li>
              <li>
                <CartItemLeftSection>
                  <img src={LaptopImg} alt="" />
                </CartItemLeftSection>
                <CartItemCenterSection>
                  <CartItemTitle>Headset</CartItemTitle>
                  <CartItemVariants>Variants: Pink</CartItemVariants>
                  <CartItemPrice>$100</CartItemPrice>
                </CartItemCenterSection>
                <CartItemRightSection>
                  <RemoveCircleIcon />
                  <IemLength>1</IemLength>
                  <AddCircleIcon />
                </CartItemRightSection>
              </li>
              <li>
                <CartItemLeftSection>
                  <img src={LaptopImg} alt="" />
                </CartItemLeftSection>
                <CartItemCenterSection>
                  <CartItemTitle>Headset</CartItemTitle>
                  <CartItemVariants>Variants: Pink</CartItemVariants>
                  <CartItemPrice>$100</CartItemPrice>
                </CartItemCenterSection>
                <CartItemRightSection>
                  <RemoveCircleIcon />
                  <IemLength>1</IemLength>
                  <AddCircleIcon />
                </CartItemRightSection>
              </li>
            </CartItems>
          </RowOne>
          <RowTwo>
            <CartItemsTotal>
              <div>
                <span>Subtotal</span>
                <CartItemPrice>$100</CartItemPrice>
              </div>
              <div>
                <span>Shipping</span>
                <CartItemPrice>$5</CartItemPrice>
              </div>
              <div>
                <span>Total</span>
                <CartItemsTotalRightSection>
                  <span>(1 item)</span>
                  <CartItemPrice>$105</CartItemPrice>
                </CartItemsTotalRightSection>
              </div>
            </CartItemsTotal>
            <Link to="/user/checkout">
              <CartBuyNowBtn>Proceed To Checkout</CartBuyNowBtn>
            </Link>
          </RowTwo>
        </div>
      </div>
    </Cart>
  );
};

export default Index;
