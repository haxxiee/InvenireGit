import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getUsers } from "../../app/store/actions/userAction";
import { removeAllUsers } from "../../app/store/slices/userSlice";

const UserResults = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { users, pending } = useAppSelector((state) => state.users);

  return (
    <div>
      <div>
        <button className="border" onClick={() => dispatch(getUsers("juan"))}>
          CLICK ME
        </button>
        <button className="border" onClick={() => dispatch(removeAllUsers())}>
          CLEARINGTEST
        </button>
        {pending && <p>Loading...</p>}
        {users.map((user: any) => (
          <p key={user.id}>{user.login}</p>
        ))}
      </div>
    </div>
  );
};

export default UserResults;
