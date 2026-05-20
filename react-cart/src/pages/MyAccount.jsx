import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const SIDEBAR_LINKS = [
  {
    group: "Manage My Account",
    items: [
      { label: "My Profile", to: "/my-account" },
      { label: "Address Book", to: "/my-account/address" },
      { label: "My Payment Options", to: "/my-account/payment" },
    ],
  },
  {
    group: "My Orders",
    items: [
      { label: "My Returns", to: "/my-orders" },
      { label: "My Cancellations", to: "/my-orders" },
    ],
  },
  {
    group: "My Wishlist",
    items: [{ label: "My Wishlist", to: "/wishlist" }],
  },
];

const MyAccount = () => {
  const { user, setUser, navigate } = useContext(AppContext);
  const [firstName, setFirstName] = useState(user?.name?.split(" ")[0] || "");
  const [lastName, setLastName]   = useState(user?.name?.split(" ")[1] || "");
  const [email, setEmail]         = useState(user?.email || "");
  const [address, setAddress]     = useState(user?.address || "");
  const [currentPw, setCurrentPw] = useState("");
  const [newPw, setNewPw]         = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [saved, setSaved]         = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    if (newPw && newPw !== confirmPw) {
      alert("New passwords don't match.");
      return;
    }
    // Persist name + email back to context user object
    setUser((prev) => ({ ...prev, name: `${firstName} ${lastName}`.trim(), email, address }));
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  if (!user) {
    return (
      <div className="custom-container mx-auto w-full py-20 text-center">
        <p className="text-gray-500 mb-4">You need to be logged in to view your account.</p>
        <button onClick={() => navigate("/login")}
          className="px-8 py-3 rounded text-white bg-[var(--color-accentbkp)] hover:opacity-90 transition-opacity cursor-pointer">
          Login
        </button>
      </div>
    );
  }

  return (
    <div className="custom-container mx-auto w-full py-10 min-h-[60vh]">
      {/* Breadcrumb + welcome */}
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <nav className="text-sm text-gray-500 flex items-center gap-2">
          <Link to="/" className="hover:text-[var(--color-accentbkp)] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[var(--text)] font-medium">My Account</span>
        </nav>
        <p className="text-sm text-gray-500">
          Welcome!{" "}
          <span className="text-[var(--color-accentbkp)] font-medium">{user.name}</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        {/* ── Sidebar ── */}
        <aside className="w-full md:w-56 flex-shrink-0 flex flex-col gap-6">
          {SIDEBAR_LINKS.map(({ group, items }) => (
            <div key={group} className="flex flex-col gap-2">
              <p className="font-semibold text-sm">{group}</p>
              {items.map(({ label, to }) => (
                <Link
                  key={label} to={to}
                  className={`pl-4 text-sm transition-colors hover:text-[var(--color-accentbkp)] !no-underline
                    ${label === "My Profile" ? "!text-[var(--color-accentbkp)] font-medium" : "text-gray-500"}`}
                >
                  {label}
                </Link>
              ))}
            </div>
          ))}
        </aside>

        {/* ── Profile form ── */}
        <div className="flex-1 border border-gray-100 rounded-md shadow-sm p-8">
          <h5 className="text-[var(--color-accentbkp)] font-semibold text-lg !text-lg mb-6">
            Edit Your Profile
          </h5>

          {saved && (
            <div className="mb-4 px-4 py-2 bg-green-50 border border-green-200 rounded text-green-700 text-sm">
              Changes saved successfully!
            </div>
          )}

          <form onSubmit={handleSave} className="flex flex-col gap-6">
            {/* Name row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium">First Name</label>
                <input value={firstName} onChange={(e) => setFirstName(e.target.value)}
                  className="bg-[var(--backgroundbkp)] rounded px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-[var(--color-accentbkp)] transition" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium">Last Name</label>
                <input value={lastName} onChange={(e) => setLastName(e.target.value)}
                  className="bg-[var(--backgroundbkp)] rounded px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-[var(--color-accentbkp)] transition" />
              </div>
            </div>

            {/* Email + Address row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium">Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                  className="bg-[var(--backgroundbkp)] rounded px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-[var(--color-accentbkp)] transition" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium">Address</label>
                <input value={address} onChange={(e) => setAddress(e.target.value)}
                  placeholder="Kingston, 5236, United State"
                  className="bg-[var(--backgroundbkp)] rounded px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-[var(--color-accentbkp)] transition" />
              </div>
            </div>

            {/* Password changes */}
            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium">Password Changes</label>
              <input type="password" placeholder="Current Password" value={currentPw}
                onChange={(e) => setCurrentPw(e.target.value)}
                className="bg-[var(--backgroundbkp)] rounded px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-[var(--color-accentbkp)] transition" />
              <input type="password" placeholder="New Password" value={newPw}
                onChange={(e) => setNewPw(e.target.value)}
                className="bg-[var(--backgroundbkp)] rounded px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-[var(--color-accentbkp)] transition" />
              <input type="password" placeholder="Confirm New Password" value={confirmPw}
                onChange={(e) => setConfirmPw(e.target.value)}
                className="bg-[var(--backgroundbkp)] rounded px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-[var(--color-accentbkp)] transition" />
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-5 mt-2">
              <button type="button" onClick={() => navigate(-1)}
                className="text-sm text-gray-500 hover:text-[var(--text)] transition-colors cursor-pointer">
                Cancel
              </button>
              <button type="submit"
                className="px-8 py-3 rounded text-white bg-[var(--color-accentbkp)] hover:opacity-90 transition-opacity cursor-pointer text-sm font-medium">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
