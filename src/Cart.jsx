import { useEffect } from "react";
import { EmptyCart } from "./EmptyCart";
import "/src/styles/index.css";

export function Cart({ cartProducts, setCartProducts }) {
  function handleRemove(array, e) {
    const removeId = e.target.dataset.removeId;
    const updatedCart = array.filter((product) => product.id !== removeId);
    setCartProducts(updatedCart);
  }

  useEffect(() => {
    const modalInput = document.getElementById("nav-modal-2");
    const body = document.body;

    modalInput.addEventListener("change", () => {
      if (modalInput.checked) {
        body.classList.add("modal-open");
      } else {
        body.classList.remove("modal-open");
      }
    });
  }, []);

  return (
    <>
      <div className="indicator">
        <span className="indicator-item badge badge-secondary">
          {cartProducts.reduce((acc, product) => {
            return acc + product.quantity;
          }, 0)}
        </span>

        <label
          htmlFor="nav-modal-2"
          className="cursor-pointer bg-zinc-800 bg-opacity-60 py-4 px-4 rounded-3xl hover:bg-opacity-100 transition-all duration-300"
        >
          <img style={{ width: "20px" }} src="assets/cart.png"></img>
        </label>
      </div>
      <input type="checkbox" id="nav-modal-2" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box py-12 relative overflow-hidden bg-zinc-800 flex flex-col">
          <label
            htmlFor="nav-modal-2"
            className="btn btn-outline btn-sm btn-circle fixed right-2 top-2"
          >
            ✕
          </label>
          {cartProducts.length === 0 ? (
            <EmptyCart />
          ) : (
            <div className="mt-auto overflow-auto" id="cart-container">
              {cartProducts.map((product) => (
                <div
                  key={crypto.randomUUID()}
                  className="grid grid-cols-5 py-5 m-auto border-t-4 gap-3 border-gray-400"
                >
                  <img className="my-auto col-span-2" src={product.image} />
                  <div className=" col-span-2 gap-3 flex flex-col">
                    <p className="font-bold text-lg">{product.name}</p>
                    <p className="font-thin text-sm">{product.description}</p>
                    <div className="flex justify-between">
                      <span className="font-bold text-lg">
                        {(
                          (product.price * product.quantity) /
                          100
                        ).toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </span>
                      <span className="font-thin text-lg ">
                        ×{product.quantity}
                      </span>
                    </div>
                  </div>
                  <div
                    data-remove-id={product.id}
                    onClick={(e) => handleRemove(cartProducts, e)}
                    className="m-auto cursor-pointer hover:text-primary "
                  >
                    ✕
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="flex justify-between border-gray-400 border-t-4 w-full">
            <span className="font-thin text-lg py-2">TOTAL PRICE</span>
            <span className="font-bold text-lg py-2 text-white">
              {cartProducts
                .reduce((acc, product) => {
                  return acc + (product.price * product.quantity) / 100;
                }, 0)
                .toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
