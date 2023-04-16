import styled from "styled-components";

export const OrderDetailTitle = styled.h4`
  font-size: 14.5px;
`;

export const OrderDetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
  background-color: aliceblue;
  padding: 15px;
  height: 100px;
`;

export const OrderDetailItemLeft = styled.div`
  height: 100%;
`;

export const OrderDetailItemLeftImage = styled.img`
  width: 100%;
  height: 100%;
  max-width: 80px;
  background-color: white;
  object-fit: contain;
`;

export const OrderDetailItemCenter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 15px;
`;

export const OrderDetailItemTitle = styled.div`
  font-weight: bold;
`;

export const OrderDetailItemVariants = styled.div`
  color: grey;
  font-size: 13.5px;
`;

export const OrderDetailItemPrice = styled.div`
  font-weight: bold;
`;

export const ItemLength = styled.div`
  margin-left: auto;
  margin-top: auto;
  font-size: 13px;
`;

export const OrderMethodTitle = styled.h4`
  margin-top: 20px;
  margin-bottom: 12px;
`;

export const OrderMethodTitleFirst = styled(OrderMethodTitle)`
  margin-top: 0;
`;

export const OrderMethodLists = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const OrderMethodListsItem = styled.li`
  display: flex;
  align-items: center;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 10px;
  gap: 13px;
`;

export const OrderMethodListsItemCenter = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 15px;
`;

export const OrderMethodDesc = styled.div`
  font-size: 12px;
  color: grey;
`;

export const CheckoutShippingMethodLists = styled.ul`
  display: flex;
  margin-top: 16px;
  flex-direction: column;
  gap: 16px;
`;

export const CheckoutShippingMethodListsItem = styled.li`
  display: flex;
  align-items: center;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 7px 15px;
  gap: 13px;

  .left {
    height: 40px;

    img {
      width: 40px;
      filter: drop-shadow(0 2px 10px rgba(0, 0, 0, 0.1));
      height: 40px;
      object-fit: contain;
      border-radius: 10px;
    }
  }

  .center {
    display: flex;
    flex-direction: column;
    font-size: 14px;
  }

  .right {
    display: flex;
    align-items: center;
    gap: 5px;
    align-self: start;
    font-weight: bold;
    margin-top: 8px;
    margin-left: auto;
  }
`;

export const ShippingMethodName = styled.div`
  font-weight: bold;
`;

export const ShippingMethodDeliveryDays = styled.div`
  font-size: 11px;
  color: grey;
`;

export const CheckoutPaymentMethodLists = styled.ul`
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  gap: 20px;
`;

export const CheckoutPaymentMethodListItem = styled.li`
  display: flex;
  align-items: center;
  border: 1px solid grey;
  border-radius: 5px;
  font-size: 13.5px;
  padding: 7px 15px;
  gap: 13px;
`;

export const CheckoutPaymentMethodListItemIcon = styled.img`
  width: 35px;
  height: 35px;
  object-fit: contain;
  border-radius: 10px;
`;

export const OrderItemTotal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 5px;
`;

export const OrderItemTotalDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const OrderItemTotalSpan = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

export const OrderItemTotalPrice = styled.span`
  font-weight: 600;
  font-size: 15px;
`;

export const OrderItemTotalRight = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const OrderBuyNowButton = styled.button`
  width: 100%;
  background-color: rgb(148, 50, 50);
  color: white;
  padding: 15px;
  border-radius: 30px;
  outline: none;
  border: none;
  cursor: pointer;

  @media (min-width: 768px) {
    width: fit-content;
    border-radius: 5px;
    margin-left: auto;
    padding: 10px 15px;
  }
`;
