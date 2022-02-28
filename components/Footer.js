import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div
      className=" max-w-5xl mx-auto mt-10 p-10
      bg-blue-900"
    >
      <div className="flex justify-evenly  text-gray-300">
        <Link href="/about">
          <a>About Dusan</a>
        </Link>
        {/* <div>Get In Touch</div> */}
      </div>
    </div>
  );
}

export default Footer;
