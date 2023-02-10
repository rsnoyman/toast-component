import React from "react";

import { ToastContext } from "../ToastProvider";
import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { toasts, dismissAllToasts } = React.useContext(ToastContext);

  React.useEffect(() => {
    const escapeEvent = (event) => {
      if (event.code === "Escape") dismissAllToasts();
    };
    window.addEventListener("keydown", escapeEvent);
    return () => window.removeEventListener("keydown", escapeEvent);
  }, [dismissAllToasts]);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="assertive"
      aria-label="Notification"
    >
      {toasts.map(({ id, variant, message }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast id={id} variant={variant}>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
