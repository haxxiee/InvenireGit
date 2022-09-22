import type { NextPage } from "next";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";

const About: NextPage = () => {
  return (
    <main className="flex flex-col justify-center items-center my-auto text-center dark:text-gray-300">
      <h1 className="text-6xl font-semibold p-4">InvenireGit</h1>
      <p className="text-xl">
        A NextJS app to search GitHub profiles and see profile details.
      </p>
      <div className="flex justify-center items-center m-2 text-3xl">
        <TbBrandNextjs />
        <FaReact />
        <SiRedux />
        <TbBrandTailwind />
      </div>

      <div className="flex justify-center items-center gap-2">
        <p className="text-gray-500 dark:text-gray-400">
          Version <span className="text-black dark:text-gray-300">1.0.0</span>
        </p>
        <p className="text-gray-500 dark:text-gray-400">
          Made by:
          <span className="text-black dark:text-gray-300"> Linus Foxell</span>
        </p>
      </div>
    </main>
  );
};

export default About;
