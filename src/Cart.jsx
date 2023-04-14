export function Cart() {
  return (
    <>
      <label
        htmlFor="my-modal-2"
        className="cursor-pointer bg-zinc-800 bg-opacity-60 py-4 px-4 rounded-3xl hover:bg-opacity-100 transition-all duration-300"
      >
        <img style={{ width: "20px" }} src="./src/assets/cart.png"></img>
      </label>
      <input type="checkbox" id="my-modal-2" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative bg-zinc-800">
          <label
            htmlFor="my-modal-2"
            className="btn btn-outline btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
        </div>
      </div>
    </>
  );
}
