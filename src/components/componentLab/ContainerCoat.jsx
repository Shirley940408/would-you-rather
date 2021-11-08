import React from "react";
import styles from "./ContainerCoat.module.css";
export default function ContainerCoat(
  WrappedComponent,
  TitleComponent,
  propsOfWrapped = {},
  propsOfTop = {},
  extraClass = "",
  key = ""
) {
  return (
    <div className={styles.coatContainer + " " + extraClass} key={key}>
      <TitleComponent {...propsOfTop} />
      <WrappedComponent {...propsOfWrapped} />
    </div>
  );
}
