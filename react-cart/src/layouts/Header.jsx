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
  const { user, setUser, navigate, setShowUserLogin } = useContext(AppContext);

  return (
    <header className="w-full mx-auto flex flex-col justify-center relative">
      <div className="header-top w-full mx-auto text-center">
        <div className="block bg-customblack shadow text-center w-full">
          <p className="text-white text-sm font-normal capitalize p-1 text-center w-full">
            Summer sale for all items with free express delivary - off 50%.
            <a className="text-sm font-semibold underline" href="/">
              ShopNow
            </a>
          </p>
        </div>
      </div>
      <nav className="w-full mx-auto header-menu shadow">
        <div className="custom-container flex flex-row items-center justify-between w-full py-2">
          <div className="menu-left block w-[60%]">
            <div className="logo float-left">
              <Link to={"/"} className="!no-underline w-10 h-10">
                <span className="text-3xl font-bold color-accentbkp">
                  Logo
                </span>
              </Link>
            </div>
            <div className="hidden md:block nav-menu float-right">
              <ul className="flex flex-row items-center justify-centre gap-2">
                <li className="list-none px-3 py-2">
                  <Link className="no-underline" to={"/"}>
                    Home
                  </Link>
                </li>
                {/* <li className="list-none px-3 py-2">
                  <Link to={"/products"}>Products</Link>
                </li> */}
                <li className="list-none px-3 py-2">
                  <Link to={"/about"}>About</Link>
                </li>
                <li className="list-none px-3 py-2">
                  <Link to={"/contact"}>Contact</Link>
                </li>
                {/* <li>Sign Up</li> */}
              </ul>
            </div>
          </div>
          <div className="menu-right block">
            <ul className="flex flex-row items-center justify-end gap-4">
              <li className="flex gap-1 bg-gray-100 px-3.5 py-1.5">
                <span className="text-xs">What are you looking for?</span><CiSearch size="1.5em" />
              </li>
              <li>
                <span>
                  <CiHeart size="1.5em" />
                </span>
              </li>
              <li
                onClick={() => {
                  navigate("/cart");
                }}
              >
                <span>
                  <PiShoppingCartThin size="1.5em" />
                </span>
              </li>
              {user ? (
                <>
                  <div className="relative group hidden md:block">
                    <FaUserCircle size="1.5em" />
                    <ul className="hidden group-hover:block absolute top-8 right-0 bg-white shadow border border-gray-200 py-2 w-30 rounded-md z-40 text-sm">
                      <li
                        onClick={() => navigate("/my-orders")}
                        className="p-1.5 cursor-pointer"
                      >
                        My Orders
                      </li>
                      <li
                        className="cursor-pointer p-1.5"
                        onClick={() => {
                          setUser(null);
                        }}
                      >
                        Logout
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <li
                  className="list-none px-3 py-2"
                  onClick={() => {
                    setOpen(false);
                    setShowUserLogin(true);
                  }}
                >
                  Login
                </li>
              )}

              {/* hamburger button */}
              <button
                onClick={() => (open ? setOpen(false) : setOpen(true))}
                aria-label="Menu"
                className="sm:hidden"
              >
                <CgMenuRight size="1.5em" />
              </button>
              {/* hamburger button ends*/}

              {/* mobile menu starts */}
              <div className={`${open ? "block" : "hidden"} nav-menu absolute top-4 right-0 bg-white shadow-md p-4 md:hidden`}>
                <ul className="flex flex-col items-center justify-centre gap-2">
                  <li className="list-none px-3 py-2">
                    <Link className="no-underline" to={"/"}>
                      Home
                    </Link>
                  </li>
                  <li className="list-none px-3 py-2">
                    <Link to={"/products"}>Products</Link>
                  </li>
                  <li className="list-none px-3 py-2">
                    <Link to={"/about"}>About</Link>
                  </li>
                  <li className="list-none px-3 py-2">
                    <Link to={"/contact"}>Contact</Link>
                  </li>
                  {user ? (
                    <>
                      <div className="relative group block md:hidden">
                        <FaUserCircle size="1.5em" />
                        <ul className="hidden group-hover:block absolute top-10 right-0 bg-white shadow border border-gray-200 py-2 w-30 rounded-md z-40 text-sm">
                          <li
                            onClick={() => navigate("/my-orders")}
                            className="p-1.5 cursor-pointer"
                          >
                            My Orders
                          </li>
                          <li
                            className="cursor-pointer p-1.5"
                            onClick={() => {
                              setUser(null);
                            }}
                          >
                            Logout
                          </li>
                        </ul>
                      </div>
                    </>
                  ) : (
                    <li
                      className="list-none px-3 py-2"
                      onClick={() => {
                        setOpen(false);
                        setShowUserLogin(true);
                      }}
                    >
                      Login
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
