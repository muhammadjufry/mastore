import styled from "styled-components";
import StarIcon from "@mui/icons-material/Star";

export const MostPopularProductsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
`;

export const PopularProductsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 10px;
  align-items: center;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  overflow: hidden;

  &.active {
    cursor: grabbing;
  }
`;

export const PopularProductItem = styled.li`
  background-color: white;
  border: 1px solid rgb(233 233 233);
  position: relative;
`;

export const PopularProductImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;

export const ImgPromo = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 5px 10px;
  background-color: black;
  font-size: 9px;
  font-weight: 500;
  color: white;
  border-radius: 5px;
`;

export const PopularProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.7px;
  padding: 10px;
`;

export const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: 11px;
  color: rgb(32, 32, 32);
`;

export const ProductPrice = styled.span`
  font-size: 12.5px;
  font-weight: 550;
  color: rgb(8, 100, 175);
`;

export const LocationInfo = styled.div`
display: flex;
align-items:flex-start;
margin-left: -2px;
gap: 2px;
font-size 11px;
color: black;
font-weight: bold;
svg {
  margin-top: 1.2px;
  width: 13px;
  height: 13px;
}
`;

export const ProductRatingAndSell = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const ProductStar = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  position: relative;
`;

export const ProductStarIcon = styled(StarIcon)`
  width: 12px !important;
  height: 12px !important;
  fill: orange;
  color: orange;
`;

export const ProductShortDesc = styled.p`
  color: grey;
  font-size: 10.5px;
  margin: 2.5px 0;
`;

export const ProductSold = styled.div`
  font-size: 10.5px;
`;
