import { useState } from "react";

import InputField from "./InputField";

import { useItemsDispatchContext } from "../context/ItemsContext";

import { ADD_UNPACKED_ITEM } from "../context/actionTypes";

export default function Form() {
  const [itemName, setItemName] = useState("");
  const dispatch = useItemsDispatchContext();

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADD_UNPACKED_ITEM, payload: itemName });
    setItemName("");
  };

  const onItemNameChange = (itemName) => {
    setItemName(itemName);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div>
        <label htmlFor="item" className="mb-1 block sm:mb-2">
          New Item Name:
        </label>

        <div className="flex flex-col gap-y-2 sm:flex-row">
          <div className="flex flex-col flex-[3]">
            <InputField
              id="item"
              value={itemName}
              onValueChange={onItemNameChange}
            />
          </div>

          <button
            className="border-slate-600 border rounded bg-purple-100 px-2 py-1 flex-[1]"
            type="submit"
          >
            Add new item
          </button>
        </div>
      </div>
    </form>
  );
}
