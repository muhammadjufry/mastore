import styled from 'styled-components'

export const EditProduct = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;

  .editProductInput {
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
`
