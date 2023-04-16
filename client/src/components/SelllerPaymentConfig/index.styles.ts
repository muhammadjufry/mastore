import styled from "styled-components";

export const PaymentSetting = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const PaymentEmailSetting = styled.div`
  span {
    font-size: 12px;
    color: grey;
  }
  &:first-child div span {
    position: relative;
    color: black;
    font-size: 11px;
  }
  div input[type="email"] {
    display: block;
    margin-left: 15px;
    font-size: 10px;
    margin-top: 5px;
    color: black;
    border: 1px solid black;
    outline: none;
    padding: 5px;
    &::placeholder {
      color: grey;
    }
  }
`;

export const SendEmailToMyAccount = styled.div`
  margin-top: 5px;
`;

export const SpanAndRadio = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 5px;
  span {
    font-size: 11px;
  }
`;

export const SendEmailToMyAccountAndRadio = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 5px;
  span {
    font-size: 11px;
  }
  margin-top: 5px;
`;

export const RecentlyUsedPaymentMethods = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  gap: 15px;
  li {
    display: flex;
    padding: 12px;
    gap: 10px;
    background-color: rgb(237, 247, 250);
    img {
      width: 40px;
      height: 40px;
    }
  }
`;

export const PaymentMethodInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const PaymentMethodHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  svg {
    width: 15px;
    height: 15px;
    cursor: pointer;
  }
`;

export const PaymentMethodInfoSpan = styled.span`
  display: flex;
  align-items: center;
  font-size: 11px;
  gap: 5px;
  color: grey;
`;

export const PaymentMethodInfoA = styled.a`
  display: flex;
  align-items: center;
  font-size: 11px;
  gap: 5px;
  color: grey;
  text-decoration: underline;
  svg {
    width: 13px;
    height: 13px;
  }
`;

export const PaymentMethodActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin-top: 3px;
`;

export const PaymentMethodNumber = styled.div`
  font-weight: bold;
  color: black !important;
  font-size: 13px !important;
`;

export const PaymentSettingButton = styled.button`
  width: fit-content;
  border: none;
  background-color: black;
  border: 1px solid black;
  color: white;
  padding: 7px 10px;
  transition: all 0.5s ease-in-out;
  font-size: 12px;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
  }
`;
