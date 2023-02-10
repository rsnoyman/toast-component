import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ id, variant, removeToastById, message }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast variant={variant} handleDismiss={() => removeToastById(id)}>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
