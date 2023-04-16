import styled from "styled-components";

export const AndsBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ListAvailbleStore = styled.ul`
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  li {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    cursor: pointer;
    border: 1px solid #ced4da;
    padding: 15px;
    border-radius: 2px;
    transition: all 0.5s ease-in-out;
    height: 70px;
  }

  li:hover {
    box-shadow: 4px 17px 20px -16px rgba(0, 0, 0, 0.25);
  }

  li img {
    height: 100%;
    max-height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;
