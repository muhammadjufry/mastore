import { Link } from 'react-router-dom'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import {
  MostPopularProductsSection,
  PopularProductsList,
  PopularProductItem,
  PopularProductImage,
  ImgPromo,
  PopularProductInfo,
  ProductTitle,
  ProductPrice,
  ProductRatingAndSell,
  ProductStar,
  LocationInfo,
  ProductStarIcon as StarIcon,
  ProductSold
} from './mostPopularProducts.styles'
import MacbookImg from '../../assets/images/product-images/laptop.webp'

interface Props {}

function MostPopularProducts ({}: Props) {
  return (
    <MostPopularProductsSection>
      <div className="container">
        <h4>Hot Sales</h4>
        <br />
        <PopularProductsList>
          <Link to="/productDetail/macbook">
            <PopularProductItem>
              <PopularProductImage
                src={MacbookImg}
                alt="laptop product image"
                width={130}
                height={130}
              />
              <ImgPromo>TRENDING</ImgPromo>
              <PopularProductInfo>
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
                  </ProductStar>
                  <ProductSold>100 sold</ProductSold>
                </ProductRatingAndSell>
              </PopularProductInfo>
            </PopularProductItem>
          </Link>
          <PopularProductItem>
            <PopularProductImage
              src={MacbookImg}
              alt="laptop product image"
              width={130}
              height={130}
            />
            <ImgPromo>TRENDING</ImgPromo>
            <PopularProductInfo>
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
                </ProductStar>
                <ProductSold>100 sold</ProductSold>
              </ProductRatingAndSell>
            </PopularProductInfo>
          </PopularProductItem>
          <PopularProductItem>
            <PopularProductImage
              src={MacbookImg}
              alt="laptop product image"
              width={130}
              height={130}
            />
            <ImgPromo>TRENDING</ImgPromo>
            <PopularProductInfo>
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
                </ProductStar>
                <ProductSold>100 sold</ProductSold>
              </ProductRatingAndSell>
            </PopularProductInfo>
          </PopularProductItem>
          <PopularProductItem>
            <PopularProductImage
              src={MacbookImg}
              alt="laptop product image"
              width={130}
              height={130}
            />
            <ImgPromo>TRENDING</ImgPromo>
            <PopularProductInfo>
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
                </ProductStar>
                <ProductSold>100 sold</ProductSold>
              </ProductRatingAndSell>
            </PopularProductInfo>
          </PopularProductItem>
          <PopularProductItem>
            <PopularProductImage
              src={MacbookImg}
              alt="laptop product image"
              width={130}
              height={130}
            />
            <ImgPromo>TRENDING</ImgPromo>
            <PopularProductInfo>
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
                </ProductStar>
                <ProductSold>100 sold</ProductSold>
              </ProductRatingAndSell>
            </PopularProductInfo>
          </PopularProductItem>
          <PopularProductItem>
            <PopularProductImage
              src={MacbookImg}
              alt="laptop product image"
              width={130}
              height={130}
            />
            <ImgPromo>TRENDING</ImgPromo>
            <PopularProductInfo>
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
                </ProductStar>
                <ProductSold>100 sold</ProductSold>
              </ProductRatingAndSell>
            </PopularProductInfo>
          </PopularProductItem>
          <PopularProductItem>
            <PopularProductImage
              src={MacbookImg}
              alt="laptop product image"
              width={130}
              height={130}
            />
            <ImgPromo>TRENDING</ImgPromo>
            <PopularProductInfo>
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
                </ProductStar>
                <ProductSold>100 sold</ProductSold>
              </ProductRatingAndSell>
            </PopularProductInfo>
          </PopularProductItem>
          <PopularProductItem>
            <PopularProductImage
              src={MacbookImg}
              alt="laptop product image"
              width={130}
              height={130}
            />
            <ImgPromo>TRENDING</ImgPromo>
            <PopularProductInfo>
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
                </ProductStar>
                <ProductSold>100 sold</ProductSold>
              </ProductRatingAndSell>
            </PopularProductInfo>
          </PopularProductItem>
          <PopularProductItem>
            <PopularProductImage
              src={MacbookImg}
              alt="laptop product image"
              width={130}
              height={130}
            />
            <ImgPromo>TRENDING</ImgPromo>
            <PopularProductInfo>
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
                </ProductStar>
                <ProductSold>100 sold</ProductSold>
              </ProductRatingAndSell>
            </PopularProductInfo>
          </PopularProductItem>
          <PopularProductItem>
            <PopularProductImage
              src={MacbookImg}
              alt="laptop product image"
              width={130}
              height={130}
            />
            <ImgPromo>TRENDING</ImgPromo>
            <PopularProductInfo>
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
                </ProductStar>
                <ProductSold>100 sold</ProductSold>
              </ProductRatingAndSell>
            </PopularProductInfo>
          </PopularProductItem>
        </PopularProductsList>
      </div>
    </MostPopularProductsSection>
  )
}

export default MostPopularProducts
