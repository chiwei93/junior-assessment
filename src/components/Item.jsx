import { useState, useId } from "react";
import PropTypes from "prop-types";
import { FaEdit, FaTrash, FaSave } from "react-icons/fa";

import Checkbox from "./Checkbox";

import { useItemsDispatchContext } from "../context/ItemsContext";

import {
  CHANGE_PACKED_STATUS,
  EDIT_ITEM,
  REMOVE_ITEM,
} from "../context/actionTypes";
import InputField from "./InputField";

export default function Item({ id, name, isPacked, type }) {
  const dispatch = useItemsDispatchContext();
  const [isEditing, setIsEditing] = useState(false);
  const [itemName, setItemName] = useState(name);
  const inputId = useId();

  const onCheckboxChange = (isPacked) => {
    dispatch({
      type: CHANGE_PACKED_STATUS,
      payload: { id, isPacked },
    });
  };

  const onEditBtnClick = () => {
    setIsEditing(true);
  };

  const onSaveBtnClick = () => {
    dispatch({
      type: EDIT_ITEM,
      payload: { id, type, name: itemName },
    });
    setIsEditing(false);
  };

  const onItemNameChange = (value) => {
    setItemName(value);
  };

  const onDeleteBtnClick = () => {
    dispatch({
      type: REMOVE_ITEM,
      payload: { id, type },
    });
  };

  return (
    <div className="flex items-center">
      <div className="mt-1">
        <Checkbox value={isPacked} onValueChange={onCheckboxChange} />
      </div>

      <div className="ml-2 sm:ml-3">
        {!isEditing ? (
          <span>{itemName}</span>
        ) : (
          <InputField
            value={itemName}
            onValueChange={onItemNameChange}
            id={`name-${inputId}`}
          />
        )}
      </div>

      <div className="ml-4 sm:ml-6">
        {!isEditing ? (
          <button className="mt-2" onClick={onEditBtnClick}>
            <FaEdit className="text-purple-600" />
          </button>
        ) : (
          <button className="mt-2" onClick={onSaveBtnClick}>
            <FaSave className="text-green-700" />
          </button>
        )}
      </div>

      <div className="ml-4 sm:ml-6">
        <button className="mt-2" onClick={onDeleteBtnClick}>
          <FaTrash className="text-red-600" />
        </button>
      </div>
    </div>
  );
}

Item.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isPacked: PropTypes.bool.isRequired,
  type: PropTypes.string,
};
