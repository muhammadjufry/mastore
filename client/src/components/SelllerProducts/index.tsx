import { Text, Button } from "@mantine/core";
import SellerPageHeader from "../SellerPageHeader";
import { Link } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  SellerProducts,
  ProductItem,
  ProductActions,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductPrice,
  ProductRatingAndSell,
  ProductStar,
  LocationInfo,
  ProductStarIcon as StarIcon,
  ProductSold,
} from "./index.styles";
import MacbookImg from "../../assets/images/product-images/laptop.webp";
import { IconEdit, IconTrash } from "@tabler/icons-react";
type Props = {
  isUserLoggedIn: boolean;
};

function index({ isUserLoggedIn }: Props) {
  return (
    <>
      <SellerPageHeader pageName="Seller Products" />
      <div className="pageDefaultStyle">
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <Text>Here's all of your product:</Text>
            <Link to="/seller/add-product">
              <Button
                color="dark"
                styles={() => ({
                  root: {
                    width: "fit-content",
                  },
                })}
              >
                Add new product
              </Button>
            </Link>
          </div>
          <br />
          <SellerProducts>
            <Link to="/productDetail/macbook">
              <ProductItem>
                <ProductActions>
                  <button>
                    <Link to="/seller/edit-product/laptop123">
                      <IconEdit size={15} color="green" />
                    </Link>
                  </button>
                  <button>
                    <IconTrash size={15} color="red" />
                  </button>
                </ProductActions>
                <ProductImage
                  src={MacbookImg}
                  alt="laptop product image"
                  width={130}
                  height={130}
                />

                <ProductInfo>
                  <ProductTitle>
                    Apple 2021 Macbook Pro 16 inch 32GB RAM
                  </ProductTitle>
                  <ProductPrice>$2,287.87</ProductPrice>
                  <LocationInfo>
                    <LocationOnIcon />
                    <span>NYC, New York</span>
                  </LocationInfo>
                  <ProductRatingAndSell>
                    <ProductStar>
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </ProductStar>
                    <ProductSold>100&nbsp;sold</ProductSold>
                  </ProductRatingAndSell>
                </ProductInfo>
              </ProductItem>
            </Link>
            <Link to="/productDetail/macbook">
              <ProductItem>
                <ProductActions>
                  <button>
                    <Link to="/seller/edit-product/laptop123">
                      <IconEdit size={15} color="green" />
                    </Link>
                  </button>
                  <button>
                    <IconTrash size={15} color="red" />
                  </button>
                </ProductActions>
                <ProductImage
                  src={MacbookImg}
                  alt="laptop product image"
                  width={130}
                  height={130}
                />

                <ProductInfo>
                  <ProductTitle>
                    Apple 2021 Macbook Pro 16 inch 32GB RAM
                  </ProductTitle>
                  <ProductPrice>$2,287.87</ProductPrice>
                  <LocationInfo>
                    <LocationOnIcon />
                    <span>NYC, New York</span>
                  </LocationInfo>
                  <ProductRatingAndSell>
                    <ProductStar>
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </ProductStar>
                    <ProductSold>100&nbsp;sold</ProductSold>
                  </ProductRatingAndSell>
                </ProductInfo>
              </ProductItem>
            </Link>
            <Link to="/productDetail/macbook">
              <ProductItem>
                <ProductActions>
                  <button>
                    <Link to="/seller/edit-product/laptop123">
                      <IconEdit size={15} color="green" />
                    </Link>
                  </button>
                  <button>
                    <IconTrash size={15} color="red" />
                  </button>
                </ProductActions>
                <ProductImage
                  src={MacbookImg}
                  alt="laptop product image"
                  width={130}
                  height={130}
                />

                <ProductInfo>
                  <ProductTitle>
                    Apple 2021 Macbook Pro 16 inch 32GB RAM
                  </ProductTitle>
                  <ProductPrice>$2,287.87</ProductPrice>
                  <LocationInfo>
                    <LocationOnIcon />
                    <span>NYC, New York</span>
                  </LocationInfo>
                  <ProductRatingAndSell>
                    <ProductStar>
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </ProductStar>
                    <ProductSold>100&nbsp;sold</ProductSold>
                  </ProductRatingAndSell>
                </ProductInfo>
              </ProductItem>
            </Link>
            <Link to="/productDetail/macbook">
              <ProductItem>
                <ProductActions>
                  <button>
                    <Link to="/seller/edit-product/laptop123">
                      <IconEdit size={15} color="green" />
                    </Link>
                  </button>
                  <button>
                    <IconTrash size={15} color="red" />
                  </button>
                </ProductActions>
                <ProductImage
                  src={MacbookImg}
                  alt="laptop product image"
                  width={130}
                  height={130}
                />

                <ProductInfo>
                  <ProductTitle>
                    Apple 2021 Macbook Pro 16 inch 32GB RAM
                  </ProductTitle>
                  <ProductPrice>$2,287.87</ProductPrice>
                  <LocationInfo>
                    <LocationOnIcon />
                    <span>NYC, New York</span>
                  </LocationInfo>
                  <ProductRatingAndSell>
                    <ProductStar>
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </ProductStar>
                    <ProductSold>100&nbsp;sold</ProductSold>
                  </ProductRatingAndSell>
                </ProductInfo>
              </ProductItem>
            </Link>
            <Link to="/productDetail/macbook">
              <ProductItem>
                <ProductActions>
                  <button>
                    <Link to="/seller/edit-product/laptop123">
                      <IconEdit size={15} color="green" />
                    </Link>
                  </button>
                  <button>
                    <IconTrash size={15} color="red" />
                  </button>
                </ProductActions>
                <ProductImage
                  src={MacbookImg}
                  alt="laptop product image"
                  width={130}
                  height={130}
                />

                <ProductInfo>
                  <ProductTitle>
                    Apple 2021 Macbook Pro 16 inch 32GB RAM
                  </ProductTitle>
                  <ProductPrice>$2,287.87</ProductPrice>
                  <LocationInfo>
                    <LocationOnIcon />
                    <span>NYC, New York</span>
                  </LocationInfo>
                  <ProductRatingAndSell>
                    <ProductStar>
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </ProductStar>
                    <ProductSold>100&nbsp;sold</ProductSold>
                  </ProductRatingAndSell>
                </ProductInfo>
              </ProductItem>
            </Link>
          </SellerProducts>
        </div>
      </div>
    </>
  );
}

export default index;
