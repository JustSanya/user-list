import React from "react";
import styles from "./UserPreview.module.scss";
import classNames from "classnames";

export default function UserRow({ user }) {
  let agePostfix = "";
  switch (user.age % 10) {
    case 1:
      agePostfix = "год";
      break;
    case 2:
    case 3:
    case 4:
      agePostfix = "года";
      break;
    default:
      agePostfix = "лет";
  }
  return (
    <div
      className={classNames(styles.item, {
        [styles.itemHasVideo]: user.video,
      })}
    >
      <div
        className={classNames(styles.itemInner, {
          [styles.itemInnerHasVideo]: user.video,
        })}
      >
        <div className={styles.userInfo}>
          <div className={styles.itemHeader}>
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
            <div className={styles.favorite}>
              <button
                className={classNames(styles.favoriteBtn, {
                  [styles.favoriteBtnActive]: user.favourite,
                })}
              >
                &#9733;
              </button>
            </div>
          </div>
          <div className={styles.age}>
            {user.age} {agePostfix}
          </div>
          <div className={styles.phone}>{user.phone}</div>
          <div className={styles.phrase}>{user.phrase}</div>
        </div>
        {user.video && (
          <div className={styles.video}>
            <video
              controls
              src={`${process.env.PUBLIC_URL}/videos/${user.video}.mp4`}
            ></video>
          </div>
        )}
      </div>
    </div>
  );
}
