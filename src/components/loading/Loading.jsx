/* eslint-disable react/prop-types */
import { Button } from "@mui/material";
import Icon from "@mdi/react";
import { mdiAlertOutline } from "@mdi/js";
import styles from "./loading.module.scss";

export default function Loading() {
  return (
    <div className={styles.container}>
      <div className={styles.ringsContainer}>
        <div className={styles.rings}></div>
        <div className={styles.rings}></div>
        <div className={styles.rings}></div>
      </div>
      <div className={styles.text}>Loading...</div>
    </div>
  );
}

export function LoadingError({ message = "An Error Occured!" }) {
  return (
    <div className={styles.errorContainer}>
      <Icon path={mdiAlertOutline} size={2} color="grey" />
      <p className={styles.errorMessage}>{message}</p>
      <Button onClick={() => location.reload()}
        sx={{
          color: "blueviolet",
          ":hover": { bgcolor: "#8a2be21f" },
          ":focus": { outline: "none" },
        }}
      >
        Refresh
      </Button>
    </div>
  );
}
