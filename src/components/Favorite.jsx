import React from "react";
import classNames from "classnames";

import { useDispatch } from "react-redux";
import styles from "../styles/UserRow.module.scss";
import { toggleFavorite } from "../redux/users";

export default function Favorite({ userId, favorite }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleFavorite(userId));
  };
  return (
    <button
      onClick={handleClick}
      className={classNames(styles.favoriteBtn, {
        [styles.favoriteBtnActive]: favorite,
      })}
    >
      &#9733;
    </button>
  );
}
