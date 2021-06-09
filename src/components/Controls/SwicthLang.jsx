import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import {
  radioWrap,
  radioGroup,
  controlItem,
} from "../../styles/Controls.module.scss";

export default function SortType() {
  const [lang, setLang] = useState("ru");
  const { i18n } = useTranslation();

  const onChangeHandle = ({ target }) => {
    setLang(target.value);
    i18n.changeLanguage(target.value);
  };
  return (
    <div className={controlItem}>
      <div className={radioGroup}>
        <div className={radioWrap}>
          <input
            onChange={onChangeHandle}
            type="radio"
            id="lang-ru"
            value="ru"
            name="lang"
            checked={lang === "ru"}
          />
          <label htmlFor="lang-ru">RU</label>
        </div>
        <div className={radioWrap}>
          <input
            onChange={onChangeHandle}
            type="radio"
            id="lang-en"
            value="en"
            name="lang"
            checked={lang === "en"}
          />
          <label htmlFor="lang-en">ENG</label>
        </div>
      </div>
    </div>
  );
}
