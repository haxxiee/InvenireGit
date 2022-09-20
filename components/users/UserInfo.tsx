import { FC } from "react";

interface Props {
  title: string;
  subTitle: string;
}

const UserInfoContainer: FC<Props> = ({ title, subTitle }) => {
  return (
    <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg m-5 dark:bg-gray-800">
      <h1 className="font-bold">{title}</h1>
      <h2>{subTitle}</h2>
    </div>
  );
};

export default UserInfoContainer;
