import Image from "next/image";
import React from "react";
import styles from "../styles/module_styles/categories.module.css";
type Props = {};

function Categories({}: Props) {
  return (
    <div className={styles.categories}>
      <h4>Categories</h4>
      <ul>
        <li>
          <Image
            src="/icons/clothesIcon.png"
            alt="Clothes Icon"
            width={35}
            height={35}
            className={styles.categoryIcon}
          />
          <span className={styles.categoryName}>Clothes</span>
        </li>
        <li>
          <Image
            src="/icons/foodIcon.svg"
            alt="Food Icon"
            width={35}
            height={35}
            className="categoryIcon"
          />
          <span className={styles.categoryName}>Food</span>
        </li>
        <li>
          <Image
            src="/icons/gamesIcon.jpg"
            alt="Games Icon"
            width={35}
            height={35}
            className={styles.categoryIcon}
          />
          <span className={styles.categoryName}>Games</span>
        </li>
        <li>
          <Image
            src="/icons/paintIcon.png"
            alt="Paint Icon"
            width={35}
            height={35}
            className={styles.categoryIcon}
          />
          <span className={styles.categoryName}>Paint</span>
        </li>
        <li>
          <Image
            src="/icons/repairIcon.png"
            alt="Repair Icon"
            width={35}
            height={35}
            className={styles.categoryIcon}
          />
          <span className={styles.categoryName}>Repair</span>
        </li>
        <li>
          <Image
            src="/icons/vegetablesIcon.png"
            alt="Vegetables Icon"
            width={35}
            height={35}
            className={styles.categoryIcon}
          />
          <span className={styles.categoryName}>Vegetables</span>
        </li>
        <li>
          <Image
            src="/icons/washingMachineIcon.jpg"
            alt="Washing Machine Icon"
            width={35}
            height={35}
            className={styles.categoryIcon}
          />
          <span className={styles.categoryName}>Washing Machine</span>
        </li>
      </ul>
    </div>
  );
}

export default Categories;
