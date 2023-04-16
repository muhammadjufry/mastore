import SellerPageHeader from "../SellerPageHeader";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  OrderDetail,
  OrderDetailItem,
  OrderDetailItemLeft,
  OrderDetailItemLeftImage,
  OrderDetailItemCenter,
  OrderDetailItemTitle,
  OrderDetailItemVariants,
  UserOrderItem,
  OrderDetailItemPrice,
  ItemLength,
  OrderMethodLists,
  OrderMethodListsItem,
  OrderMethodListsItemCenter,
  OrderMethodDesc,
  CheckoutShippingMethodLists,
  CheckoutShippingMethodListsItem,
  ShippingMethodName,
  ShippingMethodDeliveryDays,
  CheckoutPaymentMethodLists,
  CheckoutPaymentMethodListItem,
  CheckoutPaymentMethodListItemIcon,
  OrderItemTotal,
  OrderItemTotalDiv,
  OrderItemTotalSpan,
  OrderItemTotalPrice,
  OrderItemTotalRight,
  OrderBuyNowButton,
} from "./index.styles";

import LaptopImg from "../../assets/images/product-images/laptop.webp";

import { Timeline, Text } from "@mantine/core";
import {
  IconMapPin,
  IconPackageImport,
  IconCreditCard,
} from "@tabler/icons-react";

type Props = {};

function Index({}: Props) {
  return (
    <>
      <SellerPageHeader pageName="Order Detail" />
      <div className="pageDefaultStyle">
        <div className="container">
          <OrderDetailItem>
            <OrderDetailItemLeft>
              <OrderDetailItemLeftImage src={LaptopImg} alt="" />
            </OrderDetailItemLeft>
            <OrderDetailItemCenter>
              <OrderDetailItemTitle>Headset</OrderDetailItemTitle>
              <OrderDetailItemVariants>Variants: Pink</OrderDetailItemVariants>
              <UserOrderItem>User: taq-3123</UserOrderItem>
              <OrderDetailItemPrice>$100</OrderDetailItemPrice>
            </OrderDetailItemCenter>
            <ItemLength>1 (Item)</ItemLength>
          </OrderDetailItem>
          <br />
          <Timeline active={3} bulletSize={30} lineWidth={2}>
            <Timeline.Item
              bullet={<IconMapPin size={15} />}
              title="Deliver to:"
            >
              <Text color="dimmed" size="sm">
                Jln Rinjani no 44. Kec banyuwangi Jawa timur Indonesia
              </Text>
            </Timeline.Item>

            <Timeline.Item
              bullet={<IconPackageImport size={15} />}
              title="Shipping method:"
            >
              <Text color="dimmed" size="sm">
                JNE
              </Text>
            </Timeline.Item>
            <Timeline.Item
              bullet={<IconCreditCard size={15} />}
              title="Payment method:"
            >
              <Text color="dimmed" size="sm">
                Credit card and you payed $50
              </Text>
            </Timeline.Item>
          </Timeline>
          <br />
          <OrderItemTotal>
            <OrderItemTotalDiv>
              <OrderItemTotalSpan>Subtotal</OrderItemTotalSpan>
              <OrderItemTotalPrice>$100</OrderItemTotalPrice>
            </OrderItemTotalDiv>
            <OrderItemTotalDiv>
              <OrderItemTotalSpan>Shipping</OrderItemTotalSpan>
              <OrderItemTotalPrice>$5</OrderItemTotalPrice>
            </OrderItemTotalDiv>
            <OrderItemTotalDiv>
              <OrderItemTotalSpan>Total</OrderItemTotalSpan>
              <OrderItemTotalRight>
                <OrderItemTotalSpan>(1 item)</OrderItemTotalSpan>
                <OrderItemTotalPrice className="price">
                  $105
                </OrderItemTotalPrice>
              </OrderItemTotalRight>
            </OrderItemTotalDiv>
          </OrderItemTotal>
          <br />
          <OrderBuyNowButton>
            User still not recevied the order
          </OrderBuyNowButton>
        </div>
      </div>
    </>
  );
}

export default Index;
