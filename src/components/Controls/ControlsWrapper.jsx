import React from "react";

import SortType from "./SortType";
import ViewType from "./ViewType";
import SortOrder from "./SortOrder";
import NameSearch from "./NameSearch";
import SwicthLang from "./SwicthLang";

import { controlsWrapper } from "../../styles/Controls.module.scss";

export default function ControlsWrapper() {
  return (
    <div>
      <SwicthLang />
      <div className={controlsWrapper}>
        <SortType />
        <ViewType />
        <SortOrder />
        <NameSearch />
      </div>
    </div>
  );
}
