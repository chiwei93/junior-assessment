/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";

import {
  ADD_UNPACKED_ITEM,
  CHANGE_PACKED_STATUS,
  CHANGE_ALL_TO_UNPACKED,
  REMOVE_ITEM,
  EDIT_ITEM,
} from "./actionTypes";

import {
  addUnpackedItem,
  changePackedStatus,
  changeAllToUnpacked,
  removeItem,
  editItem,
} from "./utils";

const ItemsContext = createContext(undefined);
const ItemsDispatchContext = createContext(undefined);

const initialState = {
  unpackedItems: [],
  packedItems: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_UNPACKED_ITEM:
      return addUnpackedItem(state, action.payload);
    case CHANGE_PACKED_STATUS:
      return changePackedStatus(state, action.payload);
    case CHANGE_ALL_TO_UNPACKED:
      return changeAllToUnpacked(state);
    case REMOVE_ITEM:
      return removeItem(state, action.payload);
    case EDIT_ITEM:
      return editItem(state, action.payload);
    default:
      return state;
  }
};

export const ItemsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ItemsContext.Provider value={state}>
      <ItemsDispatchContext.Provider value={dispatch}>
        {children}
      </ItemsDispatchContext.Provider>
    </ItemsContext.Provider>
  );
};

export const useItemsContext = () => {
  const context = useContext(ItemsContext);

  if (!context) {
    throw new Error(
      "useItemsContext can only be used in a functional component"
    );
  }

  return context;
};

export const useItemsDispatchContext = () => {
  const context = useContext(ItemsDispatchContext);

  if (!context) {
    throw new Error(
      "useItemsDispatchContext can only be used in a functional component"
    );
  }

  return context;
};

ItemsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
