import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { PiShoppingCartThin } from "react-icons/pi";
import { CgMenuRight } from "react-icons/cg";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { user, setUser, navigate, setShowUserLogin, cartCount, wishlistCount } = useContext(AppContext);

  return (
    <header className="w-full mx-auto flex flex-col justify-center relative border-b border-gray-200">
      {/* Announcement bar */}
      <div className="header-top w-full mx-auto text-center">
        <div className="block bg-customblack shadow text-center w-full py-1.5">
          <p className="text-white text-sm font-normal capitalize p-1 text-center w-full">
            Summer sale for all items with free express delivery - off 50%.{" "}
            <a className="text-sm font-semibold underline" href="/">ShopNow</a>
          </p>
        </div>
      </div>

      <nav className="w-full mx-auto header-menu">
        <div className="custom-container flex flex-row items-center gap-10 w-full py-4">
          {/* Logo */}
          <div className="menu-left w-[28%]">
            <Link to={"/"} className="!no-underline">
              <span className="text-3xl font-bold color-accentbkp px-2">Exclusive</span>
            </Link>
          </div>

          {/* Desktop nav links */}
          <div className="menu-center w-1/3">
            <div className="hidden md:block nav-menu">
              <ul className="flex flex-row items-center justify-center gap-2">
                {[
                  { label: "Home", to: "/" },
                  { label: "Contact", to: "/contact" },
                  { label: "About", to: "/about" },
                ].map(({ label, to }) => (
                  <li key={label} className="list-none px-3 py-2">
                    <Link className="no-underline" to={to}>{label}</Link>
                  </li>
                ))}
                {/* Show Sign Up link only when logged out */}
                {!user && (
                  <li className="list-none px-3 py-2">
                    <Link to="/signup">Sign Up</Link>
                  </li>
                )}
              </ul>
            </div>
          </div>

          {/* Right icons */}
          <div className="menu-right w-1/3">
            <ul className="flex flex-row items-center justify-end gap-4">
              {/* Search */}
              <li className="flex items-center gap-2.5 border border-gray-300 rounded-full px-3.5 py-1.5">
                <span className="text-sm hidden sm:inline">What are you looking for?</span>
                <CiSearch className="font-medium" size="1.5em" />
              </li>

              {/* Wishlist icon with badge */}
              <li className="relative cursor-pointer" onClick={() => navigate("/wishlist")}>
                <CiHeart className="font-bold text-[2rem]" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[var(--color-accentbkp)] text-white text-[10px] font-bold flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </li>

              {/* Cart icon with badge */}
              <li className="relative cursor-pointer" onClick={() => navigate("/cart")}>
                <PiShoppingCartThin className="font-bold text-[2rem]" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[var(--color-accentbkp)] text-white text-[10px] font-bold flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </li>

              {/* User / login */}
              {user ? (
                <div className="relative group hidden md:block">
                  <FaUserCircle className="text-[2rem] cursor-pointer" />
                  <ul className="hidden group-hover:block absolute top-8 right-0 bg-white shadow border border-gray-200 py-2 w-36 rounded-md z-40 text-sm">
                    <li className="px-3 py-1.5 font-medium text-gray-700 border-b border-gray-100 truncate">
                      {user.name}
                    </li>
                    <li onClick={() => navigate("/my-orders")} className="px-3 py-1.5 cursor-pointer hover:bg-gray-50">
                      My Orders
                    </li>
                    <li onClick={() => navigate("/wishlist")} className="px-3 py-1.5 cursor-pointer hover:bg-gray-50">
                      Wishlist
                    </li>
                    <li className="px-3 py-1.5 cursor-pointer hover:bg-gray-50 text-[var(--color-accentbkp)]" onClick={() => setUser(null)}>
                      Logout
                    </li>
                  </ul>
                </div>
              ) : (
                <li className="list-none hidden md:block">
                  <Link to="/login" className="px-4 py-2 rounded bg-[var(--color-accentbkp)] text-white text-sm hover:opacity-90 transition-opacity !text-white !no-underline">
                    Login
                  </Link>
                </li>
              )}

              {/* Hamburger */}
              <button onClick={() => setOpen((p) => !p)} aria-label="Menu" className="md:hidden">
                <CgMenuRight className="font-bold text-[2rem]" />
              </button>

              {/* Mobile drawer */}
              <div className={`${open ? "block" : "hidden"} absolute top-full left-0 w-full bg-white shadow-md py-4 md:hidden z-50`}>
                <ul className="flex flex-col items-center gap-1">
                  {[
                    { label: "Home", to: "/" },
                    { label: "Contact", to: "/contact" },
                    { label: "About", to: "/about" },
                    { label: "Wishlist", to: "/wishlist" },
                    { label: "Cart", to: "/cart" },
                  ].map(({ label, to }) => (
                    <li key={label} className="list-none px-3 py-2 w-full text-center">
                      <Link to={to} onClick={() => setOpen(false)}>{label}</Link>
                    </li>
                  ))}
                  {user ? (
                    <li className="list-none px-3 py-2 cursor-pointer text-[var(--color-accentbkp)]" onClick={() => { setUser(null); setOpen(false); }}>
                      Logout
                    </li>
                  ) : (
                    <li className="list-none px-3 py-2">
                      <Link to="/login" onClick={() => setOpen(false)}>Login</Link>
                    </li>
                  )}
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
