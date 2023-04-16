import PageHeader from "../PageHeader";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  OrderDetailItem,
  OrderDetailItemLeft,
  OrderDetailItemLeftImage,
  OrderDetailItemCenter,
  OrderDetailItemTitle,
  OrderDetailItemVariants,
  OrderDetailItemPrice,
  ItemLength,
  OrderItemTotal,
  OrderItemTotalDiv,
  OrderItemTotalSpan,
  OrderItemTotalPrice,
  OrderItemTotalRight,
  OrderBuyNowButton,
} from "./index.styles";

import LaptopImg from "../../assets/images/product-images/laptop.webp";
import JneImg from "../../assets/images/shipping-method/jne.png";
import CreditcardImg from "../../assets/images/payment-method/credit-card.svg";

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
      <PageHeader pageName="Order Detail" withCartIcon={true} />
      <div style={{ padding: "0 20px" }}>
        <div
          className="container pageDefaultStyle"
          style={{ padding: "20px 0" }}
        >
          <OrderDetailItem>
            <OrderDetailItemLeft>
              <OrderDetailItemLeftImage src={LaptopImg} alt="" />
            </OrderDetailItemLeft>
            <OrderDetailItemCenter>
              <OrderDetailItemTitle>Headset</OrderDetailItemTitle>
              <div>
                <OrderDetailItemVariants>
                  Variants: Pink
                </OrderDetailItemVariants>
                <OrderDetailItemPrice>$100</OrderDetailItemPrice>
              </div>
            </OrderDetailItemCenter>
            <ItemLength>1 (Item)</ItemLength>
          </OrderDetailItem>
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
          <OrderBuyNowButton
            onClick={() =>
              (window.location.href = "/successfully-after-checkout")
            }
          >
            Cancel order
          </OrderBuyNowButton>
        </div>
      </div>
    </>
  );
}

export default Index;
