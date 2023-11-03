import React from "react";

const Button = (props) => {
  const { backgroundColor, text, onClick } = props;
  return (
    <button style={{ backgroundColor }} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
