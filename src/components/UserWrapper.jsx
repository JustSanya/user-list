import React, { useEffect, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchUsers,
  selectViewType,
  selectFilteredUsers,
} from "../redux/users";

import UserRow from "./UserRow";
import styles from "../styles/UserWrapper.module.scss";

export default function UserWrapper() {
  const UserPreview = React.lazy(() => import("./UserPreview"));

  const dispatch = useDispatch();
  const viewType = useSelector(selectViewType);
  const users = useSelector(selectFilteredUsers);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      {viewType === "table" ? (
        <div className={styles.userTable}>
          {users.map((el) => (
            <UserRow key={el.id} user={el} />
          ))}
        </div>
      ) : (
        <Suspense fallback={<div>Loading...</div>}>
          <div className={styles.userPreview}>
            {users.map((el) => (
              <UserPreview user={el} key={el.id} />
            ))}
          </div>
        </Suspense>
      )}
    </div>
  );
}
