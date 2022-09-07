import React from "react";
import Link from "next/link";

const title: string = "InvenireGit";

const Navbar = (): JSX.Element => {
  return (
    <nav className="flex justify-between items-center bg-neutral-100 p-5">
      <div className="text-2xl ml-2 font-bold">{title}</div>
      <ul className="flex mx-auto mr-2 [&>*]:px-4">
        <li>
          <Link href="/">
            <a className="mx-2 font-bold">HOME</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className="mx-2 font-bold">ABOUT</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
