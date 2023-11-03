import React, { useState } from "react";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import ModalImg from "./components/Modal/ModalImg";

import "./App.scss";

const App = () => {
  const [modalImgIsOpen, setModalImgIsOpen] = useState(false);
  const [modal2IsOpen, setModal2IsOpen] = useState(false);

  const openModalImg = () => {
    setModalImgIsOpen(true);
  };

  const openModal2 = () => {
    setModal2IsOpen(true);
  };

  const closeModalImg = () => {
    setModalImgIsOpen(false);
  };

  const closeModal2 = () => {
    setModal2IsOpen(false);
  };

  return (
    <div className="app">
      <Button
        backgroundColor="blue"
        text="Open the first modal"
        onClick={openModalImg}
      />
      <Button
        backgroundColor="green"
        text="Open second modal"
        onClick={openModal2}
      />

      {modalImgIsOpen && (
        <ModalImg
          header="Modal 1"
          closeButton={true}
          text="
          The first modal window"
          onClose={closeModalImg}
          actions={
            <div>
              <Button
                backgroundColor="darkorchid"
                color="white"
                // borderRadius="5px"
                text="NO, CLOSE"
                onClick={closeModalImg}
              />
              <button className="deleteButton" onClick={closeModalImg}>
                YES, DELETE
              </button>
            </div>
          }
        />
        
      )}

      {modal2IsOpen && (
        <Modal
          header="Modal 2"
          closeButton={true}
          text="Second modal window"
          onClose={closeModal2}
          actions={
            <Button
              onClick={closeModal2}
              backgroundColor="darkorchid"
              color="white"
              borderRadius="5px"
              text="ADO TO FAVORITE"
            />
          }
        />
      )}
    </div>
  );
};

export default App;
