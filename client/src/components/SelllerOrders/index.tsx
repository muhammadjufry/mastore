import {
  OrderListItems,
  OrderItems,
  OrderItemsLi,
  OrderItemTitle,
  OrderItemVariants,
  UserOrderItem,
  OrderItemPrice,
} from "./index.styles";
import MacbookImg from "../../assets/images/product-images/macbook.webp";
import HeadsetImg from "../../assets/images/product-images/headset.png";
import { Tabs } from "@mantine/core";
import SellerPageHeader from "../SellerPageHeader";
import { Link } from "react-router-dom";

type Props = {};

function index({}: Props) {
  return (
    <>
      <SellerPageHeader pageName="Order" />
      <div className="pageDefaultStyle">
        <div className="container">
          <Tabs
            defaultValue="first"
            styles={() => ({
              tabsList: {
                flexWrap: "nowrap",
              },
              tab: {
                whiteSpace: "normal",
              },
              tabLabel: {
                textAlign: "center",
                lineHeight: "19px",
                fontSize: "12px",
              },
            })}
          >
            <Tabs.List grow>
              <Tabs.Tab value="first">Order Items</Tabs.Tab>
              <Tabs.Tab value="second">Still packing</Tabs.Tab>
              <Tabs.Tab value="third">On Delivery</Tabs.Tab>
              <Tabs.Tab value="fourth">Pass order</Tabs.Tab>
            </Tabs.List>
          </Tabs>
          <OrderItems>
            <Link to="/seller/order-detail/laptop123">
              <OrderItemsLi>
                <div className="left">
                  <img src={MacbookImg} alt="" />
                </div>
                <div className="center">
                  <OrderItemTitle>Headset</OrderItemTitle>
                  <div>
                    <OrderItemVariants className="orderItemVariants">
                      Variants: Pink
                    </OrderItemVariants>
                    <UserOrderItem>User: taq-122</UserOrderItem>
                    <OrderItemPrice className="orderItemPrice">
                      $100
                    </OrderItemPrice>
                  </div>
                </div>
                <div className="right">
                  <span className="itemLength">1 (Item)</span>
                  <button>See&nbsp;Detail</button>
                </div>
              </OrderItemsLi>
            </Link>
            <Link to="/seller/order-detail/laptop123">
              <OrderItemsLi>
                <div className="left">
                  <img src={MacbookImg} alt="" />
                </div>
                <div className="center">
                  <OrderItemTitle>Headset</OrderItemTitle>
                  <div>
                    <OrderItemVariants className="orderItemVariants">
                      Variants: Pink
                    </OrderItemVariants>
                    <UserOrderItem>User: taq-122</UserOrderItem>
                    <OrderItemPrice className="orderItemPrice">
                      $100
                    </OrderItemPrice>
                  </div>
                </div>
                <div className="right">
                  <span className="itemLength">1 (Item)</span>
                  <button>See&nbsp;Detail</button>
                </div>
              </OrderItemsLi>
            </Link>
            <Link to="/seller/order-detail/laptop123">
              <OrderItemsLi>
                <div className="left">
                  <img src={MacbookImg} alt="" />
                </div>
                <div className="center">
                  <OrderItemTitle>Headset</OrderItemTitle>
                  <div>
                    <OrderItemVariants className="orderItemVariants">
                      Variants: Pink
                    </OrderItemVariants>
                    <UserOrderItem>User: taq-122</UserOrderItem>
                    <OrderItemPrice className="orderItemPrice">
                      $100
                    </OrderItemPrice>
                  </div>
                </div>
                <div className="right">
                  <span className="itemLength">1 (Item)</span>
                  <button>See&nbsp;Detail</button>
                </div>
              </OrderItemsLi>
            </Link>
          </OrderItems>
        </div>
      </div>
    </>
  );
}

export default index;
