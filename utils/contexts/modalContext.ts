import { createContext } from "react";

/**
 * Contexts contain variables and pieces of data that will be globaly used within
 * the app
 * 
 */
export type TModalContext = {
  containerRef: React.MutableRefObject<any>,
  modalOpen: boolean,
  component: any,
  handleModal: (component: any, isOpen: boolean) => void,
}

export const ModalContext = createContext<Partial<TModalContext>>({})