import { FC } from "react";

interface Props {
  title: string;
  number: number;
  border: boolean;
  children: React.ReactNode;
}

const UserStatistics: FC<Props> = ({ title, number, children, border }) => {
  return (
    <div
      className={`flex justify-between items-center py-3 px-8 ${
        border
          ? "border-b-2 md:border-b-0 md:border-r-2 dark:border-gray-900"
          : ""
      } `}
    >
      <div className="p-2 mr-4">
        <h1 className="font-bold">{title}</h1>
        <h2 className="text-2xl font-bold">{number}</h2>
      </div>
      {children}
    </div>
  );
};

export default UserStatistics;
