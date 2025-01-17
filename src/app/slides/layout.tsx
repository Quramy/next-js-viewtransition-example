"use client";

import {
  unstable_ViewTransition as ViewTransition,
  type ReactNode,
} from "react";
import clsx from "clsx";

import * as styles from "./layout.module.css";
import { Pagenator } from "./pagenator";
import { useNavigationDirection } from "./useNavigationDirection";

export default function SlideLayout({
  children,
}: {
  readonly children: ReactNode;
}) {
  const direction = useNavigationDirection();
  return (
    <main className={styles.main}>
      <ViewTransition
        className={clsx(styles.mainTransition, {
          [styles.normalTransition]: direction === "normal",
          [styles.reverseTransition]: direction === "reverse",
          none: direction == null,
        })}
      >
        <section>{children}</section>
      </ViewTransition>
      <Pagenator />
    </main>
  );
}
