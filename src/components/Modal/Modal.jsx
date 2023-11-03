import React from "react";

const Modal = (props) => {
  const { header, closeButton, text, actions } = props;

  return (
    <div className="modal">
      <div className="modal-content">
        {closeButton && (
          <span onClick={props.onClose} className="modal-close">
            &times;
          </span>
        )} 

        <div className="modal-header">
         
          <h2>{header}</h2>
        </div>
        <div className="modal-body">{text}</div>
        <div className="modal-footer">{actions}</div>
      </div>
    </div>
  );
};

export default Modal;
