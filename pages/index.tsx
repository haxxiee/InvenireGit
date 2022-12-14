import type { NextPage } from "next";
import Head from "next/head";
import UserResults from "../components/users/UserResults";
import UserSearch from "../components/users/UserSearch";

const Home: NextPage = () => {
  return (
    <main className="flex flex-col justify-center items-center mt-56 dark:text-gray-300">
      <Head>
        <title>InvenireGit - Homepage</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h3 className="font-semibold text-6xl p-3">Welcome!</h3>
      <div className="flex flex-col">
        <h3>
          Search for whatever profile you want to find on {""}
          <span className="bg-indigo-200 dark:bg-indigo-900 rounded-sm">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              Github!
            </a>
          </span>
        </h3>
      </div>
      <UserSearch />
      <UserResults />
    </main>
  );
};

export default Home;
