/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Box, Button } from "@mui/material";
import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";

import styles from "./modalCheckout.module.scss";

export default function ModalCheckout({ open = false, onClose }) {
  const [isOpen, setIsOpen] = useState(open);
  const modalRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const handleClose = () => {
    setIsOpen(false);
    onClose?.();
    navigate("/products");
  };
  const handleBackdropClick = (event) => {
    if (event.target !== event.currentTarget) return; // Ignore clicks on modal content
    handleClose();
  };

  return (
    <Modal
      ref={modalRef}
      disableEnforceFocus
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="checkout-modal-title"
      aria-describedby="checkout-modal-description"
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      onClick={handleBackdropClick}
    >
      <Box
        sx={{
          display: "grid",
          alignItems: "center",
          textAlign: "center",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 2,
          borderRadius: 1,
          minWidth: "260px",
          ":focus-visible": {
            outline: "1px solid black",
          },
        }}
      >
        <div className={styles.titleWithClose}>
          <span title="Close" onClick={handleClose}>
            <Icon path={mdiClose} size={1} />
          </span>
          <h2 id="checkout-modal-title">Order Placed!</h2>
        </div>
        <div className={styles.imgContainer}>
          <img
            height="180px"
            width="180px"
            src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHp4bW02YXRsa2c0Y2k3M3R6ZDA3YzRpN2N6MnN6bHV6bmRkbGdsbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/3LHT8jaiJfVJaQyJ72/giphy-downsized.gif"
            alt="Giphy sticker"
          />
          <a href="https://giphy.com/stickers/ShipMonk-3pl-shipmonk-ecommerce-fulfillment-3LHT8jaiJfVJaQyJ72">
            via GIPHY
          </a>
        </div>
        <p id="checkout-modal-description">Please wait for delivery.</p>

        <Button
        variant="contained"
          sx={{
            bgcolor: "#303030",
            textTransform: "unset",
            ":focus": { outline: "none" },
            ":hover": { bgcolor: "black" },
          }}
          onClick={handleClose}
        >
          Continiue Shopping
        </Button>
      </Box>
    </Modal>
  );
}
