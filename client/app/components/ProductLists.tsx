import Image from "next/image";
import Star from "@heroicons/react/24/solid/StarIcon";
import styles from "../styles/module_styles/productLists.module.css"
import Link from "next/link";
type Props = {}

function ProductLists({}: Props) {
  return (
    <div className={styles.productForUser}>
      <h4>Product for you:</h4>
      <ul>
        <li>
          <Link href="/productDetail/productName">
          <Image
            src="/images/product-images/laptop.webp"
            alt="laptop product image"
            className={styles.productImage}
            width={130}
            height={130}
          />
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
          </Link>
        </li>
        <li>
          <Link href="/productDetail/productName">
          <Image
            src="/images/product-images/laptop.webp"
            alt="laptop product image"
            className={styles.productImage}
            width={130}
            height={130}
          />
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
          </Link>
        </li>
        <li>
          <Link href="/productDetail/productName">
          <Image
            src="/images/product-images/laptop.webp"
            alt="laptop product image"
            className={styles.productImage}
            width={130}
            height={130}
          />
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
          </Link>
        </li>
        <li>
          <Link href="/productDetail/productName">
          <Image
            src="/images/product-images/laptop.webp"
            alt="laptop product image"
            className={styles.productImage}
            width={130}
            height={130}
          />
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
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default ProductLists