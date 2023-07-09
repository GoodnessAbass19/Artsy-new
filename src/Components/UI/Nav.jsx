import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [open, setOpen] = useState(false);

  // navlinks
  const menuLinks = [
    { name: "Home", link: "/" },
    { name: "Marketplace", link: "marketplace" },
    { name: "Auctions", link: "auctions" },
    { name: "Drops", link: "drop" },
  ];

  return (
    <nav className="container mx-auto left-0 top-0 overflow-hidden lg:p-10">
      {/* desktop menu */}
      <div className="flex justify-between mx-auto">
        <div
          onClick={() => setOpen(!open)}
          className={`z-[9999] md:text-4xl text-2xl font-semibold items-center lg:hidden ${
            open ? "text-black" : "text-black"
          }`}
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <div>
          <h1
            className={`lg:text-4xl text-2xl font-semibold font-serif`}
            style={{ fontFamily: "Playfair Display SC" }}
          >
            ARTSY.
          </h1>
        </div>
        <div className="hidden lg:block">
          <ul className="flex justify-between items-center gap-10 font-normal not-italic text-2xl">
            {menuLinks.map((links, i) => (
              <li key={i}>
                <NavLink
                  to={links.link}
                  className="active:border-b-2 border-black p-5"
                >
                  {links.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* mobile navbar */}
        <div
          className={`absolute h-screen duration-300 z-[999] w-full  bg-white text-black ${
            open ? "left-0" : "left-[-100%]"
          }`}
        >
          <ul className="justify-center h-full gap-10 text-left px-10 py-20 text-2xl">
            {menuLinks.map((links, i) => (
              <li key={i} className="p-5">
                <NavLink
                  to={links.link}
                  className="active:border-b-2 border-black "
                >
                  {links.name}
                </NavLink>
              </li>
            ))}
            <div
              className={`absolute bottom-5 right-4 z-[999] cursor-pointer text-white text-4xl bg-[#3341C1] shadow-md shadow-black w-16 h-16 flex items-center justify-center rounded-full sm:right-8 animate-bounce ${
                open ? "block" : "hidden"
              } `}
            >
              <NavLink to={'/'} >
                <ion-icon name="chatbox"></ion-icon>
              </NavLink>
            </div>
          </ul>
        </div>

        <div
          className={`text-2xl lg:text-3xl font-semibold gap-5 ${
            open ? "hidden" : "block"
          }`}
        >
          <ion-icon name="cart-outline"></ion-icon>
          <ion-icon name="search-outline"></ion-icon>
          <ion-icon name="notifications-outline"></ion-icon>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
