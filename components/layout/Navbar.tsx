import React from "react";
import Link from "next/link";

const title: string = "InvenireGit";

const Navbar = (): JSX.Element => {
  return (
    <nav className="fixed w-full top-0 left-0 z-10 bg-transparent">
      {/* <div className="flex justify-between mx-auto max-w-4xl"> */}
      <div className="flex justify-between items-center mx-auto max-w-7xl p-3 my-5">
        <div className="text-2xl ml-2 font-bold">{title}</div>
        <ul className="flex mx-auto mr-2 [&>*]:px-4 ">
          <li>
            <Link href="/">
              <a className="font-bold">HOME</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="font-bold">ABOUT</a>
            </Link>
          </li>
        </ul>
        <button className="w-10 h-10 bg-transparent mx-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-10"
          >
            <path
              opacity="1"
              fill="currentColor"
              d="M12 8.73a3.271 3.271 0 1 0 .002 6.542A3.271 3.271 0 0 0 12 8.73zm0 5.6c-1.29 0-2.33-1.04-2.33-2.33S10.71 9.67 12 9.67s2.33 1.04 2.33 2.33-1.04 2.33-2.33 2.33zm0 1.87c.26 0 .47.21.47.47v1.87a.47.47 0 1 1-.94 0v-1.87c0-.26.21-.47.47-.47zm0-8.4a.47.47 0 0 1-.47-.47V5.47a.47.47 0 1 1 .94 0v1.87c0 .25-.21.46-.47.46zM7.8 12c0 .26-.21.47-.47.47H5.47a.47.47 0 1 1 0-.94h1.87c.25 0 .46.21.46.47zm10.73-.47a.47.47 0 1 1 0 .94h-1.87a.47.47 0 1 1 0-.94h1.87zM8.37 9.03L7.05 7.71a.547.547 0 0 1-.09-.28c0-.26.21-.47.47-.47.11 0 .2.04.28.09l1.32 1.32c.08.08.14.2.14.33s-.05.25-.14.33c-.08.08-.2.14-.33.14s-.25-.06-.33-.14zm7.26 5.94l1.32 1.32c.06.08.09.18.09.28 0 .26-.21.47-.47.47-.11 0-.2-.04-.28-.09l-1.32-1.32a.444.444 0 0 1-.14-.34c0-.26.21-.47.47-.47.13.01.24.06.33.15zm-.33-5.8a.47.47 0 0 1-.47-.47c0-.13.05-.25.14-.33l1.32-1.32c.08-.11.22-.19.37-.19.26 0 .47.21.47.47 0 .15-.07.29-.19.37l-1.32 1.32a.38.38 0 0 1-.32.15zm-6.93 5.8c.08-.09.2-.15.33-.15.26 0 .47.21.47.47 0 .13-.06.25-.14.34l-1.32 1.32c-.08.05-.18.09-.28.09a.47.47 0 0 1-.47-.47c0-.11.04-.2.09-.28l1.32-1.32z"
            />
          </svg>
        </button>
      </div>
      {/* </div> */}
    </nav>
  );
};

export default Navbar;
