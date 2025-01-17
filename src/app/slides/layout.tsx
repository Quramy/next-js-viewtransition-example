import {
  unstable_ViewTransition as ViewTransition,
  type ReactNode,
} from "react";

import * as styles from "./layout.module.css";
import { Pagenator } from "./pagenator";

export default function SlideLayout({
  children,
}: {
  readonly children: ReactNode;
}) {
  return (
    <main className={styles.main}>
      <ViewTransition name={styles.mainTransition}>
        <section>{children}</section>
      </ViewTransition>
      <Pagenator />
    </main>
  );
}
