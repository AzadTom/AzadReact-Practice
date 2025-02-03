import { useEffect, useState } from "react";

export const useDimension = () => {
  const [dimension, setDimesion] = useState({ width: 0, height: 0 });

  const updateDimension = () => {
    const { innerWidth, innerHeight } = window;
    setDimesion({ width: innerWidth, height: innerHeight });
  };

  useEffect(() => {
    updateDimension();
    window.addEventListener("resize", updateDimension);
    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, []);

  return dimension;
};
