import styles from "../styles/module_styles/header.module.css";
import Bar from "@heroicons/react/24/outline/Bars4Icon";
import UserCircleIcon from "@heroicons/react/24/outline/UserCircleIcon";
import ShoppingBag from "@heroicons/react/24/outline/ShoppingBagIcon";
import SearchIcon from "@heroicons/react/24/outline/MagnifyingGlassIcon";
type Props = {};

function Header({}: Props) {
  return (
    <header className={styles.header}>
      <div className={styles.row1}>
        <div className={styles.left}>
          <div className={styles.menuToggle}>
            <Bar />
          </div>
          <div className={styles.logo}>DROPSHIPS_SHOP</div>
        </div>
        <div className={styles.right}>
          <div className={styles.icons}>
            <UserCircleIcon />
          </div>
          <div className={styles.icons}>
            <ShoppingBag />
          </div>
        </div>
      </div>
      <div className={styles.row2}>
        <div className={styles.search}>
          <form method="get" className={styles.formSearch}>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search product here..."
              className={styles.searchInput}
            />
            <button type="submit" className={styles.searchIcon}>
              <SearchIcon />
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}

export default Header;
