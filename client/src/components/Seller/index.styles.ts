import styled from "styled-components";
import { IconEdit } from "@tabler/icons-react";

export const SellerAccount = styled.div`
  display: flex;
  gap: 15px;

  position: relative;
  & > div {
    display: flex;
    flex-direction: column;
  }
`;

export const SellerAccountInfoTitle = styled.h1`
  font-size: 15px;
`;
export const SellerRating = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;

  span {
    font-size: 12px;
  }
`;
export const SellerRatingAndSold = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;

  span {
    font-size: 11px;
  }
`;

export const SellerFfling = styled.span`
  font-size: 11px;
  color: grey;
`;

export const IconEditButton = styled(IconEdit)`
  position: absolute;
  right: 0;
  cursor: pointer;
`;

export const SellerDashboardLinks = styled.ul``;

export const SellerDashboardLink = styled.li`
  border-top: 1px solid #ced4da;

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
    }
  }
`;
