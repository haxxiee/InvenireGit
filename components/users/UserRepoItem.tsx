import { FC } from "react";
import Link from "next/link";
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa";

const UserRepoItem: FC<any> = ({ repo }) => {
  return (
    <div className="border-b-2 m-4 dark:border-gray-900">
      <div className="flex items-center">
        <Link href={repo.html_url}>
          <a target="_blank">
            <FaLink className="mr-4" />
          </a>
        </Link>
        <h1 className="text-lg font-semibold">{repo.name}</h1>
      </div>
      <div className="flex my-2 mb-6">
        <div className="flex justify-center items-center bg-purple-100 text-purple-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900">
          <FaEye className="mr-1" />
          {repo.watchers}
        </div>

        <div className="flex justify-center items-center bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">
          <FaStar className="mr-1" />
          {repo.stargazers_count}
        </div>
        <div className="flex justify-center items-center bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
          <FaInfo className="mr-1" />
          {repo.open_issues}
        </div>
        <div className="flex justify-center items-center bg-indigo-100 text-indigo-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900">
          <FaUtensils className="mr-1" />
          {repo.watchers_count}
        </div>
      </div>
    </div>
  );
};

export default UserRepoItem;
