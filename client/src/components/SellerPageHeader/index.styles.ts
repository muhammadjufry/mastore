import styled from "styled-components";
import { IconChevronLeft } from "@tabler/icons-react";

export const SellerPageHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  span {
    font-weight: 600;
  }
`;

export const SellerPageHeaderIcon = styled(IconChevronLeft)`
  cursor: pointer;
`;
