import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Logo from "./Logo";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const router = useRouter();

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Menu", path: "/menu" },
  ];

  return (
    <>
      <nav className="bg-slate-900 font-montaga">
        <div className="flex items-center flex-wrap justify-between bg-slate-900 p-4 max-w-6xl mx-auto">
          <Logo />

          {/* Hamburger and X Button */}
          <button
            className="flex flex-col p-3 hover:bg-rose-600 rounded lg:hidden text-white hover:text-white outline-none"
            onClick={handleClick}
          >
            <div
              className={`h-1 w-6 my-[.1875rem] rounded-full bg-white transition ease transform duration-300 ${
                active
                  ? "rotate-45 translate-y-[.625rem] opacity-75 group-hover:opacity-100"
                  : "opacity-75 group-hover:opacity-100"
              }`}
            />
            <div
              className={`h-1 w-6 my-[.1875rem] rounded-full bg-white transition ease transform duration-300 ${
                active ? "opacity-0" : "opacity-75 group-hover:opacity-100"
              }`}
            />
            <div
              className={`h-1 w-6 my-[.1875rem] rounded-full bg-white transition ease transform duration-300 ${
                active
                  ? "-rotate-45 -translate-y-[.625rem] opacity-75 group-hover:opacity-100"
                  : "opacity-75 group-hover:opacity-100"
              }`}
            />
          </button>

          {/* Nav Links */}
          <div
            className={`${
              active ? "" : "hidden"
            }   w-full lg:flex lg:flex-grow lg:w-auto lg:items-center lg:justify-end `}
          >
            <div className="lg:flex lg:flex-row lg:w-auto w-full flex flex-col lg:h-auto lg:gap-x-6">
              {/* Map Through navLinks */}
              {navLinks.map((navLink, index) => {
                return (
                  <Link key={index} href={navLink.path}>
                    <a
                      className={`${
                        router.pathname === navLink.path
                          ? "lg:border-b-4 lg:border-rose-600"
                          : ""
                      } lg:inline-flex lg:w-auto w-full px-3 py-2 lg:py-0 text-white font-bold items-center justify-center hover:bg-rose-600 hover:text-white hover:rounded `}
                    >
                      {navLink.title}
                    </a>
                  </Link>
                );
              })}

              {/* Add Call Now at the end of Navbar */}
              <Link href="tel:(706) 940-0044">
                <a className="lg:inline-flex lg:w-auto lg:ml-8 w-full px-3 py-2 rounded text-white font-bold items-center justify-center lg:bg-rose-700 hover:bg-rose-600 hover:text-white">
                  Call Now
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
