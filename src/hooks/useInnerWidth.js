import { useState, useRef, useCallback, useEffect } from "react";

function useInnerWidth() {
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);
  const cooldown = useRef(false);

  const updateSize = useCallback(() => {
    if (cooldown.current) {
      return null;
    } else {
      setCurrentWidth(window.innerWidth);
      cooldown.current = true;
      setTimeout(() => {
        setCurrentWidth(window.innerWidth);
        cooldown.current = false;
      }, 100);
    }
  }, [cooldown]);

  useEffect(() => {
    window.addEventListener("resize", updateSize);
    return window.addEventListener("resize", updateSize);
  }, [updateSize]);

  return [currentWidth];
}

export default useInnerWidth;
