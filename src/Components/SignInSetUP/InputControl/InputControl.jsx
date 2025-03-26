import React from "react";

import styles from "./InputControl.module.css";

function InputControl(props) {
  return (
    <div className={styles.container}>
      {props.label && <label className="text-[16px] font-bold">{props.label}</label>}
      <input type="text" {...props} className="mb-7 h-[3.5rem]" />
    </div>
  );
}

export default InputControl;
