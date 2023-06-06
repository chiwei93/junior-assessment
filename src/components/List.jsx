import PropTypes from "prop-types";
import Item from "./Item";

export default function List({ heading, items, type }) {
  return (
    <div className="border-2 border-purple-300 rounded p-4 sm:p-6">
      <h2 className="font-bold text-base mb-4">{heading}</h2>

      {items.length === 0 && (
        <p className="text-purple-800">(Nothing to show.)</p>
      )}

      {items.length > 0 &&
        items.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            isPacked={item.isPacked}
            type={type}
          />
        ))}
    </div>
  );
}

List.propTypes = {
  heading: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  type: PropTypes.string,
};
