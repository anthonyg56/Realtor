"use client"
import { useRef, useState } from 'react'

const useModal = () => {
  let [modalOpen, setModal] = useState(false);
  let [component, setComponent] = useState<JSX.Element | null>(null);

  let containerRef = useRef<Element | null>(null)
  
  let handleModal = (newComponent: any, isOpen: boolean) => {
    setModal(isOpen);
    if (newComponent) {
      setComponent(newComponent);
    }
  };

  return { 
    modalOpen, 
    handleModal, 
    component,
    containerRef
  };
}

export default useModal