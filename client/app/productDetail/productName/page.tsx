import styles from "../../styles/module_styles/productDetail.module.css";
import Image from "next/image";
import Star from "@heroicons/react/24/solid/StarIcon";
import Cart from "@heroicons/react/24/solid/ShoppingCartIcon";
import Share from "@heroicons/react/24/solid/ShareIcon";
import ArrowLeft from "@heroicons/react/24/solid/ArrowLeftCircleIcon"
type Props = {};

function page({}: Props) {
  return (
    <div className={styles.productDetail}>
      <div className={styles.imageIcons}>
        <ArrowLeft/>
        <div className={styles.imageIconsRight}>
        <Share/>
        <Cart/>
        </div>
      </div>
      <Image
        src="/images/product-images/laptop.webp"
        alt="laptop product image"
        className={styles.productDetailImage}
        width={250}
        height={250}
      />
      <div className={styles.productDetailInfo}>
        <h3>Laptop Assus</h3>
        <h4>$500</h4>
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
        <div className={styles.sellerInfo}>
          <div className={styles.sellerProfile}>
            <Image width={60} height={60} alt="seller profile image" src="/images/seller-images/default.png" />
            <div className={styles.offline}></div>
          </div>
          <div className={styles.sellerActivityAndInfo}>
            <span>Seller Name</span>
            <p>Online 2 hours ago</p>
            <p>Seller rating: 4.2 <Star className={styles.productStarIcon} /></p>
          </div>
        </div>
        <h5 className={styles.productHeadingDesc}>Product Description:</h5>
        <p className={styles.productDescription}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque illo facilis loem swijd
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque illo facilis loem swijdLorem ipsum dolor, sit amet consectetur adipisicing elit. Atque illo facilis loem swijdLorem ipsum dolor, sit amet consectetur adipisicing elit. Atque illo facilis loem swijdLorem ipsum dolor, sit amet consectetur adipisicing elit. Atque illo facilis loem swijdLorem ipsum dolor, sit amet consectetur adipisicing elit. Atque illo facilis loem swijd
        </p>
      </div>
      <button className={styles.buyNow}>Buy Now</button>
    </div>
  );
}

export default page;
