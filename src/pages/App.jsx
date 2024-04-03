/* eslint-disable react/prop-types */
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Button from "../components/button/Button";
import { Link } from "react-router-dom";

import styles from "./app.module.scss";

function SlideItem({ para, btnText, btnUrl }) {
  return (
    <div className={styles.ctaContainer}>
      <p className={styles.text}>{para}</p>
      <Link to={btnUrl}>
        <Button text={btnText} />
      </Link>
    </div>
  );
}

const App = () => {
  const slides = [
    {
      para: "We offer the best products online",
      btnText: "See Products",
      btnUrl: "products",
    },
    {
      para: "Shop for Clothing, Jewelery or Electronics",
      btnText: "See Categories",
      btnUrl: "categories",
    },
    {
      para: "Experience the Speed of Express Delivery!",
      btnText: "Shop Now",
      btnUrl: "products",
    },
  ];

  return (
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
        />
      ))}
    </Carousel>
  );
};

export default App;
