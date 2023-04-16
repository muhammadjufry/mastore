import styled from "styled-components";
export const EditSellerProfile = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;

  div {
    display: flex;
    flex-direction: column;
    gap: 5px;

    label {
      font-weight: 500;
      font-size: 14px;
    }
  }
`;

export const SellerPic = styled.div`
  display: flex;
  flex-direction: row !important;
  gap: 15px !important;
`;
