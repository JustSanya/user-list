import React from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import { filterByName } from "../../redux/users";
import {
  controlItem,
  controlTitle,
  textInput,
} from "../../styles/Controls.module.scss";

export default function NameSearch() {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const onInputHandle = ({ target }) => {
    dispatch(filterByName(target.value));
  };

  return (
    <div className={controlItem}>
      <p className={controlTitle}>{t("searchTitle")}</p>
      <input
        className={textInput}
        type="text"
        name="search"
        placeholder={t("searchPlaceholder")}
        onInput={onInputHandle}
      />
    </div>
  );
}
