import { GetServerSideProps } from "next";
import type { NextPage } from "next";
import { UserObject } from "../../types";

const User: NextPage = ({ data }: any) => {
  // console.log(data);
  return (
    <div className="flex flex-col justify-center items-center mt-56 dark:text-gray-300">
      <h1 className="text-2xl">UserPage {data.login}</h1>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_GITHUB_USER_URL}${context.params?.id}`,
    {
      headers: {
        Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
      },
    }
  );
  const data: UserObject = await res.json();

  if (!data.login) {
    return {
      notFound: true,
    };
  }

  return { props: { data } };
};

export default User;
