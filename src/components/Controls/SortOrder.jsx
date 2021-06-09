import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { changeSortOrder, selectSortOrder } from "../../redux/users";
import {
  radioWrap,
  radioGroup,
  controlTitle,
  controlItem,
} from "../../styles/Controls.module.scss";

export default function SortType() {
  const dispatch = useDispatch();
  const sortOrder = useSelector(selectSortOrder);
  const { t } = useTranslation();

  const onChangeHandle = ({ target }) => {
    dispatch(changeSortOrder(target.value));
  };
  return (
    <div className={controlItem}>
      <p className={controlTitle}>{t("sortOrderTitle")}</p>
      <div className={radioGroup}>
        <div className={radioWrap}>
          <input
            onChange={onChangeHandle}
            type="radio"
            id="sortOrder-asc"
            value="asc"
            name="sortOrder"
            checked={sortOrder === "asc"}
          />
          <label htmlFor="sortOrder-asc">{t("ascSort")}</label>
        </div>
        <div className={radioWrap}>
          <input
            onChange={onChangeHandle}
            type="radio"
            id="sortOrder-desc"
            value="desc"
            name="sortOrder"
            checked={sortOrder === "desc"}
          />
          <label htmlFor="sortOrder-desc">{t("descSort")}</label>
        </div>
      </div>
    </div>
  );
}
