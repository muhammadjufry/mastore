import styled from "styled-components";

const CheckoutItemsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  li {
    display: flex;
    align-items: center;
    gap: 13px;
    padding: 15px;
    height: 100px;
    background-color: rgb(250, 250, 250);
  }
`;

const CheckoutItemLeftSection = styled.div`
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    max-width: 80px;
    cursor: pointer;
    background-color: white;
  }
`;

const CheckoutItemCenterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 15px;
`;

const CheckoutItemTitle = styled.div`
  font-weight: bold;
`;

const CheckoutItemVariants = styled.div`
  color: grey;
  font-size: 13.5px;
`;

const CheckoutItemPrice = styled.div`
  font-weight: bold;
`;

const CheckoutItemRightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  align-self: end;
  margin-bottom: 8px;
  margin-left: auto;
  svg {
    width: 20px;
    height: 20px;
    fill: black;
  }
`;

const CheckoutShippingMethodLists = styled.div`
  display: flex;
  margin-top: 16px;
  flex-direction: column;
  gap: 16px;
  li {
    display: flex;
    align-items: center;
    border: 1px solid grey;
    border-radius: 10px;
    padding: 7px 15px;
    gap: 13px;
  }
`;

const CheckoutShippingMethodLeftSection = styled.div`
  height: 50px;
  img {
    width: 50px;
    filter: drop-shadow(0 2px 10px rgba(0, 0, 0, 0.1));
    height: 50px;
    object-fit: contain;
    border-radius: 10px;
  }
`;

const CheckoutShippingMethodCenterSection = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 15px;
`;

const ShippingMethodName = styled.div`
  font-weight: bold;
`;

const ShippingMethodDeliveryDays = styled.div`
  font-size: 13px;
  color: grey;
`;

const CheckoutShippingMethodRightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  align-self: start;
  font-weight: bold;
  margin-top: 8px;
  margin-left: auto;
`;

const CheckoutPaymentMethodLists = styled.div`
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  gap: 20px;
  li {
    display: flex;
    align-items: center;
    border: 1px solid grey;
    border-radius: 10px;
    padding: 7px 15px;
    gap: 13px;

    img {
      width: 40px;
      height: 40px;
      object-fit: contain;
      border-radius: 10px;
    }
  }
`;

const PaymentMethodName = styled.div`
  font-size: 14px;
`;

const CheckoutItemsTotal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 5px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    span {
      font-size: 14px;
      font-weight: 500;
    }
  }
`;

const CheckoutItemTotalPrice = styled.div`
  font-weight: 600;
  font-size: 15px;
`;

const CheckoutItemTotalRightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const CheckoutBuyNow = styled.div`
  width: 100%;
  background-color: black;
  color: white;
  padding: 15px;
  text-align: center;
  border-radius: 30px;
  outline: none;
  border: none;
  @media (min-width: 768px) {
    width: fit-content;
    border-radius: 5px;
    margin-left: auto;
    padding: 10px 15px;
  }
`;

export {
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
};
