import { GetServerSideProps } from "next";
import type { NextPage } from "next";
import { useEffect } from "react";
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

  return (
    <div className="flex flex-col justify-center items-center mt-56 dark:text-gray-300">
      <h1 className="text-2xl">{data.login}</h1>
      <div>
        {repos.map((repo: RepoObject) => (
          <div key={repo.id}>{repo.name}</div>
        ))}
      </div>
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
