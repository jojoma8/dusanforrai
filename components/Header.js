import React from "react";

function Header() {
  return (
    <div
      className="flex flex-col  sticky top-0 z-40  py-2 mx-auto
        bg-white  max-w-5xl"
    >
      <div className="flex justify-between">
        <div
          className="text-slate-800 font-sans text-4xl p-5
            font-bold"
        >
          Dusan Forrai Consultancy
        </div>
        <div className="flex items-center pr-5">
          <div className="p-3">Home</div>
          <div className="p-3">About</div>
          <div className="p-3">Contact</div>
        </div>
      </div>
      <div
        className="flex items-center justify-between bg-blue-900 py-2 px-5
        font-semibold"
      >
        <div className="text-white ">dusanforrai@email.com</div>
        <div className="text-white ">Mobile: +44 777 888 999</div>
      </div>
    </div>
  );
}

export default Header;
