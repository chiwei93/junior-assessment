import List from "./List";

import { useItemsContext } from "../context/ItemsContext";

import { UNPACKED_ITEMS, PACKED_ITEMS } from "../constants/constants";

export default function Grid() {
  const { unpackedItems, packedItems } = useItemsContext();

  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-x-6">
      <div className="mb-4 lg:mb-0">
        <List
          heading="Unpacked Items"
          items={unpackedItems}
          type={UNPACKED_ITEMS}
        />
      </div>

      <div>
        <List heading="Packed Items" items={packedItems} type={PACKED_ITEMS} />
      </div>
    </div>
  );
}
