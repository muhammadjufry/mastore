"use client"
import styles from "./styles/module_styles/page.module.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import MostPopularProducts from "./components/MostPopularProducts";
import ProductLists from "./components/ProductLists";
var $ = require("jquery");
declare global {
  interface Window {
    jQuery: any;
    $: any;
  }
}
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <div className={styles.sectionAfterBanner}>
          <Categories />
          <MostPopularProducts />
          <ProductLists />
        </div>
      </main>
    </>
  );
}
