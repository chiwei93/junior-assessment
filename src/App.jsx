import Form from "./components/Form";
import Grid from "./components/Grid";
import { useItemsDispatchContext } from "./context/ItemsContext";
import { CHANGE_ALL_TO_UNPACKED } from "./context/actionTypes";

function App() {
  const dispatch = useItemsDispatchContext();

  const onMarkAllUnpackedBtnClick = () => {
    dispatch({
      type: CHANGE_ALL_TO_UNPACKED,
    });
  };

  return (
    <div className="flex justify-center mt-20 text-sm sm:text-base">
      <div
        className="border-2 border-purple-200 rounded p-6 sm:p-10"
        style={{ width: "min(85vw, 60rem)" }}
      >
        <h1 className="font-bold text-lg mb-4 text-purple-900 sm:text-2xl sm:mb-8">
          Packing List
        </h1>

        <Form />

        <div className="mt-8">
          <Grid />
        </div>

        <div className="mt-8">
          <button
            className="border-2 border-purple-300 rounded w-full px-2 py-1 bg-purple-100 sm:px-4 sm:py-2"
            type="button"
            onClick={onMarkAllUnpackedBtnClick}
          >
            Mark All as Unpacked
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
