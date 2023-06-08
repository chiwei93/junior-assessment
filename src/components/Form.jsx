import InputField from "./InputField";

export default function Form() {
  const onFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div>
        <label htmlFor="item" className="mb-1 block sm:mb-2">
          New Item Name:
        </label>

        <div className="flex flex-col gap-y-2 sm:flex-row">
          <div className="flex flex-col flex-[3]">
            <InputField />
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
