"use client"
import Image from "next/legacy/image";
import React from "react";
import { BannerCarouselConfig } from "../../config/OwlCarousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import styles from "../styles/module_styles/banner.module.css";
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
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

type Props = {};

function Banner({}: Props) {
  return (
    <section className={styles.banner}>
      <div className="container">
        <div className={styles.bannerImage}>
          <OwlCarousel
            {...BannerCarouselConfig}
            autoplay={true}
            lazyLoad={true}
            smartSpeed={1000}
            autoplayTimeout={3500}
            autoplayHoverPause={true}
            className="owl-carousel owl-theme"
          >
            <Image
              src="/images/banner-images/mobile/banner-image-2.svg"
              alt="Dropships Shop First Banner Image"
              width={1200}
              height={628}
            />
            <Image
              src="/images/banner-images/mobile/banner-image-1.svg"
              alt="Dropships Shop First Banner Image"
              width={1200}
              height={628}
            />
            <Image
              src="/images/banner-images/mobile/banner-image-3.svg"
              alt="Dropships Shop First Banner Image"
              width={1200}
              height={628}
            />
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
}

export default Banner;
