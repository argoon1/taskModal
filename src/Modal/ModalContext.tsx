import React, { useContext } from "react";
export const ModalContext = React.createContext({
  isInModal: false,
  toggle: () => {},
});

export function useModalContext() {
  const contextValue = useContext(ModalContext);
  return contextValue;
}
export type ModalContextType = React.ContextType<typeof ModalContext>;
