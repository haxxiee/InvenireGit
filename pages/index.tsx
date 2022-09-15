import type { NextPage } from "next";
import UserResults from "../components/users/UserResults";
import UserSearch from "../components/users/UserSearch";

const Home: NextPage = () => {
  return (
    <main className="flex flex-col justify-center items-center mt-56 dark:text-gray-300">
      <h3 className="text-6xl p-3">Welcome!</h3>
      <div className="flex flex-col">
        <h3>
          Search for whatever user you want to find on{" "}
          <span className="bg-indigo-200 dark:bg-indigo-900">
            <a href="www.github.com">Github!</a>
          </span>
        </h3>
      </div>
      <UserSearch />
      <UserResults />
    </main>
  );
};

export default Home;
