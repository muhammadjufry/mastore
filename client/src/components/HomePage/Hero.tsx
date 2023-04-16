import { Carousel } from "@mantine/carousel";
import BannerImgOne from "../../assets/images/banner-images/banner-image-1.png";
import BannerImgTwo from "../../assets/images/banner-images/banner-image-2.png";
import BannerImgThree from "../../assets/images/banner-images/banner-image-3.png";
import { createStyles, getStylesRef } from "@mantine/core";

type Props = {};
function Hero({}: Props) {
  return (
    <section>
      <div className="container">
        <Carousel loop withIndicators>
          <Carousel.Slide>
            <img src={BannerImgOne} loading="lazy" />
          </Carousel.Slide>
          <Carousel.Slide>
            <img src={BannerImgTwo} loading="lazy" />
          </Carousel.Slide>
          <Carousel.Slide>
            <img src={BannerImgThree} loading="lazy" />
          </Carousel.Slide>
        </Carousel>
      </div>
    </section>
  );
}

export default Hero;
