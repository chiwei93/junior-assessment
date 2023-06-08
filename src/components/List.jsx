import PropTypes from "prop-types";
import Item from "./Item";

export default function List({ heading }) {
  return (
    <div className="border-2 border-purple-300 rounded p-4 sm:p-6">
      <h2 className="font-bold text-base mb-4">{heading}</h2>

      <p className="text-purple-800">(Nothing to show.)</p>
    </div>
  );
}

List.propTypes = {
  heading: PropTypes.string.isRequired,
};
