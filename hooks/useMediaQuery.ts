import { useState, useEffect } from "react";

export default function useMediaQuery(query: string) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handleMediaQueryChange = (e: any) => {
      setIsMobile(e.matches);
    }
    mediaQuery.addListener(handleMediaQueryChange);
    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    }
  }, [query]);

  return isMobile;
}