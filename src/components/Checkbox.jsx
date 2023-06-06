import { useState } from "react";
import PropTypes from "prop-types";

export default function Checkbox({ onValueChange, value }) {
  const [checked, setChecked] = useState(value);

  const onCheckboxChange = () => {
    setChecked((prevValue) => {
      onValueChange(!prevValue);
      return !prevValue;
    });
  };

  return (
    <input type="checkbox" onChange={onCheckboxChange} checked={checked} />
  );
}

Checkbox.propTypes = {
  value: PropTypes.bool.isRequired,
  onValueChange: PropTypes.func.isRequired,
};
