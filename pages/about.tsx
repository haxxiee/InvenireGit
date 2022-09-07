import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <main className="flex flex-col justify-center items-center my-auto">
      <h1 className="text-6xl font-semibold p-4">InvenireGit</h1>
      <p className="text-xl">
        A NextJS app to search GitHub profile and see profile details.
      </p>
      <div className="flex justify-center items-center gap-2">
        <p className="text-gray-500">
          Version <span className="text-black">1.0.0</span>
        </p>
        <p className="text-gray-500">
          Made by:
          <span className="text-black"> Linus Foxell</span>
        </p>
      </div>
    </main>
  );
};

export default About;
