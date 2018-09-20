import React from "react";
import PropTypes from "prop-types";

const Input = function(props) {
  return (
    <div>
      <input value={props.input} onChange={props.handleChange} />
    </div>
  );
};

Input.propTypes = {
  input: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Input;
