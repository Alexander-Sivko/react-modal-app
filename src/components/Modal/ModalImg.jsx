// import React from "react";

import React from "react";

const ModalImg = (props) => {
  const { header, closeButton, text, actions } = props;

  return (
    <div className="modal">
      <div className="modal-content">
        {closeButton && (
          <span onClick={props.onClose} className="modal-close">
            &times;
          </span>
        )}    
         <div className="divImg">
            <img
              src="https://media.md-fashion.com.ua/images/60/80/c98449f910be2e5033b2729b9db9.jpg"
              alt=""
            />
          </div>

        <div className="modal-header">
      
          
          <h2>{header}</h2>
        </div>
        <div className="modal-body">{text}</div>
        <div className="modal-footer">{actions}</div>
      </div>
    </div>
  );
};

export default ModalImg;
