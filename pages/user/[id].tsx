import { GetServerSideProps } from "next";
import type { NextPage } from "next";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { UserObject, RepoObject } from "../../types";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { removeRepos } from "../../app/store/slices/repoSlice";
import { getUserRepos } from "../../app/store/actions/repoAction";

const User: NextPage = ({ data }: any) => {
  const { repos } = useAppSelector((state) => state.repos);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(removeRepos());
    dispatch(getUserRepos(data.login));
  }, []);

  console.log(data);

  return (
    <div className="flex flex-col justify-center items-center mt-56 dark:text-gray-300">
      <div className="mb-3 rounded-full w-56 h-56 shadow-lg overflow-hidden">
        <Image
          alt="github profile avatar"
          src={data.avatar_url}
          width={250}
          height={250}
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="flex justify-center items-center">
        <h1 className="text-5xl font-bold m-2">{data.login}</h1>
        {/* <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900">
          {data.type}
        </span> */}
        <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">
          {data.type}
        </span>
        <Link href={data.html_url} passHref>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 dark:hover:bg-blue-300"
          >
            Visit Page
          </a>
        </Link>
      </div>

      <div className="max-w-xl text-center">
        <p>{data.bio}</p>
      </div>
      <div className="flex text-center">
        {data.location && (
          <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg m-5 dark:bg-gray-800">
            <h1 className="font-bold">Location</h1>
            <h2>{data.location}</h2>
          </div>
        )}
        {data.blog && (
          <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg m-5 dark:bg-gray-800">
            <h1 className="font-bold">Website</h1>
            <h2>{data.blog}</h2>
          </div>
        )}
        {data.twitter_username && (
          <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg m-5 dark:bg-gray-800">
            <h1 className="font-bold">Twitter</h1>
            <h2>{data.twitter_username}</h2>
          </div>
        )}
      </div>

      {/* <div>
        {repos.map((repo: RepoObject) => (
          <div key={repo.id}>{repo.name}</div>
        ))}
      </div> */}
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
