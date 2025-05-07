import {
  unstable_ViewTransition as ViewTransition,
  type ReactNode,
  type FC,
  type ComponentProps,
} from "react";
import clsx from "clsx";

import * as styles from "./layout.module.css";
import { Pagenator } from "./pagenator";
import { size } from "./[page]/slideContents";

export default function SlideLayout({
  children,
}: {
  readonly children: ReactNode;
}) {
  return (
    <main className={styles.main}>
      <ViewTransition
        default={{
          default: "auto",
          "navigation-back": styles.reverseTransition,
          "navigation-forward": styles.normalTransition,
        }}
      >
        {children}
      </ViewTransition>
      <Pagenator min={1} max={size - 1} />
    </main>
  );
}
