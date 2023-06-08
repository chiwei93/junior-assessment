import List from "./List";

export default function Grid() {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-x-6">
      <div className="mb-4 lg:mb-0">
        <List
          heading="Unpacked Items"
        />
      </div>

      <div>
        <List heading="Packed Items" />
      </div>
    </div>
  );
}
