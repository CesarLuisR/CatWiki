import React, { createContext } from "react";

export const Context = createContext({
  isOpen: false,
  toggle: () => {},
});
