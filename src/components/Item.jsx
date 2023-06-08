import { FaEdit, FaTrash, FaSave } from "react-icons/fa";

import Checkbox from "./Checkbox";
import InputField from "./InputField";

export default function Item() {
  return (
    <div className="flex items-center">
      <div className="mt-1">
        <Checkbox />
      </div>

      <div className="ml-2 sm:ml-3">
        <span>Item name</span>
        {/* <InputField /> */}
      </div>

      <div className="ml-4 sm:ml-6">
        <button className="mt-2">
            <FaEdit className="text-purple-600" />
        </button>
        {/* save button */}
        {/* <button className="mt-2" onClick={onSaveBtnClick}>
            <FaSave className="text-green-700" />
        </button> */}
      </div>

      <div className="ml-4 sm:ml-6">
        <button className="mt-2">
          <FaTrash className="text-red-600" />
        </button>
      </div>
    </div>
  );
}
