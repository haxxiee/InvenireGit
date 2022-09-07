import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main className="flex flex-col justify-center items-center my-auto">
      <h3 className="text-6xl p-3">Welcome!</h3>
      <div className="flex flex-col">
        <h3>Welcome to a home built Github finder project!</h3>
      </div>
    </main>
  );
};

export default Home;
