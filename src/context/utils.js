import { v4 as uuidv4 } from "uuid";

import { UNPACKED_ITEMS, PACKED_ITEMS } from "../constants/constants";

export const addUnpackedItem = (state, itemName) => {
  const newItem = {
    id: uuidv4(),
    name: itemName,
    isPacked: false,
  };

  return {
    ...state,
    unpackedItems: [...state.unpackedItems, newItem],
  };
};

const switchItem = (oldItems, newItems, { id, isPacked }) => {
  const selectedItemIndex = oldItems.findIndex((item) => item.id === id);
  const selectedItem = oldItems[selectedItemIndex];
  selectedItem.isPacked = isPacked;
  oldItems.splice(selectedItemIndex, 1);
  newItems.push(selectedItem);
};

export const changePackedStatus = (state, payload) => {
  const unpackedItemsCopy = [...state.unpackedItems];
  const packedItemsCopy = [...state.packedItems];

  if (payload.isPacked) {
    switchItem(unpackedItemsCopy, packedItemsCopy, payload);
  } else {
    switchItem(packedItemsCopy, unpackedItemsCopy, payload);
  }

  return {
    ...state,
    unpackedItems: unpackedItemsCopy,
    packedItems: packedItemsCopy,
  };
};

export const changeAllToUnpacked = (state) => {
  const packedItemsCopy = [...state.packedItems].map((item) => ({
    ...item,
    isPacked: false,
  }));

  return {
    ...state,
    unpackedItems: [...state.unpackedItems, ...packedItemsCopy],
    packedItems: [],
  };
};

export const removeItem = (state, { id, type }) => {
  const stateCopy = { ...state };

  if (type === UNPACKED_ITEMS) {
    stateCopy.unpackedItems = [
      ...state.unpackedItems.filter((item) => item.id !== id),
    ];
  }

  if (type === PACKED_ITEMS) {
    stateCopy.packedItems = [
      ...state.packedItems.filter((item) => item.id !== id),
    ];
  }

  return stateCopy;
};

export const editItem = (state, { id, type, name }) => {
  const stateCopy = { ...state };

  let selectedItems;

  if (type === UNPACKED_ITEMS) {
    selectedItems = stateCopy.unpackedItems;
  }

  if (type === PACKED_ITEMS) {
    selectedItems = stateCopy.packedItems;
  }

  const selectedItem = selectedItems.find((item) => item.id === id);
  selectedItem.name = name;

  return stateCopy;
};
