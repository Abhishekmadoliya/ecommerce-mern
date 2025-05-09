"use client";

import { useState } from "react";
import ecommerceLogo from "../../assets/e-commerce-logo.png";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import userProileImage from "../../assets/userProfile.avif";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/cartSlice";



export default function Header() {
  const loginStatus = useSelector((state) => state.isLoggedin.username);

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedin.value);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const [data,setData] = useState();
  const Navigate = useNavigate();

  //   if(obj.name){
  //     setData(obj);
  //   }
  // console.log(data);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
  };

  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt="header-logo"
              src={ecommerceLogo}
              className="h-12 w-auto  object-cover"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12  align-middle">
          <div className="w-full max-w-sm min-w-[200px]">
            <div className="relative">
              <input
                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="UI Kits, Dashboards..."
              />
              <button
                className="absolute top-1 right-1 flex items-center rounded bg-slate-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 mr-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                    clipRule="evenodd"
                  />
                </svg>
                Search
              </button>
            </div>
          </div>

          <Link to={"/"} className="text-sm/6 font-semibold text-gray-900">
            Home
          </Link>

          <Link
            to={"/contact"}
            className="text-sm/6 font-semibold text-gray-900"
            onClick={() => Navigate("/contact")}
          >
            Contact
          </Link>
          <Link to={"/cart"} className="text-sm/6 font-semibold text-gray-900">
            Cart
          </Link>

          {isLoggedIn ? (
            <></>
          ) : (
            <>
              <Link
                to="/signup"
                className="text-sm/6 font-semibold text-gray-900"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="text-sm/6 font-semibold text-gray-900"
              >
                Login
              </Link>
            </>
          )}
          <div className=" flex gap-3">
            {/* {loginStatus.username!="user"?<p>{loginStatus.username}</p>:""} */}
            <p>{loginStatus.username || "User"}</p>
            <img
              class="w-8 h-8 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 cursor-pointer"
              src={userProileImage}
              alt="profile avatar"
            />
          </div>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end hover:cursor-pointer">
          {isLoggedIn ? (
            <span
              // onClick={() => Navigate("/")}
              onClick={handleLogout}
              className="text-sm/6 font-semibold text-gray-900"
            >
              Log out <span aria-hidden="true">&rarr;</span>
            </span>
          ) : (
            <p></p>
          )}
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <img
                alt="header-logo"
                src={ecommerceLogo}
                className="h-10 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <XMarkIcon className="size-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-4 py-6 flex flex-col">
                <Link to="/" className="text-base font-semibold text-gray-900">
                  Home
                </Link>
                <Link
                  to="/contact"
                  className="text-base font-semibold text-gray-900"
                >
                  Contact
                </Link>
                <Link
                  to="/cart"
                  className="text-base font-semibold text-gray-900"
                >
                  Cart
                </Link>

                {!isLoggedIn ? (
                  <>
                    <Link
                      to="/signup"
                      className="text-base font-semibold text-gray-900"
                    >
                      Register
                    </Link>
                    <Link
                      to="/login"
                      className="text-base font-semibold text-gray-900"
                    >
                      Login
                    </Link>
                  </>
                ) : (
                  <>
                    <div className="flex items-center gap-2">
                      <img
                        className="w-8 h-8 p-1 rounded-full ring-2 ring-gray-300"
                        src={userProileImage}
                        alt="user avatar"
                      />
                      <span className="text-sm text-gray-700">
                        {loginStatus?.username || "User"}
                      </span>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="text-left text-base font-semibold text-red-600"
                    >
                      Log out
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
