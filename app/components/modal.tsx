"use client"
import React, { FC, useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import useModal from "../../utils/hooks/useModal";
import { ModalContext, TModalContext } from "../../utils/contexts/modalContext";
import EmailCaptureModal from "@/app/components/emailCapture";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Styles from "./styles/modal.module.scss"

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const { modalOpen, handleModal, component, containerRef } = useModal();

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
    <div id="modal-wrapper" className={Styles.modalWrapper}>
        <div
        className={Styles.modalBackground}
          id="modal-background"
          style={{ background: "rgba(0,0,0,0.8)" }}
          onClick={triggerModal}
        ></div>
        <div id="modal-window" className={Styles.modalWindow}>
          <div id="close-btn" className={Styles.closeBtn}>
            <button onClick={triggerModal}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
          <div id="modal-content" className={Styles.modalContent}>{component}</div>
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