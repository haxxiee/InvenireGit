import type { NextPage } from "next";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";
import { UserObject, RepoObject } from "../../types";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { removeRepos } from "../../app/store/slices/repoSlice";
import { getUserRepos } from "../../app/store/actions/repoAction";
import UserInfoContainer from "../../components/users/UserInfo";
import UserStatistics from "../../components/users/UserStatistics";
import UserRepoItem from "../../components/users/UserRepoItem";

const User: NextPage = ({ data }: any) => {
  const { repos, pending } = useAppSelector((state) => state.repos);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(removeRepos());
    dispatch(getUserRepos(data.login));
  }, [data.login, dispatch]);

  return (
    <div className="flex flex-col justify-center items-center mt-56 dark:text-gray-300">
      <Head>
        <title>{data.login} - InvenireGit</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="mb-3 rounded-full w-56 h-56 shadow-lg overflow-hidden">
        <Image
          alt="github profile avatar"
          src={data.avatar_url}
          width={250}
          height={250}
          className="rounded-lg shadow-lg"
          priority
        />
      </div>
      <div className="flex justify-center items-center">
        <h1 className="md:text-5xl text-3xl font-bold m-2">{data.login}</h1>
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
      <div className="lg:flex md:flex text-center">
        {data.location && (
          <UserInfoContainer title={"Location"} subTitle={data.location} />
        )}
        {data.blog && (
          <UserInfoContainer title={"Website"} subTitle={data.blog} />
        )}
        {data.twitter_username && (
          <UserInfoContainer
            title={"Twitter"}
            subTitle={data.twitter_username}
          />
        )}
      </div>

      <div className="lg:flex md:flex max-w-4xl bg-white shadow-lg rounded-lg m-5 dark:bg-gray-800">
        <UserStatistics
          title={"Followers"}
          number={data.followers}
          border={true}
        >
          <FaUsers className="text-2xl" />
        </UserStatistics>
        <UserStatistics
          title={"Following"}
          number={data.following}
          border={true}
        >
          <FaUserFriends className="text-2xl" />
        </UserStatistics>
        <UserStatistics
          title={"Public Repos"}
          number={data.public_repos}
          border={true}
        >
          <FaCodepen className="text-2xl" />
        </UserStatistics>
        <UserStatistics
          title={"Public Gists"}
          number={data.public_gists}
          border={false}
        >
          <FaStore className="text-2xl" />
        </UserStatistics>
      </div>

      {pending && (
        <div className="m-10">
          <svg
            className="inline mr-2 w-10 h-10 text-gray-300 animate-spin dark:text-gray-600 fill-indigo-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      )}

      {!pending && (
        <div className="max-w-4xl w-full py-4 px-8 mx-10 mt-5 bg-white shadow-lg rounded-lg dark:bg-gray-800">
          <h1 className="text-center text-2xl font-semibold">Latest repos</h1>
          {repos.map((repo: RepoObject) => (
            <UserRepoItem key={repo.id} repo={repo} />
          ))}
        </div>
      )}
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
