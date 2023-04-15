import "/src/styles/gear-animation.css";

export function EmptyCart() {
  return (
    <div className="flex flex-col py-4 items-center border-t-4 border-gray-400">
      <div className="gears" id="one-gear">
        <div className="gears-container">
          <div className="gear-rotate"></div>
        </div>
      </div>
      <h1 className="text-3xl font-thin">Your cart is empty.</h1>
    </div>
  );
}
