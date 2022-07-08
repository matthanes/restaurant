import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Logo from "./Logo";
import Hamburger from "./Hamburger";
import Button from "./Button";

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
          <Hamburger handleClick={handleClick} active={active} />

          {/* Nav Links */}
          <div
            className={`${
              active ? "" : "hidden"
            } my-8 w-full lg:flex lg:flex-grow lg:w-auto lg:items-center lg:justify-end lg:my-0 `}
          >
            <div className="w-full flex flex-col items-center text-center text-2xl gap-y-4 lg:text-base lg:flex lg:flex-row lg:w-auto lg:h-auto lg:gap-x-6">
              {/* Map Through navLinks */}
              {navLinks.map((navLink, index) => {
                return (
                  <Link key={index} href={navLink.path}>
                    <a
                      className={`${
                        router.pathname === navLink.path
                          ? "lg:border-b-rose-600"
                          : ""
                      } lg:inline-flex lg:w-auto lg:border-4 lg:border-slate-900 w-full px-3 py-2 lg:py-0 text-white font-bold items-center justify-center transition duration-500 hover:bg-rose-600 hover:rounded hover:border-rose-600`}
                    >
                      {navLink.title}
                    </a>
                  </Link>
                );
              })}

              <Button href="tel:(706) 940-0044" text="Call Now" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
