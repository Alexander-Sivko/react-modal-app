import React from "react";
import PropTypes from 'prop-types'


const Button = (props) => {
  const { backgroundColor, text, onClick } = props;
  return (
    <button style={{ backgroundColor }} onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  backgroundColor: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func
}

export default Button;
