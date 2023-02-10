import React from "react";

const useEscapeKey = (callback) => {
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Escape") callback();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [callback]);
};

export default useEscapeKey;
