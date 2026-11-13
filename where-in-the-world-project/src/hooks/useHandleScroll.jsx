import { useEffect } from "react";

export function useHandleScroll() {
  useEffect(() => {
    const handleScroll = () => {
      document.activeElement.blur();
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}
