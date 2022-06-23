import { useState } from "react";
import { Context } from "./Context";

export default function Provider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Context.Provider value={{ isOpen, toggle }}>{children}</Context.Provider>
  );
}
