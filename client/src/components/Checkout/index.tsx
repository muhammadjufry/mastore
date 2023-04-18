import PageHeader from "../PageHeader";
import {
  CheckoutItemsList,
  CheckoutItemLeftSection,
  CheckoutItemCenterSection,
  CheckoutItemTitle,
  CheckoutItemVariants,
  CheckoutItemPrice,
  CheckoutItemRightSection,
  CheckoutShippingMethodLists,
  CheckoutShippingMethodLeftSection,
  CheckoutShippingMethodCenterSection,
  ShippingMethodName,
  ShippingMethodDeliveryDays,
  CheckoutShippingMethodRightSection,
  CheckoutPaymentMethodLists,
  PaymentMethodName,
  CheckoutItemsTotal,
  CheckoutItemTotalPrice,
  CheckoutItemTotalRightSection,
  CheckoutBuyNow,
} from "./index.styles";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LaptopImg from "../../assets/images/product-images/laptop.webp";
import JneImg from "../../assets/images/shipping-method/jne.jpg";
import CreditcardImg from "../../assets/images/payment-method/credit-card.svg";
import CodImg from "../../assets/images/payment-method/cod.jpg";
import BanktransferImg from "../../assets/images/payment-method/bank-transfer.svg";
import EwalletImg from "../../assets/images/payment-method/e-wallet.png";
import { forwardRef } from "react";
import { Group, Avatar, Text, Select } from "@mantine/core";
import { Link } from "react-router-dom";

type Props = {
  isUserLoggedIn: boolean;
};

const ShippingMethodOptions = [
  {
    image: JneImg,
    label: "JNE",
    value: "JNE",
    description: "3 - 5 days to arrived $5",
  },
  {
    image: JneImg,
    label: "JNE",
    value: "JNE",
    description: "3 - 5 days to arrived $5",
  },
  {
    image: JneImg,
    label: "JNE",
    value: "JNE",
    description: "3 - 5 days to arrived $5",
  },
  {
    image: JneImg,
    label: "JNE",
    value: "JNE",
    description: "3 - 5 days to arrived $5",
  },
];

const PaymentMethodOptions = [
  {
    image: CreditcardImg,
    label: "Credit Card",
    value: "Credit Card",
    description: "Pay using credit card",
  },
  {
    image: CodImg,
    label: "Cash on delivery",
    value: "Cash on delivery",
    description: "Pay when your order has been arrived",
  },
  {
    image: BanktransferImg,
    label: "Bank Transfer",
    value: "Bank Transfer",
    description: "Pay using bank transfer",
  },
  {
    image: EwalletImg,
    label: "E-wallet",
    value: "E-wallet",
    description: "Pay using E-wallet",
  },
];

interface ItemProps extends React.ComponentPropsWithoutRef<"div"> {
  image: string;
  label: string;
  description: string;
}

const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ image, label, description, ...others }: ItemProps, ref) => (
    <div ref={ref} {...others}>
      <Group noWrap>
        <Avatar src={image} />

        <div>
          <Text size="sm">{label}</Text>
          <Text size="xs" opacity={0.65}>
            {description}
          </Text>
        </div>
      </Group>
    </div>
  )
);

const Index = ({ isUserLoggedIn }: Props) => {
  return (
    <div>
      <PageHeader
        pageName="Checkout"
        withCartIcon={true}
        isUserLoggedIn={isUserLoggedIn}
      />
      <br />
      <div style={{ padding: "0 20px" }}>
        <div
          className="container"
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          <CheckoutItemsList>
            <li>
              <CheckoutItemLeftSection>
                <img src={LaptopImg} alt="" />
              </CheckoutItemLeftSection>
              <CheckoutItemCenterSection>
                <CheckoutItemTitle>Headset</CheckoutItemTitle>
                <CheckoutItemVariants>Variants: Pink</CheckoutItemVariants>
                <CheckoutItemPrice>$100</CheckoutItemPrice>
              </CheckoutItemCenterSection>
              <CheckoutItemRightSection>
                <RemoveCircleIcon />
                <span>1</span>
                <AddCircleIcon />
              </CheckoutItemRightSection>
            </li>
            <li>
              <CheckoutItemLeftSection>
                <img src={LaptopImg} alt="" />
              </CheckoutItemLeftSection>
              <CheckoutItemCenterSection>
                <CheckoutItemTitle>Headset</CheckoutItemTitle>
                <CheckoutItemVariants>Variants: Pink</CheckoutItemVariants>
                <CheckoutItemPrice>$100</CheckoutItemPrice>
              </CheckoutItemCenterSection>
              <CheckoutItemRightSection>
                <RemoveCircleIcon />
                <span>1</span>
                <AddCircleIcon />
              </CheckoutItemRightSection>
            </li>
            <li>
              <CheckoutItemLeftSection>
                <img src={LaptopImg} alt="" />
              </CheckoutItemLeftSection>
              <CheckoutItemCenterSection>
                <CheckoutItemTitle>Headset</CheckoutItemTitle>
                <CheckoutItemVariants>Variants: Pink</CheckoutItemVariants>
                <CheckoutItemPrice>$100</CheckoutItemPrice>
              </CheckoutItemCenterSection>
              <CheckoutItemRightSection>
                <RemoveCircleIcon />
                <span>1</span>
                <AddCircleIcon />
              </CheckoutItemRightSection>
            </li>
          </CheckoutItemsList>
          <Select
            label="Select shipping method:"
            placeholder="Pick one"
            itemComponent={SelectItem}
            data={ShippingMethodOptions}
            searchable
            maxDropdownHeight={400}
            nothingFound="Nobody here"
            filter={(value, item) =>
              item.label?.toLowerCase().includes(value.toLowerCase().trim()) ||
              item.description
                .toLowerCase()
                .includes(value.toLowerCase().trim())
            }
          />
          <Select
            label="Select payment method:"
            placeholder="Pick one"
            itemComponent={SelectItem}
            data={PaymentMethodOptions}
            searchable
            maxDropdownHeight={400}
            nothingFound="Nobody here"
            filter={(value, item) =>
              item.label?.toLowerCase().includes(value.toLowerCase().trim()) ||
              item.description
                .toLowerCase()
                .includes(value.toLowerCase().trim())
            }
          />
          <CheckoutItemsTotal>
            <div>
              <span>Subtotal</span>
              <CheckoutItemTotalPrice>$100</CheckoutItemTotalPrice>
            </div>
            <div>
              <span>Shipping</span>
              <CheckoutItemTotalPrice>$5</CheckoutItemTotalPrice>
            </div>
            <div>
              <span>Total</span>
              <CheckoutItemTotalRightSection>
                <span>(1 item)</span>
                <span>$105</span>
              </CheckoutItemTotalRightSection>
            </div>
          </CheckoutItemsTotal>
          <Link to="/user/successfully-after-checkout">
            <CheckoutBuyNow>Buy Now</CheckoutBuyNow>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
