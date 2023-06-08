import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";

export default function InputField({ id, onValueChange, value }) {
  const onInputChange = (e) => {
    onValueChange(e.target.value);
  };

  const onClearBtnClick = () => {
    onValueChange("");
  };

  return (
    <div className="w-full flex flex-col relative">
      <input
        type="text"
        value={value}
        onChange={onInputChange}
        className="border border-slate-600 rounded px-2 py-1"
        id={id}
        name={id}
      />

      {value?.length > 0 && (
        <button
          className="absolute top-2 right-2"
          type="button"
          onClick={onClearBtnClick}
        >
          <FaTimes className="text-purple-800" />
        </button>
      )}
    </div>
  );
}

InputField.propTypes = {
  id: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
