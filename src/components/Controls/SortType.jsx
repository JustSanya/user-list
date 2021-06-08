import React from "react";
import { useDispatch, useSelector } from "react-redux";
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

  const onChangeHandle = ({ target }) => {
    dispatch(changeSortKey(target.value));
  };
  return (
    <div className={controlItem}>
      <p className={controlTitle}>Сортировка</p>
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
          <label htmlFor="sort-name">Имя</label>
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
          <label htmlFor="sort-age">Возраст</label>
        </div>
      </div>
    </div>
  );
}
