import Button from "../components/button/Button";

import styles from "./app.module.css"

const App = () => {
  return (
    <div className={styles.root}>
      <div className={styles.ctaContainer}>
        <p>We offer the best products online</p>
        <Button text={"Shop Now"} />
      </div>
    </div>
  );
};

export default App;
