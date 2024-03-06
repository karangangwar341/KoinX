import React from "react";

const Header = () => {
  return (
    <div className="flex p-3 px-14 gap-2 items-center">
      <p className="text-black/60">Cryptocurrencies</p>
      <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke-width="1.2"
  stroke="currentColor"
  className="text-black/60 w-4 h-4"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
  />
</svg>

      <p>
        Bitcoin
      </p>
    </div>
  );
};

export default Header;
