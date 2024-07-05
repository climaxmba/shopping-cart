import Icon from "@mdi/react";
import { mdiCheck, mdiCircle } from "@mdi/js";

import PropTypes from "prop-types";
import styles from "./stepper.module.scss";

export default function Stepper({ pages }) {
  return (
    <div className={styles.stepperContainer}>
      {pages.map((page, i) => (
        <EmptyElement key={i}>
          <div data-text={page.text} className={styles.circle}>
            <span></span>
            {page.completed ? (
              <Icon
                color="white"
                style={{
                  backgroundColor: "lawngreen",
                  border: "5px solid lawngreen",
                  borderRadius: "50%",
                }}
                path={page.isActive ? mdiCircle : mdiCheck}
              />
            ) : page.isActive ? (
              <div className={styles.active}></div>
            ) : (
              <div className={styles.empty}></div>
            )}
          </div>
          {i != pages.length - 1 && page.completed ? (
            <div className={styles.completedLine}></div>
          ) : i != pages.length - 1 ? (
            <div className={styles.uncompletedLine}></div>
          ) : (
            <></>
          )}
        </EmptyElement>
      ))}
    </div>
  );
}

Stepper.propTypes = {
  pages: PropTypes.array,
};

/** This allows the element `<></>` to recieve props like `key` */
function EmptyElement({ children }) {
  return <>{children}</>;
}
EmptyElement.propTypes = {
  children: PropTypes.node,
};
