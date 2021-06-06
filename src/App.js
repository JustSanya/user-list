import React from "react";
import styles from "./App.module.scss";
import UserWrapper from "./components/UserWrapper";
import ControlsWrapper from "./components/Controls/ControlsWrapper";

function App() {
  return (
    <div className={styles.container}>
      <ControlsWrapper />
      <UserWrapper />
    </div>
  );
}

export default App;
