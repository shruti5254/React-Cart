import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { CiTrash } from "react-icons/ci";

const Cart = () => {
  const { cartItems, updateCartQty, removeFromCart, navigate } = useContext(AppContext);

  // Calculate subtotal by summing (numericPrice * quantity) for each item
  const subtotal = cartItems.reduce((sum, item) => {
    // Strip the "$" and parse as a float
    const price = parseFloat(item.priceNew?.replace("$", "") || 0);
    return sum + price * item.quantity;
  }, 0);

  return (
    <div className="custom-container mx-auto w-full py-10 min-h-[60vh]">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-8 flex items-center gap-2">
        <Link to="/" className="hover:text-[var(--color-accentbkp)] transition-colors">Home</Link>
        <span>/</span>
        <span className="text-[var(--text)] font-medium">Cart</span>
      </nav>

      {cartItems.length === 0 ? (
        /* Empty cart state */
        <div className="flex flex-col items-center justify-center gap-6 py-20 text-center">
          <p className="text-2xl font-semibold text-gray-400">Your cart is empty</p>
          <p className="text-gray-400 text-sm">Looks like you haven't added anything yet.</p>
          <button
            onClick={() => navigate("/")}
            className="px-10 py-3 rounded text-white bg-[var(--color-accentbkp)] hover:opacity-90 transition-opacity cursor-pointer"
          >
            Return To Shop
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-8">
          {/* Cart Table */}
          <div className="w-full overflow-x-auto rounded shadow-sm border border-gray-100">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left px-6 py-4 font-medium text-gray-600">Product</th>
                  <th className="text-left px-6 py-4 font-medium text-gray-600">Price</th>
                  <th className="text-left px-6 py-4 font-medium text-gray-600">Quantity</th>
                  <th className="text-left px-6 py-4 font-medium text-gray-600">Subtotal</th>
                  <th className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => {
                  const unitPrice = parseFloat(item.priceNew?.replace("$", "") || 0);
                  const lineTotal = unitPrice * item.quantity;
                  return (
                    <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      {/* Product column: thumbnail + name */}
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-14 h-14 object-contain rounded bg-[var(--backgroundbkp)] p-1"
                          />
                          <span className="font-medium capitalize">{item.title}</span>
                        </div>
                      </td>

                      {/* Unit price */}
                      <td className="px-6 py-4 text-gray-600">{item.priceNew}</td>

                      {/* Quantity stepper — calls updateCartQty from context */}
                      <td className="px-6 py-4">
                        <div className="flex flex-row w-max border border-gray-300 rounded text-sm font-medium">
                          <button
                            onClick={() => updateCartQty(item.id, item.quantity - 1)}
                            className="w-8 h-9 flex items-center justify-center hover:bg-[var(--color-accentbkp)] hover:text-white transition-colors"
                          >
                            −
                          </button>
                          <span className="w-12 h-9 flex items-center justify-center border-x border-gray-300">
                            {String(item.quantity).padStart(2, "0")}
                          </span>
                          <button
                            onClick={() => updateCartQty(item.id, item.quantity + 1)}
                            className="w-8 h-9 flex items-center justify-center hover:bg-[var(--color-accentbkp)] hover:text-white transition-colors"
                          >
                            +
                          </button>
                        </div>
                      </td>

                      {/* Line subtotal */}
                      <td className="px-6 py-4 font-medium">${lineTotal.toFixed(0)}</td>

                      {/* Remove button */}
                      <td className="px-6 py-4">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-400 hover:text-[var(--color-accentbkp)] transition-colors"
                          aria-label="Remove item"
                        >
                          <CiTrash size="1.4em" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Actions row: Return to Shop + Update Cart */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate("/")}
              className="px-8 py-2.5 border border-gray-300 rounded text-sm font-medium hover:bg-gray-50 transition-colors cursor-pointer"
            >
              Return To Shop
            </button>
            <button
              className="px-8 py-2.5 border border-gray-300 rounded text-sm font-medium hover:bg-gray-50 transition-colors cursor-pointer"
            >
              Update Cart
            </button>
          </div>

          {/* Coupon + Cart Total row */}
          <div className="flex flex-col md:flex-row gap-8 justify-between">
            {/* Coupon code input */}
            <div className="flex items-center gap-3 h-max mt-auto">
              <input
                type="text"
                placeholder="Coupon Code"
                className="border border-gray-300 rounded px-4 py-2.5 text-sm outline-none focus:border-[var(--color-accentbkp)] w-52 transition-colors"
              />
              <button className="px-6 py-2.5 rounded text-white text-sm bg-[var(--color-accentbkp)] hover:opacity-90 transition-opacity cursor-pointer whitespace-nowrap">
                Apply Coupon
              </button>
            </div>

            {/* Cart Total summary box */}
            <div className="border border-gray-200 rounded p-6 w-full md:w-96 flex flex-col gap-4 shadow-sm">
              <h6 className="font-semibold text-base !text-base">Cart Total</h6>

              <div className="flex justify-between items-center text-sm border-b border-gray-100 pb-3">
                <span className="text-gray-600">Subtotal:</span>
                <span className="font-medium">${subtotal.toFixed(0)}</span>
              </div>

              <div className="flex justify-between items-center text-sm border-b border-gray-100 pb-3">
                <span className="text-gray-600">Shipping:</span>
                <span className="text-green-600 font-medium">Free</span>
              </div>

              <div className="flex justify-between items-center text-sm font-semibold">
                <span>Total:</span>
                <span>${subtotal.toFixed(0)}</span>
              </div>

              <button
                className="w-full py-3 rounded text-white text-sm bg-[var(--color-accentbkp)] hover:opacity-90 transition-opacity cursor-pointer mt-2"
                onClick={() => navigate("/checkout")}
              >
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
