import React from 'react'

const Hamburger = ({handleClick, active}) => {
  return (
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
  )
}

export default Hamburger