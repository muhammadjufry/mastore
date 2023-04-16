import styled from "styled-components";
import ArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

export const PageItemsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const PageItemsHeaderSvg = styled(ArrowLeftIcon)`
  cursor: pointer;
  width: 25px;
  height: 25px;
  fill: black;
`;

export const PageItemsHeaderText = styled.span`
  font-size: 17px;
  font-weight: 600;
`;

export const PageHeaderItemsIcon = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  background-color: white;
  padding: 7px;
  border-radius: 5px;
`;

export const PageHeaderItemsIconCount = styled.span`
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
`;
