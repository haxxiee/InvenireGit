import Image from "next/image";
import Link from "next/link";

const UserItem = ({ user: { login, avatar_url, id } }: any): JSX.Element => {
  return (
    <div className="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center p-8">
        <div className="mb-3 rounded-full w-28 h-28 shadow-lg overflow-hidden">
          <Image
            alt="Github profile logo"
            src={avatar_url}
            width={120}
            height={120}
          />
        </div>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {login}
        </h5>
        <Link href={`/user/${id}`}>
          <a className="text-sm text-gray-500 dark:text-gray-400">
            Visit Github
          </a>
        </Link>
      </div>
    </div>
  );
};

export default UserItem;
