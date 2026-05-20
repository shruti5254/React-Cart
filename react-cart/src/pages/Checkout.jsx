import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { BsCreditCard2Back } from "react-icons/bs";
import { MdOutlineLocalShipping } from "react-icons/md";

const Checkout = () => {
  const { cartItems, navigate } = useContext(AppContext);
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [saveInfo, setSaveInfo] = useState(true);
  const [coupon, setCoupon] = useState("");
  const [form, setForm] = useState({
    firstName: "", companyName: "", street: "",
    apartment: "", city: "", phone: "", email: "",
  });

  const subtotal = cartItems.reduce((sum, item) => {
    return sum + parseFloat(item.priceNew?.replace("$", "") || 0) * item.quantity;
  }, 0);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handlePlaceOrder = () => {
    const required = ["firstName", "street", "city", "phone", "email"];
    for (const key of required) {
      if (!form[key].trim()) {
        alert(`Please fill in the required field: ${key.replace(/([A-Z])/g, " $1")}`);
        return;
      }
    }
    alert("Order placed successfully! Thank you for shopping with us.");
    navigate("/");
  };

  return (
    <div className="custom-container mx-auto w-full py-10 min-h-[60vh]">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-10 flex items-center gap-2 flex-wrap">
        {[
          { label: "Account", to: "/my-account" },
          { label: "My Account", to: "/my-account" },
          { label: "Product", to: "/products" },
          { label: "View Cart", to: "/cart" },
        ].map(({ label, to }) => (
          <span key={label} className="flex items-center gap-2">
            <Link to={to} className="hover:text-[var(--color-accentbkp)] transition-colors">{label}</Link>
            <span>/</span>
          </span>
        ))}
        <span className="text-[var(--text)] font-semibold">CheckOut</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-16">
        {/* ── LEFT: Billing Details ── */}
        <div className="flex-1 flex flex-col gap-6">
          <h4 className="font-semibold text-2xl !text-2xl">Billing Details</h4>

          <div className="flex flex-col gap-5">
            {/* First Name */}
            <div>
              <label className="text-sm mb-1.5 block text-gray-600">
                First Name<span className="text-[var(--color-accentbkp)]">*</span>
              </label>
              <input
                name="firstName" value={form.firstName} onChange={handleChange}
                className="w-full bg-[var(--backgroundbkp)] rounded px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-[var(--color-accentbkp)] transition"
              />
            </div>

            {/* Company Name */}
            <div>
              <label className="text-sm mb-1.5 block text-gray-600">Company Name</label>
              <input
                name="companyName" value={form.companyName} onChange={handleChange}
                className="w-full bg-[var(--backgroundbkp)] rounded px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-[var(--color-accentbkp)] transition"
              />
            </div>

            {/* Street Address */}
            <div>
              <label className="text-sm mb-1.5 block text-gray-600">
                Street Address<span className="text-[var(--color-accentbkp)]">*</span>
              </label>
              <input
                name="street" value={form.street} onChange={handleChange}
                className="w-full bg-[var(--backgroundbkp)] rounded px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-[var(--color-accentbkp)] transition"
              />
            </div>

            {/* Apartment */}
            <div>
              <label className="text-sm mb-1.5 block text-gray-600">Apartment, floor, etc. (optional)</label>
              <input
                name="apartment" value={form.apartment} onChange={handleChange}
                className="w-full bg-[var(--backgroundbkp)] rounded px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-[var(--color-accentbkp)] transition"
              />
            </div>

            {/* Town / City */}
            <div>
              <label className="text-sm mb-1.5 block text-gray-600">
                Town/City<span className="text-[var(--color-accentbkp)]">*</span>
              </label>
              <input
                name="city" value={form.city} onChange={handleChange}
                className="w-full bg-[var(--backgroundbkp)] rounded px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-[var(--color-accentbkp)] transition"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-sm mb-1.5 block text-gray-600">
                Phone Number<span className="text-[var(--color-accentbkp)]">*</span>
              </label>
              <input
                name="phone" value={form.phone} onChange={handleChange} type="tel"
                className="w-full bg-[var(--backgroundbkp)] rounded px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-[var(--color-accentbkp)] transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm mb-1.5 block text-gray-600">
                Email Address<span className="text-[var(--color-accentbkp)]">*</span>
              </label>
              <input
                name="email" value={form.email} onChange={handleChange} type="email"
                className="w-full bg-[var(--backgroundbkp)] rounded px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-[var(--color-accentbkp)] transition"
              />
            </div>

            {/* Save info checkbox */}
            <label className="flex items-center gap-3 cursor-pointer select-none mt-1">
              <input
                type="checkbox" checked={saveInfo}
                onChange={(e) => setSaveInfo(e.target.checked)}
                className="w-4 h-4 accent-[var(--color-accentbkp)] cursor-pointer"
              />
              <span className="text-sm text-gray-600">Save this information for faster check-out next time</span>
            </label>
          </div>
        </div>

        {/* ── RIGHT: Order Summary ── */}
        <div className="w-full lg:w-[420px] flex flex-col gap-5">
          {/* Cart items list */}
          <div className="flex flex-col gap-4">
            {cartItems.length === 0 ? (
              <p className="text-gray-400 text-sm">Your cart is empty. <Link to="/" className="text-[var(--color-accentbkp)]">Shop now</Link></p>
            ) : cartItems.map((item) => {
              const lineTotal = parseFloat(item.priceNew?.replace("$", "") || 0) * item.quantity;
              return (
                <div key={item.id} className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img src={item.image} alt={item.title}
                        className="w-14 h-14 object-contain bg-[var(--backgroundbkp)] rounded p-1" />
                      {/* Qty badge */}
                      <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[var(--color-accentbkp)] text-white text-[10px] font-bold flex items-center justify-center">
                        {item.quantity}
                      </span>
                    </div>
                    <span className="text-sm font-medium capitalize">{item.title}</span>
                  </div>
                  <span className="text-sm font-medium whitespace-nowrap">${lineTotal.toFixed(0)}</span>
                </div>
              );
            })}
          </div>

          {/* Divider */}
          <hr className="border-gray-200" />

          {/* Subtotal / Shipping / Total */}
          <div className="flex flex-col gap-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal:</span>
              <span className="font-medium">${subtotal.toFixed(0)}</span>
            </div>
            <hr className="border-gray-100" />
            <div className="flex justify-between">
              <span className="text-gray-600">Shipping:</span>
              <span className="text-green-600 font-medium flex items-center gap-1.5">
                <MdOutlineLocalShipping size="1.1em" /> Free
              </span>
            </div>
            <hr className="border-gray-100" />
            <div className="flex justify-between font-semibold text-base">
              <span>Total:</span>
              <span>${subtotal.toFixed(0)}</span>
            </div>
          </div>

          {/* Payment method */}
          <div className="flex flex-col gap-3">
            {/* Bank */}
            <label className="flex items-center justify-between cursor-pointer">
              <div className="flex items-center gap-3">
                <input type="radio" name="payment" value="bank"
                  checked={paymentMethod === "bank"}
                  onChange={() => setPaymentMethod("bank")}
                  className="w-4 h-4 accent-[var(--color-accentbkp)]" />
                <span className="text-sm font-medium">Bank</span>
              </div>
              {/* Card brand icons */}
              <div className="flex items-center gap-1.5">
                <BsCreditCard2Back className="text-gray-500" size="1.6em" title="Visa" />
                <span className="text-xs font-bold text-blue-700 border border-blue-700 px-1 rounded">VISA</span>
                <span className="text-xs font-bold text-red-600 border border-red-600 px-1 rounded">MC</span>
                <span className="text-xs font-bold text-orange-500 border border-orange-500 px-1 rounded">AmEx</span>
              </div>
            </label>

            {/* Cash on delivery */}
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="radio" name="payment" value="cash"
                checked={paymentMethod === "cash"}
                onChange={() => setPaymentMethod("cash")}
                className="w-4 h-4 accent-[var(--color-accentbkp)]" />
              <span className="text-sm font-medium">Cash on delivery</span>
            </label>
          </div>

          {/* Coupon + Place Order */}
          <div className="flex items-center gap-3">
            <input
              type="text" placeholder="Coupon Code" value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              className="flex-1 border border-gray-300 rounded px-4 py-2.5 text-sm outline-none focus:border-[var(--color-accentbkp)] transition"
            />
            <button className="px-5 py-2.5 rounded text-white text-sm bg-[var(--color-accentbkp)] hover:opacity-90 transition-opacity cursor-pointer whitespace-nowrap">
              Apply Coupon
            </button>
          </div>

          <button
            onClick={handlePlaceOrder}
            className="w-max px-10 py-3 rounded text-white bg-[var(--color-accentbkp)] hover:opacity-90 transition-opacity cursor-pointer text-sm font-medium"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
