import styled from "styled-components";

export const SellerHelpBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  h3 {
    text-align: center;
    font-weight: 600;
    font-size: 17px;
    text-shadow: 0 5px 5px rgb(0, 0, 0, 0.1);
  }
`;

export const PeopleQuestions = styled.ul`
  list-style: unset;
  font-size: 11px;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  li {
    background-color: rgb(245, 245, 245);
    padding: 5px 7px;
    cursor: pointer;
  }
`;
