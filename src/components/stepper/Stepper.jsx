/* eslint-disable react/prop-types */
import Icon from "@mdi/react";
import { mdiCheck } from "@mdi/js";
import styles from "./stepper.module.scss";

export default function Stepper({ pages }) {
  return (
    <div className={styles.stepperContainer}>
      {pages.map((page, i) => (
        <>
          <div key={i} className={styles.circle}>
            {page.completed ? (
              <Icon
                color="white"
                style={{
                  backgroundColor: "lawngreen",
                  border: "5px solid lawngreen",
                  borderRadius: "50%",
                }}
                path={mdiCheck}
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
        </>
      ))}
    </div>
  );
}
