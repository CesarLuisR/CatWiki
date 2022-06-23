import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function Portal({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const root = document.getElementById("modal-root");

  if (!root || !isMounted) return null;

  return createPortal(<>{children}</>, root);
}
