import { unstable_ViewTransition as ViewTransition } from "react";
import { Toggle } from "./toggle";

import * as styles from "./page.module.css";

export default function BasicPage() {
  return (
    <ViewTransition className={styles.toggle}>
      <Toggle />
    </ViewTransition>
  );
}
