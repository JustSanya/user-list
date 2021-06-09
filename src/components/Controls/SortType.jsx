import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { changeSortKey, selectSortKey } from "../../redux/users";
import {
  radioWrap,
  radioGroup,
  controlTitle,
  controlItem,
} from "../../styles/Controls.module.scss";

export default function SortType() {
  const dispatch = useDispatch();
  const sortKey = useSelector(selectSortKey);
  const { t } = useTranslation();

  const onChangeHandle = ({ target }) => {
    dispatch(changeSortKey(target.value));
  };
  return (
    <div className={controlItem}>
      <p className={controlTitle}>{t("sortKeyTitle")}</p>
      <div className={radioGroup}>
        <div className={radioWrap}>
          <input
            onChange={onChangeHandle}
            type="radio"
            id="sort-id"
            value="id"
            name="sortKey"
            checked={sortKey === "id"}
          />
          <label htmlFor="sort-id">ID</label>
        </div>
        <div className={radioWrap}>
          <input
            onChange={onChangeHandle}
            type="radio"
            id="sort-name"
            value="name"
            name="sortKey"
            checked={sortKey === "name"}
          />
          <label htmlFor="sort-name">{t("nameSort")}</label>
        </div>
        <div className={radioWrap}>
          <input
            onChange={onChangeHandle}
            type="radio"
            id="sort-age"
            value="age"
            name="sortKey"
            checked={sortKey === "age"}
          />
          <label htmlFor="sort-age">{t("ageSort")}</label>
        </div>
      </div>
    </div>
  );
}
