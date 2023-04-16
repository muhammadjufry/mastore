import styled from "styled-components";

const Cart = styled.div`
  height: 100vh;
  justify-content: space-between;
`;

const RowOne = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  svg {
    width: 25px;
    height: 25px;
    fill: black;
  }
  span {
    font-size: 17px;
    font-weight: 600;
  }
`;

const CartIcon = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  background-color: white;
  padding: 7px;
  border-radius: 5px;
`;

const CartItemsAmount = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 2px;
  right: 2px;
  font-size: 12px;
  background-color: black;
  color: white;
  padding: 1px 3px;
  border-radius: 6px;
`;

const CartItems = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  li {
    display: flex;
    align-items: center;
    gap: 13px;
    background-color: rgb(250, 250, 250);
    padding: 15px;
    height: 100px;
  }
`;

const CartItemLeftSection = styled.div`
  height: 100%;
  img {
    width: 100%;
    cursor: pointer;
    height: 100%;
    object-fit: contain;
    max-width: 80px;
    background-color: white;
  }
`;

const CartItemCenterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 15px;
`;

const CartItemTitle = styled.div`
  font-weight: bold;
`;

const CartItemVariants = styled.div`
  color: grey;
  font-size: 13.5px;
`;

const IemLength = styled.div`
  font-weight: bold;
`;

const CartItemRightSection = styled.div`
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

const RowTwo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CartItemsTotal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 5px;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  div > span {
    font-size: 14px;
    font-weight: 500;
  }
`;

const CartItemPrice = styled.div`
  font-weight: 600;
  font-size: 15px;
`;

const CartItemsTotalRightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const CartBuyNowBtn = styled.div`
  width: 100%;
  background-color: black;
  text-align: center;
  margin-bottom: 20px;
  color: white;
  cursor: pointer;
  padding: 15px;
  border-radius: 30px;
  outline: none;
  font-size: 14px;
  border: none;

  @media (min-width: 768px) {
    width: fit-content;
    border-radius: 5px;
    margin-left: auto;
    padding: 10px 15px;
  }
`;

export {
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
  CartItemTitle,
  CartItemVariants,
  IemLength,
  CartItemsTotal,
  CartItemPrice,
  CartItemsTotalRightSection,
  CartBuyNowBtn,
};
