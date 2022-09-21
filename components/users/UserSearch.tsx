import { ChangeEvent, useState, FormEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getUsers } from "../../app/store/actions/userAction";
import { removeAllUsers } from "../../app/store/slices/userSlice";

const UserSearch = (): JSX.Element => {
  const [text, setText] = useState("");

  const dispatch = useAppDispatch();
  const { users } = useAppSelector((state) => state.users);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (text === "") {
    } else {
      dispatch(getUsers(text));
      setText("");
    }
  };

  const removeButtonHandler = () => {
    dispatch(removeAllUsers());
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="container flex justify-center items-center px-4 sm:px-6 lg:px-8 mt-4">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="h-14 sm:w-96 w-72 pr-8 pl-5 rounded z-0 shadow-md focus:outline-none dark:bg-gray-800"
            placeholder="Search profile..."
            value={text}
            onChange={handleChange}
          />
          <button className="py-4 px-4 hover:text-indigo-600">
            <svg
              aria-hidden="true"
              data-prefix="fas"
              data-icon="search"
              className="w-6"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
              ></path>
            </svg>
          </button>
        </form>
      </div>
      {users.length > 0 && (
        <button
          className="py-1 px-3 m-4 font-medium rounded-md border-2 bg-transparent border-indigo-400 text-gray-600 dark:text-gray-300 dark:border-indigo-900 dark:hover:text-indigo-600 hover:text-indigo-600"
          onClick={removeButtonHandler}
        >
          Remove users
        </button>
      )}
    </div>
  );
};

export default UserSearch;
