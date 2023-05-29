"use client"
import React, { FC, useContext, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ModalContext, TModalContext } from "../../utils/contexts/modalContext";
import EmailCaptureModal from "@/app/components/emailCapture";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Styles from "./styles/modal.module.scss"


export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  let [modalOpen, setModal] = useState(false);
  let [component, setComponent] = useState<JSX.Element | null>(null);

  let containerRef = useRef<Element | null>(null)

  let handleModal = (newComponent: any, isOpen: boolean) => {
    setModal(isOpen);
    if (newComponent) {
      setComponent(newComponent);
    }
  };

  return (
    <ModalContext.Provider value={{ modalOpen, handleModal, component, containerRef }}>
      <Modal />
      {children}
    </ModalContext.Provider>
  );
};


export const Modal = () => {
  const { modalOpen, handleModal, component, containerRef } = useContext(
    ModalContext
  ) as TModalContext;

  const triggerModal = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.preventDefault();
    handleModal(null, false);
  };

  const ModalHTML = () => (
    <div className={Styles.modalWrapper}>
      <div
        className={Styles.modalBackground}
        style={{ background: "rgba(0,0,0,0.8)" }}
        onClick={triggerModal}
      ></div>
      <div className={Styles.modalWindow}>
        <div className={Styles.closeBtn}>
          <button onClick={triggerModal}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <div className={Styles.modalContent}>{component}</div>
      </div>
    </div>
  )

  useEffect(() => {
    containerRef.current = document.querySelector("#modal-root")
    handleModal(<EmailCaptureModal />, true)
  }, [])

  if (modalOpen && containerRef.current) {
    return createPortal(<ModalHTML />, containerRef.current);
  } else {
    return null;
  }
};