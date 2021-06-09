import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { changeViewType, selectViewType } from "../../redux/users";
import {
  radioWrap,
  radioGroup,
  controlTitle,
  controlItem,
} from "../../styles/Controls.module.scss";

export default function SortType() {
  const dispatch = useDispatch();
  const viewType = useSelector(selectViewType);
  const { t } = useTranslation();

  const onChangeHandle = ({ target }) => {
    dispatch(changeViewType(target.value));
  };
  return (
    <div className={controlItem}>
      <p className={controlTitle}>{t("viewTypeTitle")}</p>
      <div className={radioGroup}>
        <div className={radioWrap}>
          <input
            onChange={onChangeHandle}
            type="radio"
            id="viewType-table"
            value="table"
            name="viewType"
            checked={viewType === "table"}
          />
          <label htmlFor="viewType-table">{t("tableViewType")}</label>
        </div>
        <div className={radioWrap}>
          <input
            onChange={onChangeHandle}
            type="radio"
            id="viewType-preview"
            value="preview"
            name="viewType"
            checked={viewType === "preview"}
          />
          <label htmlFor="viewType-preview">{t("previewViewType")}</label>
        </div>
      </div>
    </div>
  );
}
