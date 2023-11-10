import React, { useState } from "react";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import ModalImg from "./components/Modal/ModalImg";

import "./App.scss";

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [selectedModal, setSelectedModal] = useState(null);

  const openModal = (modal) => {
    setSelectedModal(modal);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedModal(null);
  };

  const handleOutsideClick = (e) => {
    if (modalIsOpen && e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="app">
      <Button
        backgroundColor="blue"
        text="Open the first modal"
        onClick={() => openModal("ModalImg")}
      />
      <Button
        backgroundColor="green"
        text="Open second modal"
        onClick={() => openModal("Modal")}
      />

      {modalIsOpen && selectedModal === "ModalImg" && (
        <div className="wrapper" onClick={handleOutsideClick}>
          <ModalImg
        
            header="Modal 1"
            closeButton={true}
            text="
          The first modal window"
            onClose={closeModal}
            actions={
              <div className="footerButton">
                <Button
                  backgroundColor="darkorchid"
                  color="white"
                  text="NO, CLOSE"
                  onClick={closeModal}
                />
                <button className="deleteButton" onClick={closeModal}>
                  YES, DELETE
                </button>
              </div>
            }
          />
        </div>
      )}

      {modalIsOpen && selectedModal === "Modal" && (
        <div className="wrapper" onClick={handleOutsideClick}>
          <Modal
        
            header="Modal 2"
            closeButton={true}
            text="Second modal window"
            onClose={closeModal}
            actions={
              <Button
                onClick={closeModal}
                backgroundColor="darkorchid"
                text="ADO TO FAVORITE"
              />
            }
          />
        </div>
      )}
    </div>
  );
  
};

export default App;