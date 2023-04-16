import styled from "styled-components";

export const AddProduct = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;

  .addProductInput {
    display: flex;
    flex-direction: column;
    gap: 5px;

    label {
      font-weight: 500;
      font-size: 14px;
    }
  }

  ul {
    list-style: unset;
  }
`;
