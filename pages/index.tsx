import type { NextPage } from "next";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import UserResults from "../components/users/UserResults";

const Home: NextPage = () => {
  return (
    <main className="flex flex-col justify-center items-center mt-56 dark:text-gray-300">
      <h3 className="text-6xl p-3">Welcome!</h3>
      <div className="flex flex-col">
        <h3>Welcome to a home built Github finder project!</h3>
      </div>
      <UserResults />
    </main>
  );
};

export default Home;
