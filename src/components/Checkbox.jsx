import { useState } from "react";
import PropTypes from "prop-types";

export default function Checkbox({ id, onValueChange, value }) {
  const [checked, setChecked] = useState(value);

  const onCheckboxChange = () => {
    setChecked((prevValue) => {
      onValueChange(!prevValue);
      return !prevValue;
    });
  };

  return (
    <input type="checkbox" onChange={onCheckboxChange} checked={checked} id={id} />
  );
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  onValueChange: PropTypes.func.isRequired,
};
