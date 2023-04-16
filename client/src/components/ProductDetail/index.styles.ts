import styled from "styled-components";

export const ProductDetailHeader = styled.div`
  @media (max-width: 768px) {
    header {
      display: none !important;
    }

    .pageHeader {
      display: flex !important;
      padding: 20px;
      background-color: white;
    }
  }
  .pageHeader {
    display: none;
  }

  header {
    display: block;
  }
`;

export const ProductDetail = styled.div`
  display: flex;
  padding: 20px 20px;
  @media (max-width: 768px) {
    padding-top: 0;
  }
  gap: 20px;
  img {
    width: 450px;
    height: 450px;
    object-fit: contain;
    background-color: white;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    img {
      width: 100%;
      height: 270px;
    }
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  span {
    font-size: 15px;
  }

  h2 {
    font-weight: 600;
    font-size: 22px;
  }

  .price {
    font-weight: 700;
    font-size: 24px;
  }
`;

export const RatingAndSold = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

export const ProductRating = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;

export const ProductSold = styled.div``;

export const ProductType = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 7px 0;

  li {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  button {
    padding: 4px 8px;
    background-color: transparent;
    border: 1px solid grey;
    border-radius: 2px;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    color: grey;

    &:focus {
      background-color: grey;
      color: white;
    }
  }
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductDescription = styled.div`
  p {
    font-size: 15px;
    color: grey;
    line-height: 32px;
    padding: 0 20px;
  }
  margin-bottom: 20px;
`;

export const SellerProfile = styled.div`
  display: flex;
  gap: 15px;
  margin: 10px 0 20px;
  background-color: white;
  width: 100%;
  padding: 15px 20px;
`;

export const SellerInfo = styled.div`
  .sellerName {
    font-weight: 700;
  }

  .sellerRatingAndSold {
    display: flex;
    gap: 5px;
    align-items: center;
  }
`;

export const ProductReview = styled.div`
  border-top: 2px solid rgb(230, 230, 230);
  margin-bottom: 20px;
  padding: 20px;
`;

export const ProductReviewHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
`;

export const ProductReviewRating = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    width: 50px;
    height: 50px;
    stroke: #fab005;
    fill: #fab005;
    color: #fab005;
  }
  @media (max-width: 768px) {
    align-items: flex-end;
    svg {
      width: 30px;
      height: 30px;
    }
    span {
      font-size: 18px !important;
      font-weight: 500 !important;
    }
  }

  span {
    font-size: 22px;
    font-weight: bold;
  }
`;

export const ProductReviewRate = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;

  li {
    display: flex;
    align-items: center;
    gap: 5px;
    border: 1px solid grey;
    cursor: pointer;
    padding: 5px 10px;

    svg {
      width: 20px;
      height: 20px;
      stroke: #fab005;
      fill: #fab005;
      color: #fab005;
    }

    font-size: 15px;
    color: grey;
  }

  @media (max-width: 768px) {
    li {
      font-size: 12px;
    }
  }
`;

export const ProductReviewMessages = styled.ul`
  padding: 30px 0;

  li {
    display: flex;
    flex-direction: column;
    gap: 7px;
    border-top: 1px solid rgb(230, 230, 230);
    padding: 10px 0;

    .reviewDescription {
      font-size: 14px;
      line-height: 28px;
      color: grey;
    }
  }

  .userReview {
    display: flex;
    gap: 7px;
  }

  .userInfoAndCommentedDate {
    display: flex;
    flex-direction: column;

    .userProfileName {
      font-weight: bold;
    }

    .commentedDate {
      font-size: 14px;
      color: rgb(190, 190, 190);
    }
  }

  @media (max-width: 768px) {
    .userProfileName {
      font-size: 13px;
    }

    .commentedDate {
      font-size: 11px !important;
    }

    .reviewDescription {
      font-size: 12px !important;
    }
  }
`;

export const ProductAddReview = styled.div`
  font-size: 14px;
  margin: 20px 0 0;
  display: flex;
  flex-direction: column;
  gap: 10px;

  .userProfile {
    display: flex;
    align-items: center;
    gap: 7px;

    .userProfileName {
      font-weight: bold;
    }
  }
`;
