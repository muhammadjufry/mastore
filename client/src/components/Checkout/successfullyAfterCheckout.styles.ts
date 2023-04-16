import styled from "styled-components";

export const SuccessfullyAfterCheckoutHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  svg {
    width: 25px;
    height: 25px;
    fill: black;
  }

  > span {
    font-size: 17px;
    font-weight: 600;
  }
`;

export const SuccessfullyAfterCheckoutIcon = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  background-color: white;
  padding: 7px;
  border-radius: 5px;

  span {
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
  }
`;

export const SuccessfullyAfterCheckoutBody = styled.div`
  display: flex;
  gap: 10px;

  img {
    margin-top: 6px;
    width: 35px;
    height: 35px;
  }

  h4 {
    font-weight: 500;
    font-size: 17px;
    line-height: 33px;
  }
`;

export const SuccessfullyAfterCheckoutCheckOrder = styled.button`
  width: 100%;
  background-color: black;
  color: white;
  cursor: pointer;
  padding: 15px;
  border-radius: 30px;
  outline: none;
  border: none;

  @media (min-width: 768px) {
    width: fit-content;
    border-radius: 5px;
    padding: 10px 15px;
  }
`;
