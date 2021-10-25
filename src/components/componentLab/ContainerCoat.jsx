import React from "react";
import styles from "./ContainerCoat.module.css";
export default function ContainerCoat(
  WrappedComponent,
  TitleComponent,
  propsOfWrapped = {},
  propsOfTop = {},
  extraClass = ""
) {
  return (
    <div className={styles.coatContainer + " " + extraClass}>
      <TitleComponent {...propsOfTop} />
      <WrappedComponent {...propsOfWrapped} />
    </div>
  );
}
