import styled from "styled-components";

export const UserDashboardHeader = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;

  .row2 {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    .userProfile {
      display: flex;
      gap: 13px;

      img {
        width: 80px;
        height: 80px;
        object-fit: contain;
        border-radius: 50%;
      }
    }

    svg {
      width: 18px;
      height: 18px;
      position: relative;
      top: 2px;
    }
  }
  @media (max-width: 768px) {
    padding-top: 0;
  }
`;

export const UserProfileInfo = styled.div`
  position: relative;
  top: 2px;
  display: flex;
  flex-direction: column;
  font-size: 15px;

  span {
    font-size: 13px;
  }
`;

export const UserDashboardBody = styled.div`
  .links {
    display: flex;
    flex-direction: column;
    li {
      border-top: 1px solid #d3d3d3;
      transition: all 0.5s ease-in-out;

      a {
        display: flex;
        align-items: center;
        color: inherit;
        padding: 8px 0;
        gap: 6px;
        font-size: 13px;

        svg {
          width: 17px;
          height: 17px;
          color: grey;
        }
      }
    }
  }
`;
