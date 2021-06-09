import React from "react";
import { useTranslation } from "react-i18next";

import styles from "../styles/UserRow.module.scss";
import Favorite from "./Favorite";

export default function UserRow({ user }) {
  const { t } = useTranslation();

  let agePostfix = "";
  switch (user.age % 10) {
    case 1:
      agePostfix = t("agePostfix1");
      break;
    case 2:
    case 3:
    case 4:
      agePostfix = t("agePostfix2");
      break;
    default:
      agePostfix = t("agePostfix3");
  }
  return (
    <div className={styles.item}>
      <div className={styles.imgWrapper}>
        <img
          className={styles.img}
          width="40"
          height="40"
          src={`${process.env.PUBLIC_URL}/images/${user.image}.svg`}
          alt={user.image}
        />
      </div>
      <div className={styles.username}>{user.name}</div>
      <div className={styles.age}>
        {user.age} {agePostfix}
      </div>
      <div className={styles.phone}>{user.phone}</div>
      <div className={styles.favorite}>
        <Favorite userId={user.id} favorite={user.favourite} />
      </div>
    </div>
  );
}
