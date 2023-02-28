import Image from "next/image";
import styles from "../styles/module_styles/mostpopularproducts.module.css";
import Star from "@heroicons/react/24/solid/StarIcon";

type Props = {};

function MostPopularProducts({}: Props) {
  return (
    <div className={styles.mostpopularproducts}>
      <h4>Most Popular Products</h4>
      <ul>
        <li>
          <Image
            src="/images/product-images/laptop.webp"
            alt="laptop product image"
            className={styles.productImage}
            width={130}
            height={130}
          />
          <div className={styles.imgPromo}>TRENDING</div>
          <div className={styles.productInfo}>
            <h4 className={styles.productTitle}>Laptop Asus</h4>
            <p className={styles.productShortDesc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque illo facilis loem swijd</p>
            <h4 className={styles.productPrice}>$500</h4>
            <div className={styles.productRatingAndSell}>
              <div className={styles.productStar}>
                <Star className={styles.productStarIcon} />
                <Star className={styles.productStarIcon} />
                <Star className={styles.productStarIcon} />
                <Star className={styles.productStarIcon} />
                <Star className={styles.productStarIcon} />
                <div className={styles.halfStar}></div>
              </div>
              <span className={styles.productSold}>100 sold</span>
            </div>
          </div>
        </li>
        <li>
          <Image
            src="/images/product-images/laptop.webp"
            alt="laptop product image"
            className={styles.productImage}
            width={130}
            height={130}
          />
          <div className={styles.imgPromo}>BEST SELLER</div>
          <div className={styles.productInfo}>
            <h4 className={styles.productTitle}>Laptop Asus</h4>
            <p className={styles.productShortDesc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque illo facilis loem swijd</p>
            <h4 className={styles.productPrice}>$500</h4>
            <div className={styles.productRatingAndSell}>
              <div className={styles.productStar}>
                <Star className={styles.productStarIcon} />
                <Star className={styles.productStarIcon} />
                <Star className={styles.productStarIcon} />
                <Star className={styles.productStarIcon} />
                <Star className={styles.productStarIcon} />
                <div className={styles.halfStar}></div>
              </div>
              <span className={styles.productSold}>100 sold</span>
            </div>
          </div>
        </li>
        <li>
          <Image
            src="/images/product-images/laptop.webp"
            alt="laptop product image"
            className={styles.productImage}
            width={130}
            height={130}
          />
          <div className={styles.imgPromo}>NEW</div>
          <div className={styles.productInfo}>
            <h4 className={styles.productTitle}>Laptop Asus</h4>
            <p className={styles.productShortDesc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque illo facilis loem swijd</p>
            <h4 className={styles.productPrice}>$500</h4>
            <div className={styles.productRatingAndSell}>
              <div className={styles.productStar}>
                <Star className={styles.productStarIcon} />
                <Star className={styles.productStarIcon} />
                <Star className={styles.productStarIcon} />
                <Star className={styles.productStarIcon} />
                <Star className={styles.productStarIcon} />
                <div className={styles.halfStar}></div>
              </div>
              <span className={styles.productSold}>100 sold</span>
            </div>
          </div>
        </li>
        <li>
          <Image
            src="/images/product-images/laptop.webp"
            alt="laptop product image"
            className={styles.productImage}
            width={130}
            height={130}
          />
          <div className={styles.imgPromo}>DISCOUNT 50% OFF</div>
          <div className={styles.productInfo}>
            <h4 className={styles.productTitle}>Laptop Asus</h4>
            <p className={styles.productShortDesc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque illo facilis loem swijd</p>
            <h4 className={styles.productPrice}>$500</h4>
            <div className={styles.productRatingAndSell}>
              <div className={styles.productStar}>
                <Star className={styles.productStarIcon} />
                <Star className={styles.productStarIcon} />
                <Star className={styles.productStarIcon} />
                <Star className={styles.productStarIcon} />
                <Star className={styles.productStarIcon} />
                <div className={styles.halfStar}></div>
              </div>
              <span className={styles.productSold}>100 sold</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default MostPopularProducts;
