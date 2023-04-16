import styled from "styled-components";
import ArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

export const OrderListItemsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const OrderListItemsHeaderSvg = styled(ArrowLeftIcon)`
  width: 25px;
  height: 25px;
  fill: black;
`;

export const OrderListItemsHeaderSpan = styled.span`
  font-size: 17px;
  font-weight: 600;
`;

export const OrderListItemsIcon = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  background-color: white;
  padding: 7px;
  border-radius: 5px;
`;

export const OrderListItemsIconSpan = styled.span`
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

export const OrderItemsType = styled.div`
  display: flex;
  align-items: center;
`;

export const OrderItemsTypeLi = styled.li`
  width: 100%;
  text-align: center;
  font-size: 13px;
  border: 1px solid grey;
  border-right: none;
  padding: 5px 11px;
  transition: all 0.2s ease-in;
  cursor: pointer;

  &:last-child {
    border-right: 1px solid grey;
  }

  &:hover {
    background-color: black;
    color: white;
    border-color: black;
  }
`;

export const OrderItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 10px;
`;

export const OrderItemsLi = styled.li`
  display: flex;
  align-items: center;
  gap: 13px;
  background-color: aliceblue;
  padding: 10px 15px;
  position: relative;

  .left {
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      background-color: white;
      max-width: 80px;
    }
  }

  .center {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 15px;

    div {
      display: flex;
      flex-direction: column;
    }
  }

  .right {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    gap: 5px;
    align-self: end;
    margin-left: auto;

    .itemLength {
      font-size: 13px;
    }

    svg {
      width: 20px;
      height: 20px;
      fill: black;
    }

    button {
      border: none;
      outline: none;
      padding: 5px 10px;
      background-color: black;
      color: white;
      border-radius: 5px;
      font-size: 12px;
      transition: all 0.2s ease-in;
      border: 1px solid black;
      cursor: pointer;

      &:hover {
        background-color: white;
        color: black;
      }
    }
  }
`;

export const OrderItemTitle = styled.span`
  font-weight: 500;
  font-size: 13.5px;
`;

export const OrderItemVariants = styled.span`
  color: grey;
  font-size: 12.5px;
`;

export const OrderItemPrice = styled.span`
  font-weight: bold;
  font-size: 13px;
`;
