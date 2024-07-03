/* eslint-disable react/prop-types */
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { HomeButton } from "../components/ctaButtons/CTAButtons";
import { Link } from "react-router-dom";

import shopNow640 from "../assets/shopNow/shopNow640.jpg";
import shopNow1280 from "../assets/shopNow/shopNow1280.jpg";
import shopNow1920 from "../assets/shopNow/shopNow1920.jpg";

import products640 from "../assets/products/products640.jpg";
import products1280 from "../assets/products/products1280.jpg";
import products1920 from "../assets/products/products1920.jpg";

import expressDelivery640 from "../assets/expressDelivery/expressDelivery640.jpg";
import expressDelivery1280 from "../assets/expressDelivery/expressDelivery1280.jpg";
import expressDelivery1920 from "../assets/expressDelivery/expressDelivery1920.jpg";

import styles from "./app.module.scss";

function SlideItem({ para, btnText, btnUrl, imageList }) {
  return (
    <div className={styles.ctaContainer}>
      <div className={styles.imageContainer}>
        <img
          src={imageList[0]}
          srcSet={`${imageList[0]} 640w, ${imageList[1]} 1024w, ${imageList[2]} 1440w`}
          alt=""
        />
      </div>
      <p className={styles.text}>{para}</p>
      <Link to={btnUrl}>
        <HomeButton text={btnText} />
      </Link>
    </div>
  );
}

export default function App() {
  const slides = [
    {
      para: "We offer the best products online",
      btnText: "See Products",
      btnUrl: "products",
      imageList: [shopNow640, shopNow1280, shopNow1920],
      imgCredit: {
        text: "Photo by Pixabay",
        URL: "https://www.pexels.com/photo/light-trails-on-road-at-night-315939/",
      },
    },
    {
      para: "Shop for Clothing, Jewelery or Electronics",
      btnText: "See Categories",
      btnUrl: "categories",
      imageList: [products640, products1280, products1920],
      imgCredit: {
        text: "Photo by Dina Nasyrova",
        URL: "https://www.pexels.com/photo/trendy-handbag-with-sunglasses-on-knitwear-3808229/",
      },
    },
    {
      para: "Experience the Speed of Express Delivery!",
      btnText: "Shop Now",
      btnUrl: "products",
      imageList: [expressDelivery640, expressDelivery1280, expressDelivery1920],
      imgCredit: {
        text: "Photo by Pexels User",
        URL: "https://www.pexels.com/photo/two-pretty-women-in-a-dress-holding-handbags-7116441/",
      },
    },
  ];

  return (
    <>
    <Carousel
      interval={8000}
      transitionTime={1000}
      statusFormatter={(currNum, total) => `${currNum} / ${total}`}
      swipeable={false}
      showIndicators={false}
      showThumbs={false}
      autoPlay
      infiniteLoop
      className={styles.root}
    >
      {slides.map((slide) => (
        <SlideItem
          key={slide.para}
          header={slide.header}
          para={slide.para}
          btnText={slide.btnText}
          btnUrl={slide.btnUrl}
          imageList={slide.imageList}
        />
      ))}
    </Carousel>
    <div>Image Credits</div>
    <div>Footer</div>
    </>
  );
}
